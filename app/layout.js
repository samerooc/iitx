'use client';

import './globals.css';
import { AppProvider, useApp } from '@/context/AppContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Wrench, ShieldAlert } from 'lucide-react';

function MaintenanceGuard({ children }) {
  const { settings, currentAdmin } = useApp();

  if (settings.maintenanceMode && !currentAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-obsidian text-white text-center">
        <div className="max-w-md space-y-6 glass-card p-8 rounded-3xl border border-neon-saffron/40 shadow-2xl">
          <div className="w-16 h-16 mx-auto rounded-full bg-neon-saffron/10 text-neon-saffron flex items-center justify-center">
            <Wrench className="w-8 h-8 animate-bounce" />
          </div>

          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase border border-amber-500/20">
              System Maintenance Active
            </span>
            <h1 className="font-headline font-black text-2xl text-white">
              Portal Under Maintenance
            </h1>
          </div>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            {settings.maintenanceMessage || 'The IIT Rungta Union Portal is currently undergoing scheduled database maintenance. We will be back online shortly!'}
          </p>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
            <span>IIT Rungta Union Executive Secretariat</span>
            <Link href="/admin" className="text-neon-saffron font-bold hover:underline">
              Admin Login →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>IIT RUNGTA UNION - Official Student Portal 2026</title>
        <meta name="description" content="Official Student Union Portal of IIT Rungta with Digital Pass, Voting & Grievance Desk" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Syne:wght@400..800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface text-on-surface dark:bg-obsidian dark:text-gray-100 font-sans antialiased selection:bg-neon-saffron selection:text-obsidian min-h-screen">
        <AppProvider>
          <MaintenanceGuard>{children}</MaintenanceGuard>
        </AppProvider>
      </body>
    </html>
  );
}
