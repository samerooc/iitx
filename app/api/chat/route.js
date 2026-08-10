import { NextResponse } from 'next/server';
import { readData, writeData } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const chats = readData('chat') || [];
    return NextResponse.json(chats);
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { authorId, authorName, authorDept, message } = await request.json();
    
    if (!message || message.trim() === '') {
      return NextResponse.json({ error: 'Message cannot be empty' }, { status: 400 });
    }

    const chats = readData('chat') || [];
    
    const newChat = {
      id: 'c' + Date.now(),
      authorId: authorId || 'Unknown',
      authorName: authorName || 'Anonymous',
      authorDept: authorDept || 'Unknown',
      message: message.trim(),
      timestamp: new Date().toISOString()
    };

    chats.push(newChat);
    
    // Keep only last 100 messages to prevent huge file
    if (chats.length > 100) {
      chats.shift();
    }
    
    writeData('chat', chats);

    return NextResponse.json({ success: true, chat: newChat });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
