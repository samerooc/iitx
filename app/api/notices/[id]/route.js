import { NextResponse } from 'next/server';
import { supabase, isConfiguredSupabase } from '@/lib/supabase';
import { readData, writeData } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    if (isConfiguredSupabase()) {
      await supabase.from('notices').delete().eq('id', id);
      return NextResponse.json({ success: true });
    }

    const notices = readData('notices') || [];
    const filtered = notices.filter((n) => n.id !== id);
    writeData('notices', filtered);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
