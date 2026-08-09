'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { formatExternalUrl } from '@/lib/utils';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Instagram,
  ShieldCheck,
  Heart,
  Globe,
  ShieldAlert
} from 'lucide-react';

export default function Footer() {
  const { settings } = useApp();

  return (
    <footer className="w-full bg-surface-container-low dark:bg-obsidian-card border-t border-surface-container-high dark:border-white/10 pt-12 pb-8 text-on-surface dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* BRAND COLUMN */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {settings.logoUrl ? (
                <img src={settings.logoUrl} alt="Logo" className="w-10 h-10 rounded-xl object-contain ring-2 ring-neon-saffron/40" />
              ) : (
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-secondary-container to-neon-saffron text-white flex items-center justify-center font-black text-lg shadow-glow-saffron">
                  {settings.logoText || '🏛️'}
                </div>
              )}
              <div>
                <h3 className="font-headline font-black text-lg text-primary dark:text-white">
                  {settings.siteTitle || 'IIT RUNGTA'}
                </h3>
                <p className="text-xs text-outline dark:text-gray-400 font-medium">
                  {settings.subTitle || 'Student Union Portal 2026'}
                </p>
              </div>
            </div>
            <p className="text-xs text-outline dark:text-gray-400 leading-relaxed">
              Empowering students through transparent governance, digital voting, and 24x7 grievance desk.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-sm text-primary dark:text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-neon-saffron transition-colors">Notice Board & News</Link>
              </li>
              <li>
                <Link href="/elections" className="hover:text-neon-saffron transition-colors">Executive Elections 2026</Link>
              </li>
              <li>
                <Link href="/hall-of-fame" className="hover:text-neon-saffron transition-colors">Cabinet Ministers</Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-neon-saffron transition-colors">Digital Union Pass</Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-neon-saffron transition-colors">Help & Grievance Desk</Link>
              </li>
              <li>
                <Link href="/terms" className="text-neon-saffron font-bold hover:underline flex items-center space-x-1">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Terms & Mock Disclaimer</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-sm text-primary dark:text-white uppercase tracking-wider">
              Secretariat Contact
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-neon-saffron shrink-0" />
                <span>{settings.contactPhone || '+91 98765 43210'}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-neon-saffron shrink-0" />
                <span>{settings.contactEmail || 'union@iitrungta.fun'}</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-neon-saffron shrink-0 mt-0.5" />
                <span>{settings.campusAddress || 'IIT Rungta Campus, Bhilai, Chhattisgarh'}</span>
              </li>
            </ul>
          </div>

          {/* SOCIAL MEDIA LINKS WITH FIXED REDIRECTION */}
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-sm text-primary dark:text-white uppercase tracking-wider">
              Connect With Us
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {settings.whatsappGcLink && (
                <a
                  href={formatExternalUrl(settings.whatsappGcLink)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-surface-container dark:bg-white/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                  title="WhatsApp Group"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              )}
              {settings.telegramLink && (
                <a
                  href={formatExternalUrl(settings.telegramLink)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-surface-container dark:bg-white/10 text-sky-400 hover:bg-sky-500/20 transition-colors"
                  title="Telegram Channel"
                >
                  <Send className="w-4 h-4" />
                </a>
              )}
              {settings.instagramLink && (
                <a
                  href={formatExternalUrl(settings.instagramLink)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-surface-container dark:bg-white/10 text-pink-400 hover:bg-pink-500/20 transition-colors"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {settings.discordLink && (
                <a
                  href={formatExternalUrl(settings.discordLink)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-surface-container dark:bg-white/10 text-indigo-400 hover:bg-indigo-500/20 transition-colors"
                  title="Discord Community"
                >
                  <Globe className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & DISCLAIMER NOTICE */}
        <div className="pt-6 border-t border-surface-container dark:border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-outline dark:text-gray-400 gap-4">
          <p>© 2026 IIT Rungta Student Union. All rights reserved.</p>
          <div className="flex items-center space-x-1">
            <span>Built for Skill Testing & Fun Purpose</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
          </div>
        </div>

      </div>
    </footer>
  );
}
