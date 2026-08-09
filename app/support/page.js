'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import {
  MessageSquare,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function SupportPage() {
  const { addTicket, settings } = useApp();
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Inquiry', category: 'General', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTicket(formData);
    setSubmitted(true);
  };

  const faqsList = settings.helpFaqs && settings.helpFaqs.length > 0 ? settings.helpFaqs : [
    { q: 'How do I issue my Digital Union Pass?', a: 'Click "Create Student Pass" in the top bar or visit /profile to register your details & photo.' },
    { q: 'Is voting anonymous and secure?', a: 'Yes! Every vote is cryptographically hashed and logged with voter verification.' },
    { q: 'How do I raise a grievance with the Union?', a: 'Fill in the form on this page to send a direct message to the Secretariat.' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* HEADER */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-secondary-container/20 text-secondary dark:text-neon-saffron text-xs font-bold uppercase border border-secondary-container/30">
          <MessageSquare className="w-4 h-4" />
          <span>24x7 Executive Help & Grievance Desk</span>
        </div>
        <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-primary dark:text-white">
          Support & Student Grievance Desk
        </h1>
        <p className="text-sm sm:text-base text-outline dark:text-gray-300">
          Send direct inquiries or complaints to the Student Union Secretariat. All tickets are logged and triaged by executive officers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* GRIEVANCE FORM */}
        <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-surface-container-high dark:border-white/15 shadow-xl space-y-6">
          <div className="space-y-1">
            <h3 className="font-headline font-bold text-xl text-primary dark:text-white">
              Lodge a Grievance or Message
            </h3>
            <p className="text-xs text-outline dark:text-gray-400">
              Your message will be delivered to the Secretariat and displayed in the Admin Grievance Desk.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h4 className="font-bold text-lg text-white">Grievance Ticket Submitted!</h4>
              <p className="text-xs text-gray-300">
                Thank you for contacting the Union Secretariat. Your message is recorded in the Admin Desk.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: 'General Inquiry', category: 'General', message: '' }); }}
                className="px-4 py-2 rounded-xl bg-emerald-500 text-white font-bold text-xs"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Your Full Name *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Aarav Sharma" className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">College Email *</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="aarav@iitrungta.ac.in" className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-outline dark:text-gray-300 mb-1">Message Detail *</label>
                <textarea rows={4} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Describe your grievance or inquiry in detail..." className="w-full px-4 py-2.5 rounded-xl bg-surface-container dark:bg-obsidian/60 border text-sm text-on-surface dark:text-white" />
              </div>

              <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-secondary-container to-neon-saffron text-white font-bold text-sm shadow-glow-saffron flex items-center justify-center space-x-2">
                <Send className="w-4 h-4" />
                <span>Submit Message to Secretariat</span>
              </button>
            </form>
          )}
        </div>

        {/* FAQS SHOWCASE & CONTACT INFO */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-surface-container-high dark:border-white/15 space-y-6 shadow-xl">
            <div className="flex items-center space-x-2">
              <HelpCircle className="w-6 h-6 text-neon-saffron" />
              <h3 className="font-headline font-bold text-xl text-primary dark:text-white">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-3">
              {faqsList.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-surface-container/60 dark:bg-white/5 border border-surface-container dark:border-white/10 space-y-2">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between text-left font-bold text-sm text-primary dark:text-white"
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? <ChevronUp className="w-4 h-4 text-neon-saffron shrink-0" /> : <ChevronDown className="w-4 h-4 text-outline shrink-0" />}
                  </button>
                  {openFaq === idx && (
                    <p className="text-xs text-outline dark:text-gray-300 leading-relaxed pt-1 border-t border-surface-container dark:border-white/5">
                      {faq.a}
                    </p>
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
