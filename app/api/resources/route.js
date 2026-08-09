import { NextResponse } from 'next/server';
import { supabase, isConfiguredSupabase } from '@/lib/supabase';
import { readData, writeData } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    if (isConfiguredSupabase()) {
      const { data, error } = await supabase
        .from('resources')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && Array.isArray(data)) {
        return NextResponse.json(
          data.map((r) => ({
            id: r.id,
            title: r.title,
            category: r.category || 'CS',
            type: r.type || 'PDF',
            author: r.author || 'Academic Cell',
            downloads: r.downloads || 0,
            linkUrl: r.link_url || r.linkUrl || '#',
            description: r.description || ''
          }))
        );
      }
    }
  } catch (e) {}

  const resources = readData('resources') || [];
  return NextResponse.json(resources);
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (isConfiguredSupabase()) {
      const { data, error } = await supabase
        .from('resources')
        .insert([
          {
            title: body.title,
            category: body.category || 'Study Material',
            type: body.type || 'PDF',
            author: body.author || 'Academic Affairs',
            link_url: body.linkUrl || body.link_url || '#',
            description: body.description || '',
            downloads: 0
          }
        ])
        .select()
        .single();

      if (!error && data) {
        return NextResponse.json({
          success: true,
          resource: {
            id: data.id,
            title: data.title,
            category: data.category,
            type: data.type,
            author: data.author,
            linkUrl: data.link_url,
            description: data.description,
            downloads: 0
          }
        });
      }
    }

    const resources = readData('resources') || [];
    const newResource = {
      id: 'r' + Date.now(),
      title: body.title,
      category: body.category || 'CS',
      type: body.type || 'PDF',
      author: body.author || 'Academic Affairs',
      linkUrl: body.linkUrl || '#',
      description: body.description || '',
      downloads: 0
    };
    resources.unshift(newResource);
    writeData('resources', resources);

    return NextResponse.json({ success: true, resource: newResource });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
