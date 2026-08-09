import { NextResponse } from 'next/server';
import { readData, writeData } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  const events = readData('events') || [];
  return NextResponse.json(events);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const events = readData('events') || [];

    const newEvent = {
      id: 'e' + Date.now(),
      title: body.title,
      date: body.date,
      time: body.time || '09:00 AM - 05:00 PM',
      venue: body.venue || 'Campus Auditorium',
      category: body.category || 'Technical',
      attendees: 0,
      description: body.description || ''
    };

    events.unshift(newEvent);
    writeData('events', events);

    return NextResponse.json({ success: true, event: newEvent });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
