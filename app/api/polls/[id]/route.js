import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { readData, writeData } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { optionIndex } = await request.json();

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
      // Handled via /api/polls/[id]/vote route
      return NextResponse.json({ success: true });
    }

    let polls = readData('polls') || [];
    polls = polls.map((p) => {
      if (p.id === id && optionIndex !== undefined) {
        const updatedOptions = [...p.options];
        if (updatedOptions[optionIndex]) {
          updatedOptions[optionIndex].votes += 1;
        }
        return {
          ...p,
          options: updatedOptions,
          totalVotes: p.totalVotes + 1
        };
      }
      return p;
    });

    writeData('polls', polls);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
      await supabase.from('polls').delete().eq('id', id);
      return NextResponse.json({ success: true });
    }

    let polls = readData('polls') || [];
    polls = polls.filter((p) => p.id !== id);
    writeData('polls', polls);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
