import { NextResponse } from 'next/server';
import { supabase, isConfiguredSupabase } from '@/lib/supabase';
import { readData, writeData } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();

    if (isConfiguredSupabase()) {
      const isRead = body.status === 'Resolved' || body.isRead || body.is_read;
      await supabase.from('contact_messages').update({ is_read: isRead }).eq('id', id);
      return NextResponse.json({ success: true });
    }

    const tickets = readData('tickets') || [];
    const updated = tickets.map((t) => (t.id === id ? { ...t, ...body } : t));
    writeData('tickets', updated);
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    if (isConfiguredSupabase()) {
      await supabase.from('contact_messages').delete().eq('id', id);
      return NextResponse.json({ success: true });
    }

    const tickets = readData('tickets') || [];
    const filtered = tickets.filter((t) => t.id !== id);
    writeData('tickets', filtered);
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
