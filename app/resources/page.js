'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  Download,
  FileText,
  Eye,
  Filter,
  CheckCircle2,
  X,
  FileCode,
  Archive
} from 'lucide-react';

const mockResources = [
  {
    id: 'r1',
    title: 'Data Structures & Algorithms - Complete Formula & Code Sheet',
    category: 'Academic Notes',
    department: 'Computer Science & Engineering',
    author: 'Prof. S. R. Varma',
    fileType: 'PDF',
    fileSize: '3.4 MB',
    downloads: 1420,
    previewContent: `IIT Rungta - Department of Computer Science
Subject: Data Structures & Algorithms (CS301)

Topic 1: Time & Space Complexity Analysis
- Asymptotic Notations: Big-O, Omega, Theta.
- Master Theorem for Divide and Conquer recurrence relations.

Topic 2: Trees & Balanced Binary Trees
- AVL Tree rotation rules (LL, RR, LR, RL).
- Red-Black tree properties and insertion node re-coloring rules.`
  },
  {
    id: 'r2',
    title: 'Previous 5 Years GATE & Mid-Sem Question Papers (2021-2025)',
    category: 'Exam Papers',
    department: 'Computer Science & Engineering',
    author: 'Student Academic Council',
    fileType: 'ZIP',
    fileSize: '18.2 MB',
    downloads: 2890,
    previewContent: `Archive Includes:
1. Mid-Sem 2024 Solution Keys
2. End-Sem 2023 Solved Paper with Examiner Marking Scheme
3. Practice Question Sets for Discrete Mathematics & OS.`
  },
  {
    id: 'r3',
    title: 'Analog & Digital Electronics Lab Manual (2026 Edition)',
    category: 'Lab Manuals',
    department: 'Electrical & Communication Engg',
    author: 'Lab Superintendent Office',
    fileType: 'PDF',
    fileSize: '5.1 MB',
    downloads: 870,
    previewContent: `Experiment 1: Op-Amp Applications
- Inverting and Non-inverting Amplifier configuration.
- Designing Integrator and Differentiator circuits using IC 741.

Experiment 2: Logic Gate Circuit Synthesis
- K-Map minimization and circuit construction on breadboard.`
  },
  {
    id: 'r4',
    title: 'Official Academic Curriculum & Credit Rules Handbook 2026',
    category: 'Syllabus',
    department: 'All Departments',
    author: 'Academic Senate Office',
    fileType: 'PDF',
    fileSize: '1.2 MB',
    downloads: 3410,
    previewContent: `IIT Rungta Academic Regulations Handbook 2026:
- Minimum Attendance Requirement: 75% mandatory across all lecture/lab credits.
- Grading System: Relative 10-point CPI scale.
- Minor Degree & Honors Credit requirements.`
  }
];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePreviewDoc, setActivePreviewDoc] = useState(null);

  const categories = ['All', 'Academic Notes', 'Exam Papers', 'Lab Manuals', 'Syllabus'];

  const filtered = mockResources.filter((r) => {
    const matchesCat = selectedCategory === 'All' || r.category === selectedCategory;
    const matchesSearch =
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleDownload = (doc) => {
    alert(`Downloading ${doc.title} (${doc.fileSize})...`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-surface-container-high dark:border-white/10">
        <div>
          <div className="flex items-center space-x-2">
            <BookOpen className="w-6 h-6 text-secondary dark:text-neon-saffron" />
            <h1 className="font-headline font-bold text-3xl text-primary dark:text-white">
              Student Resource Library Hub
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-outline dark:text-gray-400 mt-1">
            Access verified lecture notes, past exam papers, lab manuals, and syllabus guidelines.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-outline dark:text-gray-400" />
          <input
            type="text"
            placeholder="Search notes, codes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-surface-container dark:bg-obsidian-card border border-surface-container-high dark:border-white/10 text-sm text-on-surface dark:text-white"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-primary dark:bg-neon-saffron text-white dark:text-obsidian shadow-md'
                : 'bg-surface-container dark:bg-obsidian-card text-on-surface-variant dark:text-gray-300 border border-surface-container-high dark:border-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((doc) => (
          <div
            key={doc.id}
            className="glass-card p-6 rounded-3xl border border-surface-container-high dark:border-white/10 flex flex-col justify-between space-y-4 glass-card-hover"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-primary/10 dark:bg-white/10 text-primary dark:text-neon-saffron text-[11px] font-bold uppercase">
                  {doc.category}
                </span>

                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-secondary dark:text-neon-saffron">
                  {doc.fileType === 'ZIP' ? <Archive className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                  <span>{doc.fileType} • {doc.fileSize}</span>
                </div>
              </div>

              <h3 className="font-headline font-bold text-lg text-primary dark:text-white">
                {doc.title}
              </h3>

              <div className="text-xs text-outline dark:text-gray-400 space-y-1">
                <p>Dept: <span className="text-on-surface dark:text-gray-300 font-medium">{doc.department}</span></p>
                <p>Verified Source: <span className="text-on-surface dark:text-gray-300 font-medium">{doc.author}</span></p>
                <p>Total Downloads: <span className="text-emerald-500 font-semibold">{doc.downloads}</span></p>
              </div>
            </div>

            <div className="pt-4 border-t border-surface-container dark:border-white/5 flex items-center justify-between gap-3">
              <button
                onClick={() => setActivePreviewDoc(doc)}
                className="px-4 py-2 rounded-xl bg-surface-container dark:bg-white/10 text-on-surface dark:text-white text-xs font-semibold flex items-center space-x-1.5 hover:bg-surface-container-high"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Preview Document</span>
              </button>

              <button
                onClick={() => handleDownload(doc)}
                className="px-4 py-2 rounded-xl bg-primary dark:bg-neon-saffron text-white dark:text-obsidian text-xs font-bold flex items-center space-x-1.5 hover:opacity-95"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* DOCUMENT PREVIEW MODAL */}
      {activePreviewDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/85 backdrop-blur-md">
          <div className="bg-surface dark:bg-obsidian-card border border-surface-container-high dark:border-white/15 w-full max-w-2xl rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setActivePreviewDoc(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-surface-container dark:bg-white/10 text-on-surface dark:text-gray-300"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase">
                Document Preview Mode
              </span>
              <h3 className="font-headline font-bold text-xl text-primary dark:text-white pt-2">
                {activePreviewDoc.title}
              </h3>
            </div>

            {/* Document Viewer Frame */}
            <div className="p-6 rounded-2xl bg-surface-container-low dark:bg-obsidian border border-surface-container dark:border-white/10 font-mono text-xs text-on-surface dark:text-gray-200 leading-relaxed whitespace-pre-line max-h-72 overflow-y-auto shadow-inner">
              {activePreviewDoc.previewContent}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-surface-container dark:border-white/10">
              <span className="text-xs text-outline dark:text-gray-400">File Format: {activePreviewDoc.fileType} ({activePreviewDoc.fileSize})</span>
              <button
                onClick={() => handleDownload(activePreviewDoc)}
                className="px-6 py-2.5 rounded-xl bg-primary dark:bg-neon-saffron text-white dark:text-obsidian font-bold text-xs flex items-center space-x-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Document</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
