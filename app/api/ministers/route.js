import { NextResponse } from 'next/server';
import { supabase, isConfiguredSupabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    if (isConfiguredSupabase()) {
      const { data, error } = await supabase
        .from('ministers')
        .select('*')
        .order('display_order', { ascending: true });

      if (!error && Array.isArray(data)) {
        return NextResponse.json(data);
      }
    }
  } catch (e) {}

  // Fallback data if Supabase isn't configured yet
  return NextResponse.json([
    {
      id: 'm1',
      name: 'Rohan Verma',
      portfolio: 'President',
      tagline: '24x7 Library & Campus Digital Transparency',
      photo_url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400',
      description: 'Senior Student Leader driving academic infrastructure and hostel welfare.',
      display_order: 1,
      instagram_url: 'https://instagram.com/',
      twitter_url: 'https://twitter.com/',
      linkedin_url: 'https://linkedin.com/'
    },
    {
      id: 'm2',
      name: 'Ananya Patel',
      portfolio: 'Vice President',
      tagline: 'Placement Cell Reforms & Mental Health Desk',
      photo_url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
      description: 'Focusing on placement partnerships, wellness cells, and inter-college events.',
      display_order: 2,
      instagram_url: 'https://instagram.com/',
      twitter_url: 'https://twitter.com/',
      linkedin_url: 'https://linkedin.com/'
    }
  ]);
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (isConfiguredSupabase()) {
      const { data, error } = await supabase
        .from('ministers')
        .insert([
          {
            name: body.name,
            portfolio: body.portfolio || 'Cabinet Minister',
            description: body.description || '',
            photo_url: body.photo_url || body.photoUrl || '',
            tagline: body.tagline || '',
            display_order: body.display_order || 0,
            instagram_url: body.instagram_url || '',
            twitter_url: body.twitter_url || '',
            linkedin_url: body.linkedin_url || ''
          }
        ])
        .select()
        .single();

      if (!error && data) {
        return NextResponse.json({ success: true, minister: data });
      }
    }

    return NextResponse.json({ success: true, minister: { id: 'm-' + Date.now(), ...body } });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
