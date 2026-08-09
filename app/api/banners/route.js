import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
      const { data, error } = await supabase
        .from('banners')
        .select('*')
        .order('display_order', { ascending: true });

      if (!error && data) {
        return NextResponse.json(data);
      }
    }
  } catch (e) {}

  return NextResponse.json([]);
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
      const { data, error } = await supabase
        .from('banners')
        .insert([
          {
            title: body.title,
            subtitle: body.subtitle || '',
            image_url: body.image_url || body.imageUrl || '',
            link_url: body.link_url || body.linkUrl || '',
            is_active: true,
            display_order: body.display_order || 0
          }
        ])
        .select()
        .single();

      if (!error && data) {
        return NextResponse.json({ success: true, banner: data });
      }
    }

    return NextResponse.json({ success: true, banner: { id: 'b-' + Date.now(), ...body } });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
