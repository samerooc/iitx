import { NextResponse } from 'next/server';
import { readData, writeData } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  const resources = readData('resources') || [];
  return NextResponse.json(resources);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const resources = readData('resources') || [];

    const newResource = {
      id: 'r' + Date.now(),
      title: body.title,
      category: body.category || 'Academic Notes',
      department: body.department || 'Computer Science',
      author: body.author || 'Student Academic Council',
      fileType: body.fileType || 'PDF',
      fileSize: body.fileSize || '2.5 MB',
      downloads: 0,
      previewContent: body.previewContent || ''
    };

    resources.unshift(newResource);
    writeData('resources', resources);

    return NextResponse.json({ success: true, resource: newResource });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
