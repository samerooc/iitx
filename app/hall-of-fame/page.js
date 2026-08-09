'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';

export const dynamic = 'force-dynamic';

import {
  Crown,
  Award,
  Sparkles,
  Instagram,
  Twitter,
  Linkedin,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function HallOfFamePage() {
  const { ministers } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* HEADER SECTION */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold uppercase border border-purple-500/20">
          <Crown className="w-4 h-4 text-neon-saffron" />
          <span>Executive Leadership & Cabinet Ministers</span>
        </div>
        <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-primary dark:text-white">
          Cabinet & Student Leaders
        </h1>
        <p className="text-sm sm:text-base text-outline dark:text-gray-300">
          Meet the elected representatives of IIT Rungta Student Union 2026 serving academic, sports, cultural, and hostel portfolios.
        </p>
      </div>

      {/* MINISTERS SHOWCASE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ministers.map((m) => (
          <div
            key={m.id}
            className="glass-card p-6 sm:p-8 rounded-3xl border border-surface-container-high dark:border-white/10 space-y-6 glass-card-hover relative"
          >
            <div className="flex items-center space-x-4">
              <img
                src={m.photo_url || m.photoUrl}
                alt={m.name}
                className="w-20 h-20 rounded-2xl object-cover ring-4 ring-neon-saffron/40 shadow-lg"
              />
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-secondary-container/20 text-secondary dark:text-neon-saffron text-[10px] font-bold uppercase border border-secondary-container/30">
                  {m.portfolio}
                </span>
                <h3 className="font-headline font-bold text-xl text-primary dark:text-white mt-1">
                  {m.name}
                </h3>
                <p className="text-xs text-outline dark:text-gray-400 italic">"{m.tagline}"</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-outline dark:text-gray-300 leading-relaxed">
              {m.description}
            </p>

            <div className="pt-4 border-t border-surface-container-high dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-1 text-xs text-emerald-500 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Executive</span>
              </div>

              <div className="flex items-center space-x-2">
                {m.instagram_url && (
                  <a href={m.instagram_url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-pink-500/10 text-pink-500 hover:bg-pink-500 hover:text-white">
                    <Instagram className="w-4 h-4" />
                  </a>
                )}
                {m.twitter_url && (
                  <a href={m.twitter_url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-sky-500/10 text-sky-500 hover:bg-sky-500 hover:text-white">
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {m.linkedin_url && (
                  <a href={m.linkedin_url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500 hover:text-white">
                    <Linkedin className="w-4 h-4" />
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
