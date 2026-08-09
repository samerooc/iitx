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
        .from('resources')
        .update({
          title: body.title,
          category: body.category,
          type: body.type,
          author: body.author,
          link_url: body.linkUrl || body.link_url || '#',
          description: body.description
        })
        .eq('id', id);

      return NextResponse.json({ success: true });
    }

    const resources = readData('resources') || [];
    const updated = resources.map((r) => (r.id === id ? { ...r, ...body } : r));
    writeData('resources', updated);
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    if (isConfiguredSupabase()) {
      await supabase.from('resources').delete().eq('id', id);
      return NextResponse.json({ success: true });
    }

    const resources = readData('resources') || [];
    const filtered = resources.filter((r) => r.id !== id);
    writeData('resources', filtered);
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
