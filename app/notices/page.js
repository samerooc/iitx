'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { formatExternalUrl } from '@/lib/utils';
import { Bell, Search, Pin, ExternalLink, Download, Image as ImageIcon, Calendar, FileText, ChevronRight, X } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function NoticesPage() {
  const { notices } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNoticeModal, setActiveNoticeModal] = useState(null);

  const categories = ['All', 'Notice', 'Academic', 'Elections', 'Events', 'Administrative'];

  const filteredNotices = notices.filter((n) => {
    const matchesCat = selectedCategory === 'All' || n.category === selectedCategory;
    const matchesSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleNoticeCardClick = (notice) => {
    const targetUrl = notice.linkUrl || notice.link_url || notice.fileUrl || notice.file_url;
    if (targetUrl && targetUrl !== '#' && targetUrl.trim() !== '') {
      window.open(formatExternalUrl(targetUrl), '_blank');
    } else {
      setActiveNoticeModal(notice);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* HEADER SECTION */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-secondary-container/20 text-secondary dark:text-neon-saffron text-xs font-bold uppercase border border-secondary-container/30">
          <Bell className="w-4 h-4" />
          <span>Executive Bulletins & Circulars</span>
        </div>
        <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-primary dark:text-white">
          Official Notice Board & Circulars
        </h1>
        <p className="text-sm sm:text-base text-outline dark:text-gray-300">
          Click any notice card or banner image to directly open official attached documents & external portals.
        </p>
      </div>

      {/* FILTER CATEGORIES & SEARCH */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-surface-container-high dark:border-white/10">
        
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                selectedCategory === cat
                  ? 'bg-primary dark:bg-neon-saffron text-white dark:text-obsidian shadow-md'
                  : 'bg-surface-container dark:bg-white/5 text-on-surface dark:text-gray-300 hover:bg-surface-container-high'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-outline dark:text-gray-400" />
          <input
            type="text"
            placeholder="Search circulars..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-surface-container dark:bg-obsidian-card border border-surface-container-high dark:border-white/10 text-sm text-on-surface dark:text-white"
          />
        </div>
      </div>

      {/* NOTICE CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredNotices.map((notice) => {
          const hasDirectLink = Boolean(notice.linkUrl || notice.link_url || notice.fileUrl || notice.file_url);

          return (
            <div
              key={notice.id}
              onClick={() => handleNoticeCardClick(notice)}
              className={`glass-card p-6 rounded-3xl border transition-all cursor-pointer glass-card-hover relative space-y-4 group ${
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
                  {hasDirectLink && (
                    <span className="p-1.5 rounded-lg bg-neon-saffron/10 text-neon-saffron text-xs font-bold flex items-center space-x-1">
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open Link</span>
                    </span>
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-headline font-bold text-lg text-primary dark:text-white group-hover:text-neon-saffron transition-colors line-clamp-2">
                  {notice.title}
                </h3>
                <p className="text-xs sm:text-sm text-outline dark:text-gray-300 line-clamp-3 mt-2 leading-relaxed">
                  {notice.content}
                </p>
              </div>

              {notice.imageUrl && (
                <div className="relative rounded-2xl overflow-hidden border border-surface-container-high dark:border-white/10">
                  <img
                    src={notice.imageUrl}
                    alt={notice.title}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[11px] text-white font-bold flex items-center space-x-1">
                      <ImageIcon className="w-3.5 h-3.5 text-neon-saffron" />
                      <span>Notice Attachment Banner</span>
                    </span>
                  </div>
                </div>
              )}

              <div className="pt-2 flex items-center justify-between text-xs text-outline dark:text-gray-400">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{notice.date || 'Today'}</span>
                </span>
                <span className="text-neon-saffron font-bold flex items-center space-x-1">
                  <span>{hasDirectLink ? 'Click to Open Direct Link' : 'Read Full Circular'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>
          );
        })}
      </div>

      {/* NOTICE PREVIEW MODAL IF NO DIRECT LINK */}
      {activeNoticeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/85 backdrop-blur-md">
          <div className="bg-surface dark:bg-obsidian-card border border-surface-container-high dark:border-white/15 w-full max-w-lg rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setActiveNoticeModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-surface-container dark:bg-white/10 text-on-surface dark:text-gray-300"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-primary/10 dark:bg-white/10 text-primary dark:text-neon-saffron text-xs font-bold uppercase">
                {activeNoticeModal.category}
              </span>
              <h3 className="font-headline font-bold text-xl text-primary dark:text-white pt-1">
                {activeNoticeModal.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-outline dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {activeNoticeModal.content}
            </p>

            {activeNoticeModal.imageUrl && (
              <img src={activeNoticeModal.imageUrl} alt={activeNoticeModal.title} className="w-full h-48 object-cover rounded-2xl" />
            )}

            <button
              onClick={() => setActiveNoticeModal(null)}
              className="w-full py-3 rounded-xl bg-primary text-white font-bold text-sm"
            >
              Close Circular
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
