import { NextResponse } from 'next/server';
import { supabase, isConfiguredSupabase } from '@/lib/supabase';
import { readData, writeData } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    if (isConfiguredSupabase()) {
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

    if (isConfiguredSupabase()) {
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

    const admins = readData('admins') || [];
    const createdAdmin = {
      id: 'a' + Date.now(),
      username: newAdmin.username,
      name: newAdmin.name || newAdmin.username,
      email: newAdmin.email || `${newAdmin.username}@iitrungta.fun`,
      password: newAdmin.password,
      role: newAdmin.role || 'SUB_ADMIN',
      permissions: newAdmin.permissions || ['notices', 'ministers']
    };

    admins.push(createdAdmin);
    writeData('admins', admins);

    const { password, ...sanitized } = createdAdmin;
    return NextResponse.json({ success: true, admin: sanitized });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (isConfiguredSupabase() && id) {
      await supabase.from('admin_roles').delete().eq('id', id);
      return NextResponse.json({ success: true });
    }

    let admins = readData('admins') || [];
    admins = admins.filter((a) => a.id !== id);
    writeData('admins', admins);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
