'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldAlert, Info, ArrowLeft, CheckCircle2 } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      <Link href="/" className="inline-flex items-center space-x-2 text-xs font-bold text-secondary dark:text-neon-saffron hover:underline">
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>

      <div className="glass-card p-6 sm:p-10 rounded-3xl border border-surface-container-high dark:border-white/10 space-y-6 shadow-2xl">
        <div className="flex items-center space-x-3 pb-4 border-b border-surface-container dark:border-white/10">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-headline font-extrabold text-2xl sm:text-3xl text-primary dark:text-white">
              Terms, Conditions & Legal Disclaimer
            </h1>
            <p className="text-xs text-outline dark:text-gray-400">Official Project Disclaimer & Usage Policy</p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-outline dark:text-gray-300 leading-relaxed">
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 font-medium flex items-start space-x-3">
            <Info className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold">Educational Mock Prototype Notice:</strong>
              This website ("IIT Rungta Union Portal") is an independent, non-commercial mock web application created strictly for skill demonstration, technical testing, portfolio showcasing, and educational/fun purposes.
            </div>
          </div>

          <h3 className="font-headline font-bold text-lg text-primary dark:text-white pt-2">
            1. Non-Affiliation & Representation
          </h3>
          <p>
            This website has NO real or official affiliation with any educational institution, university, government body, or registered student union entity. All candidate profiles, announcements, notices, and vote counters rendered on this portal are mock data designed to demonstrate full-stack Next.js and Supabase database integration.
          </p>

          <h3 className="font-headline font-bold text-lg text-primary dark:text-white pt-2">
            2. Privacy & Data Handling
          </h3>
          <p>
            Any information submitted via the Student Pass registration modal or poll voting modals (e.g., student name, roll number, Instagram handle, Snapchat handle) is stored securely in browser cache (`localStorage`) and Supabase database for functional demonstration only. No real personal identity verification is conducted.
          </p>

          <h3 className="font-headline font-bold text-lg text-primary dark:text-white pt-2">
            3. Intellectual Property & Fair Use
          </h3>
          <p>
            All UI components, modern styling tokens, and interactive logic were developed to showcase advanced agentic coding standards, glassmorphism aesthetics, and zero-lag optimistic state management.
          </p>

          <div className="pt-4 border-t border-surface-container dark:border-white/10 flex items-center justify-between text-xs text-outline dark:text-gray-400">
            <span>Last Updated: August 2026</span>
            <span className="font-bold text-primary dark:text-neon-saffron">IIT Rungta Union Tech Team</span>
          </div>
        </div>
      </div>

    </div>
  );
}
