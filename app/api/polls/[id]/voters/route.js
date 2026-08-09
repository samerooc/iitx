import { NextResponse } from 'next/server';
import { supabase, isConfiguredSupabase } from '@/lib/supabase';
import { readData } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request, { params }) {
  try {
    const { id: poll_id } = params;

    if (isConfiguredSupabase()) {
      const { data, error } = await supabase
        .from('voter_records')
        .select('*')
        .eq('poll_id', poll_id)
        .order('created_at', { ascending: false });

      if (!error && Array.isArray(data)) {
        return NextResponse.json(data);
      }
    }
  } catch (e) {}

  const votes = readData('votes') || [];
  return NextResponse.json(votes);
}
