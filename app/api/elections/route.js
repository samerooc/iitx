import { NextResponse } from 'next/server';
import { readData, writeData } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function POST(request) {
  try {
    const { selections, voterId } = await request.json();
    let candidates = readData('candidates') || [];
    let votes = readData('votes') || [];
    const settings = readData('settings') || {};

    if (settings.electionStatus === 'FROZEN') {
      return NextResponse.json({ error: 'Elections are currently frozen by the Commission.' }, { status: 400 });
    }

    const candidateIds = Object.values(selections);

    candidates = candidates.map((c) => {
      if (candidateIds.includes(c.id)) {
        return { ...c, votes: c.votes + 1 };
      }
      return c;
    });
    writeData('candidates', candidates);

    const txnHash = '0x' + Math.random().toString(16).substr(2, 16).toUpperCase();
    const voteRecord = {
      txnHash,
      voterId: voterId || 'IITR-SU-ANON',
      timestamp: new Date().toLocaleString(),
      positionsVoted: candidateIds.length
    };

    votes.push(voteRecord);
    writeData('votes', votes);

    return NextResponse.json({ success: true, receipt: voteRecord });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const { action, status } = await request.json();
    let settings = readData('settings') || {};

    if (action === 'TOGGLE_STATUS') {
      settings.electionStatus = status;
      writeData('settings', settings);
      return NextResponse.json({ success: true, electionStatus: status });
    }

    if (action === 'RESET_TALLY') {
      let candidates = readData('candidates') || [];
      candidates = candidates.map((c) => ({ ...c, votes: 0 }));
      writeData('candidates', candidates);
      writeData('votes', []);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
