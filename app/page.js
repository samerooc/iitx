'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import {
  Bell,
  Search,
  Vote,
  UserCheck,
  BookOpen,
  Calendar,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Pin,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  Users,
  Award,
  ShieldAlert,
  Crown,
  Instagram,
  Twitter,
  Linkedin,
  X,
  PlusCircle,
  QrCode
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function Home() {
  const { notices, polls, castPollVote, settings, ministers, banners, userProfile, hasCreatedCard, createStudentProfile } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNoticeModal, setActiveNoticeModal] = useState(null);

  // Poll Vote Modal state
  const [pollModalOpen, setPollModalOpen] = useState(false);
  const [selectedPoll, setSelectedPoll] = useState(null);
  const [selectedCandId, setSelectedCandId] = useState('');
  
  // Voter Details Form
  const [voterName, setVoterName] = useState(userProfile?.name || '');
  const [voterRoll, setVoterRoll] = useState(userProfile?.rollNo || '');
  const [instaUser, setInstaUser] = useState('');
  const [snapUser, setSnapUser] = useState('');

  const categories = ['All', 'Elections', 'Academic', 'Tech & Events', 'Administrative'];

  const filteredNotices = notices.filter((n) => {
    const matchesCat = selectedCategory === 'All' || n.category === selectedCategory;
    const matchesSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleOpenPollModal = (poll, candId) => {
    setSelectedPoll(poll);
    setSelectedCandId(candId);
    if (userProfile) {
      setVoterName(userProfile.name);
      setVoterRoll(userProfile.rollNo);
    }
    setPollModalOpen(true);
  };

  const handleConfirmPollVote = async (e) => {
    e.preventDefault();
    if (!selectedPoll || !selectedCandId) return;

    // Auto-create pass if student hasn't created one yet
    if (!hasCreatedCard && voterName) {
      createStudentProfile({
        name: voterName,
        rollNo: voterRoll || '2024-SU-001',
        department: 'Computer Science & Engineering',
        year: '1st Year'
      });
    }

    await castPollVote(selectedPoll.id, selectedCandId, voterName, instaUser, snapUser);
    setPollModalOpen(false);
    alert(`Success! Vote recorded in Supabase voter_records for ${voterName}!`);
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-16 bg-gradient-to-b from-primary-container/20 via-surface to-surface dark:from-obsidian-card dark:via-obsidian dark:to-obsidian border-b border-surface-container-high dark:border-white/10">
        
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-saffron/15 dark:bg-neon-saffron/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-violet/15 dark:bg-neon-violet/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Announcement Ticker */}
          <div className="mb-8 inline-flex items-center space-x-3 bg-surface-container-highest/80 dark:bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-primary/20 dark:border-neon-saffron/30 text-xs sm:text-sm font-medium">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
            </span>
            <span className="text-primary dark:text-neon-saffron font-semibold uppercase tracking-wider text-[11px]">
              Live Alert
            </span>
            <span className="text-outline dark:text-gray-300 truncate max-w-xs sm:max-w-md">
              {settings.tickerAlert || 'Student Union Executive Elections 2026 Schedule & Manifesto Submissions Active'}
            </span>
            <Link href="/elections" className="text-secondary dark:text-neon-saffron hover:underline font-semibold flex items-center">
              <span>View</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary dark:text-white leading-none">
                {settings.heroTitle || 'Voice of Democracy, Strength of Unity.'}
              </h1>

              <p className="text-base sm:text-lg text-outline dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {settings.heroSubtext || 'IIT Rungta Union 2026 - Padhai se lekar pyar tak, sab ke saath hogi IIT Rungta ki team!'}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/elections"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-secondary-container to-neon-saffron text-white font-semibold text-sm shadow-glow-saffron hover:opacity-95 flex items-center space-x-2"
                >
                  <Vote className="w-5 h-5" />
                  <span>Cast Election Vote</span>
                </Link>

                <Link
                  href="/profile"
                  className="px-6 py-3.5 rounded-xl bg-surface-container dark:bg-white/10 text-on-surface dark:text-white font-semibold text-sm border border-surface-container-high dark:border-white/10 hover:bg-surface-container-high transition-all flex items-center space-x-2"
                >
                  <UserCheck className="w-5 h-5 text-secondary dark:text-neon-saffron" />
                  <span>{hasCreatedCard ? 'My Digital Union Pass' : 'Create Student Pass'}</span>
                </Link>
              </div>

              <div className="pt-6 flex items-center justify-center lg:justify-start space-x-6 text-xs text-outline dark:text-gray-400 font-medium">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Verified Identity</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Encrypted Ballot</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>24x7 Help Desk</span>
                </div>
              </div>
            </div>

            {/* DIGITAL PASS WIDGET ON HOMEPAGE */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-3xl p-6 glass-card dark:bg-obsidian-card/90 border border-surface-container-high dark:border-white/15 shadow-2xl relative space-y-6">
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-secondary-container/20 text-secondary dark:text-neon-saffron flex items-center justify-center font-bold">
                      {settings.logoText || '🏛️'}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-primary dark:text-white uppercase tracking-wider">
                        {settings.siteTitle || 'IIT Rungta'} Union
                      </h4>
                      <p className="text-[10px] text-outline dark:text-gray-400">Digital Pass 2026</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                    {hasCreatedCard ? 'ACTIVE PASS' : 'SELF REGISTER'}
                  </span>
                </div>

                {hasCreatedCard ? (
                  <div className="flex items-center space-x-4 bg-surface-container-low dark:bg-white/5 p-4 rounded-2xl border border-surface-container dark:border-white/5">
                    <img
                      src={userProfile?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300'}
                      alt={userProfile?.name || 'Student'}
                      className="w-14 h-14 rounded-xl object-cover ring-2 ring-primary/30 dark:ring-neon-saffron/40"
                    />
                    <div>
                      <h3 className="font-headline font-bold text-sm text-primary dark:text-white">
                        {userProfile?.name}
                      </h3>
                      <p className="text-xs text-outline dark:text-gray-400">{userProfile?.rollNo}</p>
                      <p className="text-[11px] text-secondary dark:text-neon-saffron font-medium mt-0.5">
                        {userProfile?.department}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-surface-container dark:bg-white/5 border text-center space-y-2">
                    <QrCode className="w-10 h-10 mx-auto text-neon-saffron" />
                    <p className="text-xs font-bold text-primary dark:text-white">No Student Pass Found</p>
                    <p className="text-[11px] text-outline dark:text-gray-400">Create your digital ID card in seconds to vote & access campus events.</p>
                  </div>
                )}

                <Link
                  href="/profile"
                  className="w-full py-2.5 rounded-xl bg-primary dark:bg-neon-saffron text-white dark:text-obsidian font-bold text-xs flex items-center justify-center space-x-1.5 shadow-md hover:opacity-90"
                >
                  <span>{hasCreatedCard ? 'Open Digital Membership Card' : 'Issue My Digital Pass Now'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CABINET & EXECUTIVE MINISTERS SHOWCASE */}
      {ministers.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center space-x-2">
            <Crown className="w-6 h-6 text-neon-saffron" />
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary dark:text-white">
              Union Cabinet & Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministers.map((m) => (
              <div key={m.id} className="glass-card p-6 rounded-3xl border border-surface-container-high dark:border-white/10 space-y-4 glass-card-hover">
                <div className="flex items-center space-x-4">
                  <img src={m.photo_url || m.photoUrl} alt={m.name} className="w-16 h-16 rounded-2xl object-cover ring-2 ring-neon-saffron" />
                  <div>
                    <h3 className="font-headline font-bold text-lg text-primary dark:text-white">{m.name}</h3>
                    <p className="text-xs font-semibold text-secondary dark:text-neon-saffron">{m.portfolio}</p>
                    <p className="text-[11px] text-outline dark:text-gray-400 mt-0.5 italic">"{m.tagline}"</p>
                  </div>
                </div>
                <p className="text-xs text-outline dark:text-gray-300 leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. NOTICE BOARD & ANNOUNCEMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-surface-container-high dark:border-white/10">
          <div>
            <div className="flex items-center space-x-2">
              <Bell className="w-6 h-6 text-secondary dark:text-neon-saffron" />
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary dark:text-white">
                Official Notice Board
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-outline dark:text-gray-400 mt-1">
              Verified announcements from Dean, Registrar, and Executive Union Officers.
            </p>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-outline dark:text-gray-400" />
            <input
              type="text"
              placeholder="Search notices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-surface-container dark:bg-obsidian-card border border-surface-container-high dark:border-white/10 text-sm text-on-surface dark:text-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              onClick={() => setActiveNoticeModal(notice)}
              className={`glass-card p-6 rounded-2xl border transition-all cursor-pointer glass-card-hover relative space-y-4 ${
                notice.pinned
                  ? 'border-secondary-container/40 dark:border-neon-saffron/40 bg-surface-container-low/80 dark:bg-obsidian-card/90'
                  : 'border-surface-container-high dark:border-white/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-primary/10 dark:bg-white/10 text-primary dark:text-neon-saffron text-[11px] font-bold uppercase">
                  {notice.category}
                </span>

                <div className="flex items-center space-x-2">
                  {notice.pinned && (
                    <div className="flex items-center space-x-1 text-secondary dark:text-neon-saffron text-xs font-semibold">
                      <Pin className="w-3.5 h-3.5 fill-current" />
                      <span>Pinned</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-headline font-bold text-lg text-primary dark:text-white line-clamp-2">
                  {notice.title}
                </h3>
                <p className="text-xs sm:text-sm text-outline dark:text-gray-300 line-clamp-3 mt-2 leading-relaxed">
                  {notice.content}
                </p>
              </div>

              {notice.imageUrl && (
                <img src={notice.imageUrl} alt={notice.title} className="w-full h-40 object-cover rounded-xl" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. LIVE POLL & VOTER TRACKING MODAL */}
      {polls.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-surface-container-high dark:border-white/10 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-neon-saffron" />
                <h3 className="font-headline font-bold text-xl text-primary dark:text-white">
                  Live Campus Elections & Poll
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase">
                Active Ballot
              </span>
            </div>

            <p className="font-headline text-lg font-semibold text-primary dark:text-white">
              {polls[0].question}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {polls[0].options?.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOpenPollModal(polls[0], opt.id || idx)}
                  className="p-5 rounded-2xl border border-surface-container-high dark:border-white/10 bg-surface-container dark:bg-obsidian-card hover:border-neon-saffron text-left space-y-3 transition-all"
                >
                  <div className="flex items-center space-x-3">
                    {opt.photoUrl && <img src={opt.photoUrl} alt={opt.text} className="w-12 h-12 rounded-full object-cover ring-2 ring-neon-saffron" />}
                    <div>
                      <h4 className="font-bold text-base text-primary dark:text-white">{opt.text}</h4>
                      <p className="text-xs text-neon-saffron font-semibold mt-0.5">{opt.votes || 0} Votes Recorded</p>
                    </div>
                  </div>
                  <span className="w-full py-2 rounded-xl bg-primary/10 text-primary dark:text-neon-saffron font-bold text-xs flex items-center justify-center space-x-1">
                    <span>Vote for {opt.text}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* POLL VOTER MODAL */}
      {pollModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/85 backdrop-blur-md">
          <div className="bg-surface dark:bg-obsidian-card border border-surface-container-high dark:border-white/15 w-full max-w-md rounded-3xl p-6 space-y-6 shadow-2xl relative">
            <button onClick={() => setPollModalOpen(false)} className="absolute top-6 right-6 p-2 rounded-full bg-surface-container dark:bg-white/10 text-on-surface dark:text-gray-300">
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase">Cast Verified Ballot</span>
              <h3 className="font-headline font-bold text-xl text-primary dark:text-white pt-2">Voter Identification</h3>
            </div>

            <form onSubmit={handleConfirmPollVote} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Your Full Name *</label>
                <input type="text" required value={voterName} onChange={(e) => setVoterName(e.target.value)} placeholder="Aarav Sharma" className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Roll Number / Student ID</label>
                <input type="text" value={voterRoll} onChange={(e) => setVoterRoll(e.target.value)} placeholder="2024-CS-108" className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Instagram Handle (@)</label>
                <input type="text" value={instaUser} onChange={(e) => setInstaUser(e.target.value)} placeholder="@aarav_iitr" className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Snapchat Handle (@)</label>
                <input type="text" value={snapUser} onChange={(e) => setSnapUser(e.target.value)} placeholder="@aarav_snap" className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
              </div>

              <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-secondary-container to-neon-saffron text-white font-bold text-sm shadow-glow-saffron">
                Submit Vote to Supabase voter_records
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
