import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { readData, writeData } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
      const { data, error } = await supabase.from('poll_candidates').select('*');
      if (!error && data) {
        return NextResponse.json(
          data.map((c) => ({
            id: c.id,
            name: c.name,
            position: 'Candidate',
            party: 'Independent',
            year: '3rd Year',
            manifesto: '',
            avatar: c.photo_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
            votes: c.votes || 0
          }))
        );
      }
    }
  } catch (e) {}

  const candidates = readData('candidates') || [];
  return NextResponse.json(candidates);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const candidates = readData('candidates') || [];

    const newCandidate = {
      id: 'c' + Date.now(),
      name: body.name,
      position: body.position || 'President',
      party: body.party || 'Independent',
      year: body.year || '3rd Year',
      manifesto: body.manifesto || '',
      avatar: body.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
      votes: 0
    };

    candidates.push(newCandidate);
    writeData('candidates', candidates);

    return NextResponse.json({ success: true, candidate: newCandidate });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
