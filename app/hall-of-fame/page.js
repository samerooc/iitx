'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { formatExternalUrl } from '@/lib/utils';
import { Crown, Instagram, Twitter, Linkedin, Youtube, Award, Sparkles } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function HallOfFamePage() {
  const { ministers } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* HEADER SECTION */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-secondary-container/20 text-secondary dark:text-neon-saffron text-xs font-bold uppercase border border-secondary-container/30">
          <Crown className="w-4 h-4" />
          <span>Student Executive Cabinet 2026</span>
        </div>
        <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-primary dark:text-white">
          Cabinet Ministers & Student Leaders
        </h1>
        <p className="text-sm sm:text-base text-outline dark:text-gray-300">
          Meet the elected representatives serving the student body of IIT Rungta across all portfolios.
        </p>
      </div>

      {/* MINISTERS SHOWCASE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ministers.map((m) => (
          <div
            key={m.id}
            className="glass-card p-6 rounded-3xl border border-surface-container-high dark:border-white/15 space-y-6 flex flex-col justify-between glass-card-hover relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-neon-saffron/10 rounded-full blur-xl pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src={m.photo_url || m.photoUrl || 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400'}
                  alt={m.name}
                  className="w-20 h-20 rounded-2xl object-cover ring-2 ring-neon-saffron shadow-md"
                />
                <div>
                  <h3 className="font-headline font-bold text-xl text-primary dark:text-white">
                    {m.name}
                  </h3>
                  <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-secondary-container/20 text-secondary dark:text-neon-saffron text-xs font-bold border border-secondary-container/30">
                    {m.portfolio}
                  </span>
                  <p className="text-xs text-outline dark:text-gray-400 mt-1 italic">
                    "{m.tagline}"
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-outline dark:text-gray-300 leading-relaxed">
                {m.description}
              </p>
            </div>

            {/* FIXED SOCIAL MEDIA LINKS WITH formatExternalUrl */}
            <div className="pt-4 border-t border-surface-container dark:border-white/10 flex items-center justify-between">
              <span className="text-[11px] font-bold text-outline dark:text-gray-400 uppercase tracking-wider">
                Official Links
              </span>

              <div className="flex items-center space-x-2">
                {m.instagram_url && (
                  <a
                    href={formatExternalUrl(m.instagram_url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-surface-container dark:bg-white/10 text-pink-400 hover:bg-pink-500/20 transition-colors"
                    title="Instagram Profile"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}
                {m.twitter_url && (
                  <a
                    href={formatExternalUrl(m.twitter_url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-surface-container dark:bg-white/10 text-sky-400 hover:bg-sky-500/20 transition-colors"
                    title="Twitter / X Profile"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {m.linkedin_url && (
                  <a
                    href={formatExternalUrl(m.linkedin_url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-surface-container dark:bg-white/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {m.youtube_video_url && (
                  <a
                    href={formatExternalUrl(m.youtube_video_url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-surface-container dark:bg-white/10 text-rose-400 hover:bg-rose-500/20 transition-colors"
                    title="Campaign Video"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
