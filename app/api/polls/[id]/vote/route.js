import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function POST(request, { params }) {
  try {
    const { id: pollId } = params;
    const { candidateId, voterName, instaUsername, snapUsername } = await request.json();

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
      // 1. Record voter in voter_records table
      const { error: vError } = await supabase
        .from('voter_records')
        .insert([
          {
            poll_id: pollId,
            candidate_id: candidateId,
            voter_name: voterName || 'Anonymous Student',
            insta_username: instaUsername || '',
            snap_username: snapUsername || ''
          }
        ]);

      // 2. Increment candidate votes count in poll_candidates table
      const { data: cand } = await supabase
        .from('poll_candidates')
        .select('votes')
        .eq('id', candidateId)
        .single();

      if (cand) {
        await supabase
          .from('poll_candidates')
          .update({ votes: (cand.votes || 0) + 1 })
          .eq('id', candidateId);
      }

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
