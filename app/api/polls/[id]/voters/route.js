import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request, { params }) {
  try {
    const { id: pollId } = params;

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
      const { data, error } = await supabase
        .from('voter_records')
        .select('*, poll_candidates(name)')
        .eq('poll_id', pollId)
        .order('created_at', { ascending: false });

      if (!error && data) {
        return NextResponse.json(data);
      }
    }
  } catch (e) {}

  return NextResponse.json([]);
}
