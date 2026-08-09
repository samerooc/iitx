import { NextResponse } from 'next/server';
import { supabase, isConfiguredSupabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();

    if (isConfiguredSupabase()) {
      const { data, error } = await supabase
        .from('ministers')
        .update({
          name: body.name,
          portfolio: body.portfolio,
          description: body.description,
          photo_url: body.photo_url || body.photoUrl || '',
          tagline: body.tagline || '',
          instagram_url: body.instagram_url || '',
          twitter_url: body.twitter_url || '',
          linkedin_url: body.linkedin_url || ''
        })
        .eq('id', id)
        .select()
        .single();

      if (!error && data) {
        return NextResponse.json({ success: true, minister: data });
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    if (isConfiguredSupabase()) {
      await supabase.from('ministers').delete().eq('id', id);
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
