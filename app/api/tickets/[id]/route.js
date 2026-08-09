import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { readData, writeData } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { status } = await request.json();

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
      await supabase
        .from('contact_messages')
        .update({ is_read: status === 'Resolved' })
        .eq('id', id);

      return NextResponse.json({ success: true });
    }

    let tickets = readData('tickets') || [];
    tickets = tickets.map((t) => (t.id === id ? { ...t, status } : t));
    writeData('tickets', tickets);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
      await supabase.from('contact_messages').delete().eq('id', id);
      return NextResponse.json({ success: true });
    }

    let tickets = readData('tickets') || [];
    tickets = tickets.filter((t) => t.id !== id);
    writeData('tickets', tickets);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
