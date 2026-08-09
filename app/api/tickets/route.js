import { NextResponse } from 'next/server';
import { supabase, isConfiguredSupabase } from '@/lib/supabase';
import { readData, writeData } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    if (isConfiguredSupabase()) {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && Array.isArray(data)) {
        return NextResponse.json(
          data.map((m) => ({
            id: m.id,
            name: m.name,
            email: m.email,
            subject: 'Grievance / Inquiry',
            message: m.message,
            category: 'General',
            status: m.is_read ? 'Resolved' : 'Open',
            isRead: m.is_read,
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

    if (isConfiguredSupabase()) {
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: body.name,
            email: body.email,
            message: body.message,
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
            name: data.name,
            email: data.email,
            subject: body.subject || 'Grievance / Inquiry',
            message: data.message,
            category: body.category || 'General',
            status: 'Open',
            isRead: false,
            date: new Date().toISOString().split('T')[0]
          }
        });
      }
    }

    const tickets = readData('tickets') || [];
    const newTicket = {
      id: 't' + Date.now(),
      name: body.name,
      email: body.email,
      subject: body.subject || 'General Inquiry',
      category: body.category || 'Support',
      message: body.message,
      status: 'Open',
      isRead: false,
      date: new Date().toISOString().split('T')[0]
    };
    tickets.unshift(newTicket);
    writeData('tickets', tickets);

    return NextResponse.json({ success: true, ticket: newTicket });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
