'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';

export const dynamic = 'force-dynamic';

import {
  ShieldAlert,
  HelpCircle,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Lock,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  AlertCircle
} from 'lucide-react';

export default function SupportPage() {
  const { addTicket, settings } = useApp();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Hostel & Mess');
  const [urgency, setUrgency] = useState('Medium');
  const [description, setDescription] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTicket({
      title,
      category,
      urgency,
      description,
      isAnonymous
    });
    setSubmitted(true);
    setTitle('');
    setDescription('');
  };

  const faqs = settings.helpFaqs || [
    {
      question: 'IIT Rungta Student Union kya hai?',
      answer: 'Yeh student body hai jo campus academic welfare, hostel grievances, sports, and cultural festivals manage karti hai.'
    },
    {
      question: 'Grievance support ticket anonymous submit kar sakte hain?',
      answer: 'Haan, aap anonymous mode toggle karke apni shikayat submit kar sakte hain. Aapki identity privacy completely protect ki jayegi.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* HEADER SECTION */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 text-rose-500 text-xs font-bold uppercase border border-rose-500/20">
          <ShieldAlert className="w-4 h-4" />
          <span>Student Welfare & Grievance Redressal</span>
        </div>
        <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-primary dark:text-white">
          Campus Grievance Desk
        </h1>
        <p className="text-sm sm:text-base text-outline dark:text-gray-300">
          Have an issue with hostel mess, academic schedule, or campus infrastructure? Submit your ticket directly to the Union Officers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* GRIEVANCE FORM */}
        <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-surface-container-high dark:border-white/10 space-y-6">
          
          <div className="flex items-center justify-between">
            <h3 className="font-headline font-bold text-xl text-primary dark:text-white flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-neon-saffron" />
              <span>Submit Official Ticket</span>
            </h3>
            <span className="text-xs text-outline dark:text-gray-400">Stores in Supabase contact_messages</span>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h4 className="font-headline font-bold text-lg text-emerald-500">Ticket Submitted Successfully!</h4>
              <p className="text-xs text-outline dark:text-gray-300">
                Your grievance has been logged in Supabase database. Union Welfare Secretary will contact you or review the ticket shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 rounded-xl bg-emerald-500 text-white font-bold text-xs"
              >
                Submit Another Ticket
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">
                  Issue Title / Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mess Food Quality issue in Hostel B"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border border-surface-container-high dark:border-white/10 text-sm text-on-surface dark:text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border border-surface-container-high dark:border-white/10 text-sm text-on-surface dark:text-white"
                  >
                    <option value="Hostel & Mess">Hostel & Mess</option>
                    <option value="Academic & Exam">Academic & Exam</option>
                    <option value="Library & Wi-Fi">Library & Wi-Fi</option>
                    <option value="Sports & Gym">Sports & Gym</option>
                    <option value="General Grievance">General Grievance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">
                    Urgency Level
                  </label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border border-surface-container-high dark:border-white/10 text-sm text-on-surface dark:text-white"
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="Urgent">Urgent / High Priority</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">
                  Detailed Description
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Provide specific details about the issue..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border border-surface-container-high dark:border-white/10 text-sm text-on-surface dark:text-white"
                />
              </div>

              <label className="flex items-center space-x-2 cursor-pointer pt-2">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="rounded text-neon-saffron focus:ring-neon-saffron"
                />
                <span className="text-xs font-semibold text-on-surface dark:text-gray-300 flex items-center space-x-1">
                  <Lock className="w-3.5 h-3.5 text-neon-saffron" />
                  <span>Submit Anonymously (Hide Roll Number & Name)</span>
                </span>
              </label>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-secondary-container to-neon-saffron text-white font-bold text-sm shadow-glow-saffron hover:opacity-95"
              >
                Log Ticket to Supabase contact_messages
              </button>
            </form>
          )}

        </div>

        {/* HELPLINE CONTACT & FAQS */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="glass-card p-6 rounded-3xl border border-surface-container-high dark:border-white/10 space-y-4">
            <h3 className="font-headline font-bold text-lg text-primary dark:text-white flex items-center space-x-2">
              <Phone className="w-5 h-5 text-neon-saffron" />
              <span>Emergency Campus Helpline</span>
            </h3>

            <div className="space-y-3 text-xs text-outline dark:text-gray-300">
              <div className="p-3 rounded-2xl bg-surface-container dark:bg-white/5 flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-500" />
                <div>
                  <p className="font-bold text-primary dark:text-white">Union Helpline Phone</p>
                  <p>{settings.contactPhone || '+91 98765 43210'}</p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-surface-container dark:bg-white/5 flex items-center space-x-3">
                <Mail className="w-4 h-4 text-sky-500" />
                <div>
                  <p className="font-bold text-primary dark:text-white">Union Official Email</p>
                  <p>{settings.contactEmail || 'union@iitrungta.fun'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* DYNAMIC FAQS FROM SUPABASE site_settings */}
          <div className="glass-card p-6 rounded-3xl border border-surface-container-high dark:border-white/10 space-y-4">
            <h3 className="font-headline font-bold text-lg text-primary dark:text-white flex items-center space-x-2">
              <HelpCircle className="w-5 h-5 text-neon-saffron" />
              <span>Frequently Asked Questions</span>
            </h3>

            <div className="space-y-2">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-surface-container dark:bg-white/5 border border-surface-container-high dark:border-white/5 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-4 text-left font-semibold text-xs text-primary dark:text-white flex items-center justify-between"
                  >
                    <span>{faq.question}</span>
                    {openFaq === idx ? <ChevronUp className="w-4 h-4 text-neon-saffron" /> : <ChevronDown className="w-4 h-4 text-outline" />}
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 pb-4 text-xs text-outline dark:text-gray-300 leading-relaxed border-t border-surface-container-high dark:border-white/5 pt-2">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
