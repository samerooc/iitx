import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { readData } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function POST(request) {
  try {
    const { username, password, email } = await request.json();
    const queryEmail = email || username;

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
      const { data, error } = await supabase
        .from('admin_roles')
        .select('*')
        .or(`email.eq.${queryEmail},name.eq.${queryEmail}`)
        .single();

      if (!error && data) {
        if (data.password && data.password !== password) {
          return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
        }
        return NextResponse.json({
          success: true,
          admin: {
            id: data.id,
            email: data.email,
            name: data.name || data.email,
            role: data.role === 'master' ? 'MASTER_ADMIN' : 'SUB_ADMIN',
            permissions: Array.isArray(data.permissions) ? data.permissions : ['all']
          }
        });
      }
    }

    const admins = readData('admins') || [];
    const admin = admins.find(
      (a) => (a.username === queryEmail || a.email === queryEmail) && a.password === password
    );

    if (!admin) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const { password: _, ...adminData } = admin;
    return NextResponse.json({ success: true, admin: adminData });
  } catch (error) {
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}
