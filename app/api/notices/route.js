import { NextResponse } from 'next/server';
import { supabase, isConfiguredSupabase } from '@/lib/supabase';
import { readData, writeData } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    if (isConfiguredSupabase()) {
      const { data, error } = await supabase
        .from('notices')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && Array.isArray(data)) {
        return NextResponse.json(
          data.map((n) => ({
            id: n.id,
            title: n.title,
            content: n.content,
            imageUrl: n.image_url,
            linkUrl: n.link_url,
            fileUrl: n.file_url,
            pinned: n.is_important,
            priority: n.is_important ? 'High' : 'Medium',
            category: 'Notice',
            date: n.created_at ? n.created_at.split('T')[0] : new Date().toISOString().split('T')[0],
            author: 'Secretariat'
          }))
        );
      }
    }
  } catch (e) {}

  const notices = readData('notices') || [];
  return NextResponse.json(notices);
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (isConfiguredSupabase()) {
      const { data, error } = await supabase
        .from('notices')
        .insert([
          {
            title: body.title,
            content: body.content,
            image_url: body.imageUrl || body.image_url || '',
            link_url: body.linkUrl || body.link_url || '',
            file_url: body.fileUrl || body.file_url || '',
            is_important: body.pinned || body.is_important || false,
            is_active: true
          }
        ])
        .select()
        .single();

      if (!error && data) {
        return NextResponse.json({
          success: true,
          notice: {
            id: data.id,
            title: data.title,
            content: data.content,
            imageUrl: data.image_url,
            pinned: data.is_important,
            priority: data.is_important ? 'High' : 'Medium',
            category: body.category || 'Notice',
            date: new Date().toISOString().split('T')[0],
            author: body.author || 'Executive Office'
          }
        });
      }
    }

    const notices = readData('notices') || [];
    const newNotice = {
      id: 'n' + Date.now(),
      title: body.title,
      category: body.category || 'Administrative',
      date: new Date().toISOString().split('T')[0],
      priority: body.priority || 'Medium',
      pinned: body.pinned || false,
      author: body.author || 'Executive Office',
      content: body.content,
      imageUrl: body.imageUrl || ''
    };
    notices.unshift(newNotice);
    writeData('notices', notices);

    return NextResponse.json({ success: true, notice: newNotice });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
