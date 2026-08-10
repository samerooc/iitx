'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import { Send, MessageSquare, Lock, User } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function ChatPage() {
  const { userProfile, hasCreatedCard } = useApp();
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 3000); // poll every 3 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const fetchMessages = async () => {
    try {
      const res = await fetch('/api/chat');
      const data = await res.json();
      if (Array.isArray(data)) {
        setMessages(data);
      }
    } catch (e) {
      console.error('Failed to fetch messages', e);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!hasCreatedCard || !newMessage.trim()) return;

    const payload = {
      authorId: userProfile.id || 'Anon',
      authorName: userProfile.name,
      authorDept: userProfile.department,
      message: newMessage
    };

    setNewMessage('');
    // Optimistic update
    setMessages((prev) => [...prev, { ...payload, id: 'temp-' + Date.now(), timestamp: new Date().toISOString() }]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        fetchMessages();
      }
    } catch (error) {
      console.error('Failed to send message', error);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-96 text-neon-saffron">Loading chat...</div>;
  }

  if (!hasCreatedCard) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-6">
        <Lock className="w-16 h-16 text-rose-500 mx-auto" />
        <h2 className="font-headline text-3xl font-bold text-white">Login Required</h2>
        <p className="text-gray-400">You need a verified Student Union Pass to access the Global Chat Room.</p>
        <button
          onClick={() => router.push('/profile')}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-secondary-container to-neon-saffron text-white font-bold"
        >
          Generate Digital Pass
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-100px)] flex flex-col">
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <div>
          <h1 className="font-headline text-2xl font-bold text-primary dark:text-white flex items-center space-x-2">
            <MessageSquare className="w-6 h-6 text-neon-saffron" />
            <span>Global Student Chat</span>
          </h1>
          <p className="text-sm text-gray-400 mt-1">Discuss campus life, events, and academics.</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-6 space-y-4 pr-2 custom-scrollbar">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">No messages yet. Be the first to say hi!</div>
        ) : (
          messages.map((msg) => {
            const isMe = msg.authorId === userProfile.id;
            return (
              <div key={msg.id} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-[10px] text-gray-500 font-bold uppercase">{msg.authorDept}</span>
                  <span className={`text-xs font-bold ${isMe ? 'text-neon-saffron' : 'text-gray-300'}`}>
                    {isMe ? 'You' : msg.authorName}
                  </span>
                </div>
                <div
                  className={`px-4 py-2.5 rounded-2xl max-w-[80%] text-sm ${
                    isMe
                      ? 'bg-gradient-to-r from-secondary-container to-neon-saffron text-white rounded-tr-sm'
                      : 'bg-surface-container-high dark:bg-obsidian-card text-on-surface dark:text-white border border-white/10 rounded-tl-sm'
                  }`}
                >
                  {msg.message}
                </div>
                <span className="text-[9px] text-gray-500 mt-1">
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="pt-4 border-t border-white/10 mt-auto">
        <form onSubmit={handleSendMessage} className="relative flex items-center">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="w-full pl-4 pr-14 py-4 rounded-2xl bg-surface-container dark:bg-obsidian/60 border border-surface-container-high dark:border-white/10 text-sm text-on-surface dark:text-white focus:outline-none focus:ring-2 focus:ring-neon-saffron"
            required
          />
          <button
            type="submit"
            disabled={!newMessage.trim()}
            className="absolute right-2 p-2 rounded-xl bg-neon-saffron text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
