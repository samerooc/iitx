import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { readData, writeData } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
      await supabase
        .from('notices')
        .update({
          title: body.title,
          content: body.content,
          image_url: body.imageUrl,
          is_important: body.pinned
        })
        .eq('id', id);

      return NextResponse.json({ success: true });
    }

    let notices = readData('notices') || [];
    notices = notices.map((n) => (n.id === id ? { ...n, ...body } : n));
    writeData('notices', notices);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
      await supabase.from('notices').delete().eq('id', id);
      return NextResponse.json({ success: true });
    }

    let notices = readData('notices') || [];
    notices = notices.filter((n) => n.id !== id);
    writeData('notices', notices);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
