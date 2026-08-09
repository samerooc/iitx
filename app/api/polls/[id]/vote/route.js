import { NextResponse } from 'next/server';
import { supabase, isConfiguredSupabase } from '@/lib/supabase';
import { readData, writeData } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function POST(request, { params }) {
  try {
    const { id: poll_id } = params;
    const { candidateId, voterName, instaUsername, snapUsername } = await request.json();

    if (isConfiguredSupabase()) {
      // 1. Record voter audit row
      await supabase.from('voter_records').insert([
        {
          poll_id,
          candidate_id: typeof candidateId === 'string' && candidateId.includes('-') ? candidateId : null,
          voter_name: voterName || 'Anonymous Student',
          insta_username: instaUsername || '',
          snap_username: snapUsername || ''
        }
      ]);

      // 2. Increment vote count
      if (candidateId) {
        const { data: cand } = await supabase.from('poll_candidates').select('votes').eq('id', candidateId).single();
        if (cand) {
          await supabase.from('poll_candidates').update({ votes: (cand.votes || 0) + 1 }).eq('id', candidateId);
        }
      }

      return NextResponse.json({ success: true });
    }

    const polls = readData('polls') || [];
    const updated = polls.map((p) => {
      if (p.id === poll_id) {
        return {
          ...p,
          totalVotes: (p.totalVotes || 0) + 1,
          options: p.options.map((opt, idx) => {
            if (opt.id === candidateId || idx === candidateId) {
              return { ...opt, votes: (opt.votes || 0) + 1 };
            }
            return opt;
          })
        };
      }
      return p;
    });
    writeData('polls', updated);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
