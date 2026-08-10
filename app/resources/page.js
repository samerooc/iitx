'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import { formatExternalUrl } from '@/lib/utils';
import {
  BookOpen,
  Search,
  Download,
  FileText,
  Video,
  Code,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Plus,
  X
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function ResourcesPage() {
  const { resources, addResource, userProfile, hasCreatedCard } = useApp();
  const router = useRouter();
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [newResource, setNewResource] = useState({
    title: '', category: 'CS', type: 'PDF', linkUrl: '', description: ''
  });

  const categories = ['All', 'CS', 'EE', 'ME', 'CE', 'General'];

  const filteredResources = resources.filter((r) => {
    const matchesCat = selectedCategory === 'All' || r.category === selectedCategory;
    const matchesSearch =
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleResourceCardClick = (res) => {
    const url = res.linkUrl || res.link_url;
    if (url && url !== '#') {
      window.open(formatExternalUrl(url), '_blank');
    } else {
      alert(`Resource "${res.title}" download link will open upon admin update.`);
    }
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    if (!hasCreatedCard) {
      alert("Please create a Student Union Pass to upload resources!");
      return router.push('/profile');
    }
    addResource({
      ...newResource,
      author: userProfile.name || 'Anonymous Student'
    });
    alert('Resource uploaded successfully!');
    setIsUploadModalOpen(false);
    setNewResource({ title: '', category: 'CS', type: 'PDF', linkUrl: '', description: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* UPLOAD MODAL */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/80 backdrop-blur-sm">
          <div className="w-full max-w-lg glass-card p-6 rounded-3xl border border-surface-container-high dark:border-white/10 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-headline font-bold text-xl text-white flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-neon-saffron" />
                <span>Upload Study Material</span>
              </h3>
              <button onClick={() => setIsUploadModalOpen(false)} className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-white"><X className="w-5 h-5" /></button>
            </div>
            
            <form onSubmit={handleUploadSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Resource Title *</label>
                <input type="text" required value={newResource.title} onChange={(e) => setNewResource({ ...newResource, title: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-obsidian/60 border text-sm text-white" placeholder="e.g. Data Structures Mid-Sem Notes" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Drive / File Link URL *</label>
                <input type="url" required value={newResource.linkUrl} onChange={(e) => setNewResource({ ...newResource, linkUrl: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-obsidian/60 border text-sm text-white" placeholder="https://drive.google.com/..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Department</label>
                  <select value={newResource.category} onChange={(e) => setNewResource({ ...newResource, category: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-obsidian/60 border text-sm text-white">
                    <option>CS</option><option>EE</option><option>ME</option><option>CE</option><option>General</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">File Type</label>
                  <select value={newResource.type} onChange={(e) => setNewResource({ ...newResource, type: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-obsidian/60 border text-sm text-white">
                    <option>PDF</option><option>DOCX</option><option>PPT</option><option>ZIP</option><option>Link</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Short Description (Optional)</label>
                <textarea rows={2} value={newResource.description} onChange={(e) => setNewResource({ ...newResource, description: e.target.value })} className="w-full px-4 py-2 rounded-xl bg-obsidian/60 border text-sm text-white" placeholder="Brief info about the material..." />
              </div>
              
              <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-secondary-container to-neon-saffron text-white font-bold text-sm shadow-glow-saffron">
                Upload & Share Resource
              </button>
            </form>
          </div>
        </div>
      )}

      {/* HEADER SECTION */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-secondary-container/20 text-secondary dark:text-neon-saffron text-xs font-bold uppercase border border-secondary-container/30">
          <BookOpen className="w-4 h-4" />
          <span>Academic Knowledge Repository</span>
        </div>
        <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-primary dark:text-white">
          Study Resources & Exam Material
        </h1>
        <p className="text-sm sm:text-base text-outline dark:text-gray-300">
          Click any resource card to directly download PDF notes, lecture slides, and question banks.
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
              {cat} Department
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4 w-full md:w-auto">
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-outline dark:text-gray-400" />
            <input
              type="text"
              placeholder="Search notes, PDFs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-surface-container dark:bg-obsidian-card border border-surface-container-high dark:border-white/10 text-sm text-on-surface dark:text-white"
            />
          </div>
          
          <button
            onClick={() => hasCreatedCard ? setIsUploadModalOpen(true) : router.push('/profile')}
            className="shrink-0 px-4 py-2 rounded-xl bg-gradient-to-r from-secondary-container to-neon-saffron text-white font-bold text-sm shadow-glow-saffron flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Upload</span>
          </button>
        </div>
      </div>

      {/* RESOURCES CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((res) => (
          <div
            key={res.id}
            onClick={() => handleResourceCardClick(res)}
            className="glass-card p-6 rounded-3xl border border-surface-container-high dark:border-white/15 space-y-4 cursor-pointer glass-card-hover group relative flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-primary/10 dark:bg-white/10 text-primary dark:text-neon-saffron text-[11px] font-bold uppercase">
                  {res.category} Department
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20 uppercase">
                  {res.type || 'PDF'}
                </span>
              </div>

              <div>
                <h3 className="font-headline font-bold text-lg text-primary dark:text-white group-hover:text-neon-saffron transition-colors line-clamp-2">
                  {res.title}
                </h3>
                <p className="text-xs text-outline dark:text-gray-300 mt-2 line-clamp-3 leading-relaxed">
                  {res.description || 'Verified course material uploaded by the Academic Affairs Secretariat.'}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-surface-container dark:border-white/10 flex items-center justify-between">
              <span className="text-xs text-outline dark:text-gray-400 font-medium">
                By {res.author || 'Academic Cell'}
              </span>

              <button
                type="button"
                className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-secondary-container to-neon-saffron text-white font-bold text-xs shadow-glow-saffron flex items-center space-x-1 group-hover:opacity-95"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Open / Download PDF</span>
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
