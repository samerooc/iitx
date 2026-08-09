'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Instagram,
  Disc as DiscordIcon,
  Shield,
  Heart,
  ExternalLink
} from 'lucide-react';

export default function Footer() {
  const { settings } = useApp();

  return (
    <footer className="w-full bg-surface-container-high/60 dark:bg-obsidian-card border-t border-surface-container-high dark:border-white/10 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* BRAND COLUMN */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {settings.logoUrl ? (
                <img src={settings.logoUrl} alt="Logo" className="w-10 h-10 rounded-xl object-contain" />
              ) : (
                <div className="w-10 h-10 rounded-xl bg-primary text-white font-extrabold text-lg flex items-center justify-center">
                  {settings.logoText || '🏛️'}
                </div>
              )}
              <div>
                <h3 className="font-headline font-bold text-lg text-primary dark:text-white">
                  {settings.siteTitle || 'IIT RUNGTA'} UNION
                </h3>
                <p className="text-[10px] text-outline dark:text-gray-400">Official Student Governance</p>
              </div>
            </div>

            <p className="text-xs text-outline dark:text-gray-300 leading-relaxed">
              {settings.heroSubtext || 'IIT Rungta Union 2026 - Empowering student voices, academic excellence, and campus unity.'}
            </p>

            {/* DYNAMIC SOCIAL LINKS FROM SUPABASE */}
            <div className="flex items-center space-x-2 pt-2">
              {settings.whatsappGcLink && (
                <a
                  href={settings.whatsappGcLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-colors"
                  title="WhatsApp Group"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              )}
              {settings.telegramLink && (
                <a
                  href={settings.telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-sky-500/10 text-sky-500 hover:bg-sky-500 hover:text-white transition-colors"
                  title="Telegram Channel"
                >
                  <Send className="w-4 h-4" />
                </a>
              )}
              {settings.instagramLink && (
                <a
                  href={settings.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-pink-500/10 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors"
                  title="Instagram Page"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {settings.discordLink && (
                <a
                  href={settings.discordLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500 hover:text-white transition-colors"
                  title="Discord Server"
                >
                  <DiscordIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* QUICK PORTAL LINKS */}
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-sm text-primary dark:text-white uppercase tracking-wider">
              Student Portals
            </h4>
            <ul className="space-y-2 text-xs text-outline dark:text-gray-300 font-medium">
              <li><Link href="/" className="hover:text-neon-saffron transition-colors">Notice Board & News</Link></li>
              <li><Link href="/elections" className="hover:text-neon-saffron transition-colors">Elections & Voting Portal</Link></li>
              <li><Link href="/events" className="hover:text-neon-saffron transition-colors">Campus Events Calendar</Link></li>
              <li><Link href="/resources" className="hover:text-neon-saffron transition-colors">Academic Study Bank</Link></li>
              <li><Link href="/hall-of-fame" className="hover:text-neon-saffron transition-colors">Cabinet Ministers & Leaders</Link></li>
              <li><Link href="/support" className="hover:text-neon-saffron transition-colors">Grievance & Support Desk</Link></li>
            </ul>
          </div>

          {/* GOVERNANCE & ADMIN */}
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-sm text-primary dark:text-white uppercase tracking-wider">
              Governance & Admin
            </h4>
            <ul className="space-y-2 text-xs text-outline dark:text-gray-300 font-medium">
              <li><Link href="/admin" className="hover:text-neon-saffron transition-colors">Master & Sub-Admin Panel</Link></li>
              <li><Link href="/profile" className="hover:text-neon-saffron transition-colors">Digital Union Pass Card</Link></li>
              <li><a href="#" className="hover:text-neon-saffron transition-colors">Constitution & Bylaws 2026</a></li>
              <li><a href="#" className="hover:text-neon-saffron transition-colors">Election Commission Guidelines</a></li>
            </ul>
          </div>

          {/* CONTACT DETAILS FROM SUPABASE site_settings */}
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-sm text-primary dark:text-white uppercase tracking-wider">
              Campus Union Office
            </h4>
            <div className="space-y-2.5 text-xs text-outline dark:text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-neon-saffron shrink-0 mt-0.5" />
                <span>{settings.campusAddress || 'IIT Rungta Campus, Bhilai, Chhattisgarh, India 490024'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-neon-saffron shrink-0" />
                <span>{settings.contactPhone || '+91 98765 43210'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-neon-saffron shrink-0" />
                <span>{settings.contactEmail || 'union@iitrungta.fun'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BANNER */}
        <div className="pt-6 border-t border-surface-container dark:border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-outline dark:text-gray-400 gap-4">
          <p>© 2026 {settings.siteTitle || 'IIT Rungta'} Student Union. All rights reserved. Connected to Supabase DB.</p>
          <div className="flex items-center space-x-1">
            <span>Designed for Student Welfare & Democracy</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
          </div>
        </div>

      </div>
    </footer>
  );
}
