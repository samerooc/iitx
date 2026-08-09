import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { readData, writeData } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
      const { data, error } = await supabase.from('admin_roles').select('*');
      if (!error && data) {
        const sanitized = data.map(({ password, ...rest }) => rest);
        return NextResponse.json(sanitized);
      }
    }
  } catch (e) {}

  const admins = readData('admins') || [];
  const sanitized = admins.map(({ password, ...rest }) => rest);
  return NextResponse.json(sanitized);
}

export async function POST(request) {
  try {
    const newAdmin = await request.json();

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
      const payload = {
        user_id: crypto.randomUUID(),
        name: newAdmin.name || newAdmin.username,
        email: newAdmin.email || `${newAdmin.username}@iitrungta.fun`,
        password: newAdmin.password,
        role: newAdmin.role || 'sub_admin',
        permissions: newAdmin.permissions || ['notices', 'ministers']
      };

      const { data, error } = await supabase.from('admin_roles').insert([payload]).select().single();
      if (!error && data) {
        const { password, ...sanitized } = data;
        return NextResponse.json({ success: true, admin: sanitized });
      }
    }

    // Local fallback
    const admins = readData('admins') || [];
    const adminObj = {
      id: 'adm-' + Date.now(),
      username: newAdmin.username,
      password: newAdmin.password,
      name: newAdmin.name || newAdmin.username,
      role: 'SUB_ADMIN',
      permissions: newAdmin.permissions || [],
      createdAt: new Date().toISOString().split('T')[0]
    };
    admins.push(adminObj);
    writeData('admins', admins);

    const { password, ...sanitized } = adminObj;
    return NextResponse.json({ success: true, admin: sanitized });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
      await supabase.from('admin_roles').delete().eq('id', id);
      return NextResponse.json({ success: true });
    }

    let admins = readData('admins') || [];
    admins = admins.filter((a) => !(a.id === id && a.role === 'MASTER_ADMIN'));
    writeData('admins', admins);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
