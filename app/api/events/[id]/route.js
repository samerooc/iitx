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
      await supabase
        .from('events')
        .update({
          title: body.title,
          category: body.category,
          date: body.date,
          time: body.time,
          location: body.location,
          organizer: body.organizer,
          description: body.description,
          image_url: body.imageUrl || body.image_url || ''
        })
        .eq('id', id);

      return NextResponse.json({ success: true });
    }

    const events = readData('events') || [];
    const updated = events.map((e) => (e.id === id ? { ...e, ...body } : e));
    writeData('events', updated);
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    if (isConfiguredSupabase()) {
      await supabase.from('events').delete().eq('id', id);
      return NextResponse.json({ success: true });
    }

    const events = readData('events') || [];
    const filtered = events.filter((e) => e.id !== id);
    writeData('events', filtered);
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
