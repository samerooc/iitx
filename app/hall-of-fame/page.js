'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { formatExternalUrl } from '@/lib/utils';
import { Crown, Instagram, Twitter, Linkedin, Youtube, Award, Sparkles, X, ChevronRight, CheckCircle2, User, Phone, Mail } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function HallOfFamePage() {
  const { ministers } = useApp();
  const [selectedMinister, setSelectedMinister] = useState(null);

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
          Tap on any Cabinet Minister to view their full biography, key manifesto, and official handles.
        </p>
      </div>

      {/* MINISTERS SHOWCASE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ministers.map((m) => (
          <div
            key={m.id}
            onClick={() => setSelectedMinister(m)}
            className="glass-card p-6 rounded-3xl border border-surface-container-high dark:border-white/15 space-y-6 flex flex-col justify-between glass-card-hover relative overflow-hidden cursor-pointer group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-neon-saffron/10 rounded-full blur-xl pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src={m.photo_url || m.photoUrl || 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400'}
                  alt={m.name}
                  className="w-20 h-20 rounded-2xl object-cover ring-2 ring-neon-saffron shadow-md group-hover:scale-105 transition-transform"
                />
                <div>
                  <h3 className="font-headline font-bold text-xl text-primary dark:text-white group-hover:text-neon-saffron transition-colors">
                    {m.name}
                  </h3>
                  <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-secondary-container/20 text-secondary dark:text-neon-saffron text-xs font-bold border border-secondary-container/30">
                    {m.portfolio}
                  </span>
                  <p className="text-xs text-outline dark:text-gray-400 mt-1 italic line-clamp-1">
                    "{m.tagline}"
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-outline dark:text-gray-300 leading-relaxed line-clamp-3">
                {m.description}
              </p>
            </div>

            {/* ACTION & SOCIAL BADGES */}
            <div className="pt-4 border-t border-surface-container dark:border-white/10 flex items-center justify-between">
              <span className="text-[11px] font-bold text-neon-saffron flex items-center space-x-1 group-hover:underline">
                <span>View Full Profile & Bio</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>

              <div className="flex items-center space-x-1.5" onClick={(e) => e.stopPropagation()}>
                {m.instagram_url && (
                  <a href={formatExternalUrl(m.instagram_url)} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg bg-surface-container dark:bg-white/10 text-pink-400 hover:bg-pink-500/20">
                    <Instagram className="w-3.5 h-3.5" />
                  </a>
                )}
                {m.twitter_url && (
                  <a href={formatExternalUrl(m.twitter_url)} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg bg-surface-container dark:bg-white/10 text-sky-400 hover:bg-sky-500/20">
                    <Twitter className="w-3.5 h-3.5" />
                  </a>
                )}
                {m.linkedin_url && (
                  <a href={formatExternalUrl(m.linkedin_url)} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg bg-surface-container dark:bg-white/10 text-blue-400 hover:bg-blue-500/20">
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* FULL MINISTER BIO POPUP MODAL */}
      {selectedMinister && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/85 backdrop-blur-md">
          <div className="bg-surface dark:bg-obsidian-card border border-surface-container-high dark:border-white/15 w-full max-w-xl rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedMinister(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-surface-container dark:bg-white/10 text-on-surface dark:text-gray-300 hover:opacity-80"
            >
              <X className="w-5 h-5" />
            </button>

            {/* HEADER */}
            <div className="flex items-center space-x-5">
              <img
                src={selectedMinister.photo_url || selectedMinister.photoUrl}
                alt={selectedMinister.name}
                className="w-24 h-24 rounded-2xl object-cover ring-4 ring-neon-saffron shadow-lg shrink-0"
              />
              <div className="space-y-1">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 uppercase">
                  Verified Cabinet Officer
                </span>
                <h2 className="font-headline font-extrabold text-2xl text-primary dark:text-white pt-1">
                  {selectedMinister.name}
                </h2>
                <p className="text-sm font-bold text-secondary dark:text-neon-saffron">
                  {selectedMinister.portfolio}
                </p>
              </div>
            </div>

            {/* TAGLINE QUOTE */}
            <div className="p-4 rounded-2xl bg-surface-container/60 dark:bg-white/5 border border-surface-container dark:border-white/10 text-xs sm:text-sm text-on-surface dark:text-gray-200 italic font-medium">
              "{selectedMinister.tagline}"
            </div>

            {/* FULL BIO & MANIFESTO */}
            <div className="space-y-2">
              <h4 className="font-headline font-bold text-sm text-primary dark:text-white uppercase tracking-wider">
                Full Biography & Key Vision
              </h4>
              <p className="text-xs sm:text-sm text-outline dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {selectedMinister.description || 'Full executive statement and portfolio vision recorded with the IIT Rungta Student Union.'}
              </p>
            </div>

            {/* DIRECT SOCIAL MEDIA REDIRECTION LINKS */}
            <div className="pt-4 border-t border-surface-container dark:border-white/10 space-y-3">
              <h4 className="font-headline font-bold text-xs text-outline dark:text-gray-400 uppercase tracking-wider">
                Direct Official Links
              </h4>

              <div className="flex flex-wrap gap-3">
                {selectedMinister.instagram_url && (
                  <a
                    href={formatExternalUrl(selectedMinister.instagram_url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-pink-500/10 text-pink-400 font-bold text-xs border border-pink-500/20 flex items-center space-x-2 hover:bg-pink-500/20"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram Handle</span>
                  </a>
                )}
                {selectedMinister.twitter_url && (
                  <a
                    href={formatExternalUrl(selectedMinister.twitter_url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-sky-500/10 text-sky-400 font-bold text-xs border border-sky-500/20 flex items-center space-x-2 hover:bg-sky-500/20"
                  >
                    <Twitter className="w-4 h-4" />
                    <span>Twitter / X</span>
                  </a>
                )}
                {selectedMinister.linkedin_url && (
                  <a
                    href={formatExternalUrl(selectedMinister.linkedin_url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-blue-500/10 text-blue-400 font-bold text-xs border border-blue-500/20 flex items-center space-x-2 hover:bg-blue-500/20"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn Profile</span>
                  </a>
                )}
                {selectedMinister.youtube_video_url && (
                  <a
                    href={formatExternalUrl(selectedMinister.youtube_video_url)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-rose-500/10 text-rose-400 font-bold text-xs border border-rose-500/20 flex items-center space-x-2 hover:bg-rose-500/20"
                  >
                    <Youtube className="w-4 h-4" />
                    <span>Campaign Video</span>
                  </a>
                )}
              </div>
            </div>

            <button
              onClick={() => setSelectedMinister(null)}
              className="w-full py-3 rounded-xl bg-primary text-white font-bold text-sm"
            >
              Close Profile
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
