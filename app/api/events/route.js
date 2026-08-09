import { NextResponse } from 'next/server';
import { supabase, isConfiguredSupabase } from '@/lib/supabase';
import { readData, writeData } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    if (isConfiguredSupabase()) {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true });

      if (!error && Array.isArray(data)) {
        return NextResponse.json(
          data.map((e) => ({
            id: e.id,
            title: e.title,
            category: e.category || 'Fest',
            date: e.date,
            time: e.time || '10:00 AM',
            location: e.location || 'Main Auditorium',
            organizer: e.organizer || 'Cultural Council',
            description: e.description,
            attendees: e.attendees || 0,
            imageUrl: e.image_url || e.imageUrl || '',
            rsvped: false
          }))
        );
      }
    }
  } catch (e) {}

  const events = readData('events') || [];
  return NextResponse.json(events);
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (isConfiguredSupabase()) {
      const { data, error } = await supabase
        .from('events')
        .insert([
          {
            title: body.title,
            category: body.category || 'Campus Event',
            date: body.date || new Date().toISOString().split('T')[0],
            time: body.time || '10:00 AM',
            location: body.location || 'Main Auditorium',
            organizer: body.organizer || 'Student Executive Council',
            description: body.description || '',
            image_url: body.imageUrl || body.image_url || '',
            attendees: 0
          }
        ])
        .select()
        .single();

      if (!error && data) {
        return NextResponse.json({
          success: true,
          event: {
            id: data.id,
            title: data.title,
            category: data.category,
            date: data.date,
            time: data.time,
            location: data.location,
            organizer: data.organizer,
            description: data.description,
            imageUrl: data.image_url,
            attendees: 0,
            rsvped: false
          }
        });
      }
    }

    const events = readData('events') || [];
    const newEvent = {
      id: 'e' + Date.now(),
      title: body.title,
      category: body.category || 'Fest',
      date: body.date || new Date().toISOString().split('T')[0],
      time: body.time || '10:00 AM',
      location: body.location || 'Main Auditorium',
      organizer: body.organizer || 'Cultural Council',
      description: body.description || '',
      imageUrl: body.imageUrl || '',
      attendees: 0,
      rsvped: false
    };
    events.unshift(newEvent);
    writeData('events', events);

    return NextResponse.json({ success: true, event: newEvent });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
