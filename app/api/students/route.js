import { NextResponse } from 'next/server';
import { supabase, isConfiguredSupabase } from '@/lib/supabase';
import { readData, writeData } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    if (isConfiguredSupabase()) {
      const { data, error } = await supabase
        .from('voter_records')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && Array.isArray(data)) {
        return NextResponse.json(data);
      }
    }
  } catch (e) {}

  const voters = readData('votes') || [];
  return NextResponse.json(voters);
}
