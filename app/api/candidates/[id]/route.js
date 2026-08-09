import { NextResponse } from 'next/server';
import { supabase, isConfiguredSupabase } from '@/lib/supabase';
import { readData, writeData } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    if (isConfiguredSupabase()) {
      await supabase.from('poll_candidates').delete().eq('id', id);
      return NextResponse.json({ success: true });
    }

    let candidates = readData('candidates') || [];
    candidates = candidates.filter((c) => c.id !== id);
    writeData('candidates', candidates);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
