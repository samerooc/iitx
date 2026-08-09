import { NextResponse } from 'next/server';
import { supabase, isConfiguredSupabase } from '@/lib/supabase';
import { readData, writeData } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    if (isConfiguredSupabase()) {
      const { data: pollsData, error: pollsError } = await supabase
        .from('polls')
        .select('*')
        .order('created_at', { ascending: false });

      if (!pollsError && Array.isArray(pollsData)) {
        const { data: candidatesData } = await supabase.from('poll_candidates').select('*');

        const combined = pollsData.map((p) => {
          const pollCands = (candidatesData || []).filter((c) => c.poll_id === p.id);
          const totalVotes = pollCands.reduce((sum, c) => sum + (c.votes || 0), 0);
          return {
            id: p.id,
            question: p.title,
            isActive: p.is_active,
            options: pollCands.map((c) => ({
              id: c.id,
              text: c.name,
              votes: c.votes || 0,
              photoUrl: c.photo_url || ''
            })),
            totalVotes
          };
        });
        return NextResponse.json(combined);
      }
    }
  } catch (e) {}

  const polls = readData('polls') || [];
  return NextResponse.json(polls);
}

export async function POST(request) {
  try {
    const { question, options } = await request.json();

    if (isConfiguredSupabase()) {
      const { data: poll, error } = await supabase
        .from('polls')
        .insert([{ title: question, is_active: true }])
        .select()
        .single();

      if (!error && poll) {
        const candidateRows = (options || []).map((opt) => ({
          poll_id: poll.id,
          name: typeof opt === 'string' ? opt : opt.text,
          photo_url: typeof opt === 'object' ? opt.photoUrl || '' : '',
          votes: 0
        }));

        const { data: cands } = await supabase.from('poll_candidates').insert(candidateRows).select();

        return NextResponse.json({
          success: true,
          poll: {
            id: poll.id,
            question: poll.title,
            isActive: true,
            options: (cands || []).map((c) => ({ id: c.id, text: c.name, votes: 0, photoUrl: c.photo_url })),
            totalVotes: 0
          }
        });
      }
    }

    const polls = readData('polls') || [];
    const newPoll = {
      id: 'p' + Date.now(),
      question,
      options: options.map((o) => ({ text: typeof o === 'string' ? o : o.text, votes: 0 })),
      totalVotes: 0
    };
    polls.unshift(newPoll);
    writeData('polls', polls);

    return NextResponse.json({ success: true, poll: newPoll });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
