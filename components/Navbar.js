'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import {
  Sun,
  Moon,
  Menu,
  X,
  Vote,
  Bell,
  BookOpen,
  Calendar,
  UserCheck,
  Crown,
  Settings,
  PlusCircle,
  MessageSquare,
  Calculator
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme, settings, currentAdmin, userProfile, hasCreatedCard } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home', icon: Bell },
    { href: '/notices', label: 'Notice Board', icon: Bell, badge: 'New' },
    { href: '/elections', label: 'Elections 2026', icon: Vote, badge: 'Live' },
    { href: '/events', label: 'Campus Events', icon: Calendar },
    { href: '/resources', label: 'Study Resources', icon: BookOpen },
    { href: '/question/math', label: 'Math Practice', icon: Calculator, badge: 'Quiz' },
    { href: '/chat', label: 'Chat Room', icon: MessageSquare },
    { href: '/hall-of-fame', label: 'Cabinet Leaders', icon: Crown },
    { href: '/support', label: 'Grievance Desk', icon: Bell }
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-surface/80 dark:bg-obsidian/85 border-b border-surface-container-high dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO & BRANDING */}
          <Link href="/" className="flex items-center space-x-3 group">
            {settings.logoUrl ? (
              <img
                src={settings.logoUrl}
                alt={settings.siteTitle || 'Logo'}
                className="w-11 h-11 rounded-xl object-contain ring-2 ring-neon-saffron/40"
              />
            ) : (
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-secondary-container to-neon-saffron text-white flex items-center justify-center font-extrabold text-xl shadow-glow-saffron group-hover:scale-105 transition-transform">
                {settings.logoText || '🏛️'}
              </div>
            )}

            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-headline font-black text-xl tracking-tight text-primary dark:text-white">
                  {settings.siteTitle || 'IIT RUNGTA'}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-secondary-container/20 text-secondary dark:text-neon-saffron uppercase border border-secondary-container/30">
                  UNION
                </span>
              </div>
              <p className="text-[11px] text-outline dark:text-gray-400 font-medium tracking-wide">
                {settings.subTitle || 'Student Union Portal 2026'}
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center space-x-1.5 relative ${
                    isActive
                      ? 'bg-primary dark:bg-neon-saffron text-white dark:text-obsidian shadow-md'
                      : 'text-on-surface-variant dark:text-gray-300 hover:bg-surface-container dark:hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="ml-1 px-1.5 py-0.5 rounded-full bg-rose-500 text-white text-[9px] font-bold animate-pulse">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT ACTIONS: STUDENT PASS, ADMIN PANEL & THEME TOGGLE */}
          <div className="flex items-center space-x-2.5">
            
            {/* STUDENT DIGITAL UNION PASS BUTTON */}
            <Link
              href="/profile"
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 border ${
                hasCreatedCard
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                  : 'bg-gradient-to-r from-secondary-container to-neon-saffron text-white border-transparent shadow-glow-saffron'
              }`}
            >
              {hasCreatedCard ? <UserCheck className="w-4 h-4 text-emerald-400" /> : <PlusCircle className="w-4 h-4" />}
              <span className="hidden sm:inline">
                {hasCreatedCard ? `${userProfile?.membershipId}` : 'Create Student Pass'}
              </span>
            </Link>

            {/* ADMIN PANEL BUTTON */}
            <Link
              href="/admin"
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 border ${
                currentAdmin
                  ? 'bg-purple-500/20 text-purple-400 border-purple-500/40 shadow-glow-primary'
                  : 'bg-surface-container dark:bg-white/10 text-on-surface dark:text-white border-surface-container-high dark:border-white/10 hover:border-neon-saffron'
              }`}
            >
              <Settings className="w-4 h-4 text-neon-saffron" />
              <span className="hidden sm:inline">
                {currentAdmin ? `${currentAdmin.name}` : 'Admin'}
              </span>
            </Link>

            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark Theme"
              className="p-2 rounded-xl bg-surface-container dark:bg-white/10 text-on-surface dark:text-white border border-surface-container-high dark:border-white/10 hover:bg-surface-container-high transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-secondary" />}
            </button>

            {/* MOBILE MENU TOGGLE BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-surface-container dark:bg-white/10 text-on-surface dark:text-white border border-surface-container-high dark:border-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-surface-container-high dark:border-white/10 bg-surface dark:bg-obsidian-card px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between ${
                  isActive
                    ? 'bg-primary dark:bg-neon-saffron text-white dark:text-obsidian'
                    : 'text-on-surface dark:text-gray-200 bg-surface-container dark:bg-white/5'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5" />
                  <span>{link.label}</span>
                </div>
                {link.badge && (
                  <span className="px-2 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-bold">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
