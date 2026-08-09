import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { readData, writeData } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        return NextResponse.json(
          data.map((m) => ({
            id: m.id,
            title: `Message from ${m.name}`,
            description: m.message,
            category: 'Grievance',
            urgency: 'Medium',
            status: m.is_read ? 'Resolved' : 'Pending Review',
            isAnonymous: false,
            date: m.created_at ? m.created_at.split('T')[0] : new Date().toISOString().split('T')[0]
          }))
        );
      }
    }
  } catch (e) {}

  const tickets = readData('tickets') || [];
  return NextResponse.json(tickets);
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && !process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: body.isAnonymous ? 'Anonymous Student' : body.name || 'IIT Rungta Student',
            email: body.email || 'student@iitrungta.fun',
            message: `${body.title ? `[${body.title}] ` : ''}${body.description}`,
            is_read: false
          }
        ])
        .select()
        .single();

      if (!error && data) {
        return NextResponse.json({
          success: true,
          ticket: {
            id: data.id,
            title: body.title || 'Student Message',
            description: data.message,
            category: body.category || 'Grievance',
            status: 'Pending Review',
            date: new Date().toISOString().split('T')[0]
          }
        });
      }
    }

    // Local fallback
    const tickets = readData('tickets') || [];
    const newTicket = {
      id: 't-' + (100 + tickets.length + 1),
      title: body.title,
      category: body.category || 'General',
      urgency: body.urgency || 'Medium',
      description: body.description || '',
      isAnonymous: body.isAnonymous || false,
      status: 'Pending Review',
      date: new Date().toISOString().split('T')[0]
    };
    tickets.unshift(newTicket);
    writeData('tickets', tickets);

    return NextResponse.json({ success: true, ticket: newTicket });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
