import { NextResponse } from 'next/server';
import { readData, writeData } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    let candidates = readData('candidates') || [];

    candidates = candidates.map((c) => (c.id === id ? { ...c, ...body } : c));
    writeData('candidates', candidates);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    let candidates = readData('candidates') || [];

    candidates = candidates.filter((c) => c.id !== id);
    writeData('candidates', candidates);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
