'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';

export const dynamic = 'force-dynamic';

import {
  Calendar,
  MapPin,
  Clock,
  Users,
  CheckCircle2,
  Filter,
  Plus,
  Sparkles,
  ChevronRight,
  X
} from 'lucide-react';

export default function EventsPage() {
  const { events, toggleRSVP } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalEvent, setActiveModalEvent] = useState(null);

  const categories = ['All', 'Technical', 'Sports', 'Cultural'];

  const filteredEvents = events.filter(
    (e) => selectedCategory === 'All' || e.category === selectedCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-surface-container-high dark:border-white/10">
        <div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-6 h-6 text-secondary dark:text-neon-saffron" />
            <h1 className="font-headline font-bold text-3xl text-primary dark:text-white">
              Union Events & Interactive Calendar
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-outline dark:text-gray-400 mt-1">
            Discover upcoming hackathons, sports tournaments, workshops, and open mic evenings.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center space-x-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-primary dark:bg-neon-saffron text-white dark:text-obsidian shadow-md'
                  : 'bg-surface-container dark:bg-obsidian-card text-on-surface-variant dark:text-gray-300 border border-surface-container-high dark:border-white/10 hover:bg-surface-container-high'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="glass-card p-6 rounded-3xl border border-surface-container-high dark:border-white/10 flex flex-col justify-between space-y-6 glass-card-hover"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-secondary-container/20 text-secondary dark:text-neon-saffron text-xs font-bold uppercase">
                  {event.category}
                </span>

                <div className="flex items-center space-x-1.5 text-xs text-outline dark:text-gray-400">
                  <Users className="w-3.5 h-3.5" />
                  <span>{event.attendees} Attending</span>
                </div>
              </div>

              <div>
                <h3 className="font-headline font-bold text-xl text-primary dark:text-white">
                  {event.title}
                </h3>
                <p className="text-xs text-outline dark:text-gray-300 line-clamp-2 mt-2 leading-relaxed">
                  {event.description}
                </p>
              </div>

              <div className="space-y-2 text-xs text-outline dark:text-gray-400 pt-2 border-t border-surface-container dark:border-white/5">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-secondary dark:text-neon-saffron" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-secondary dark:text-neon-saffron" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-secondary dark:text-neon-saffron" />
                  <span>{event.venue}</span>
                </div>
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-4 border-t border-surface-container dark:border-white/5 flex items-center justify-between gap-3">
              <button
                onClick={() => setActiveModalEvent(event)}
                className="text-xs text-primary dark:text-neon-saffron font-semibold hover:underline"
              >
                View Details
              </button>

              <button
                onClick={() => toggleRSVP(event.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  event.rsvped
                    ? 'bg-emerald-500 text-white'
                    : 'bg-primary dark:bg-neon-saffron text-white dark:text-obsidian hover:opacity-95'
                }`}
              >
                {event.rsvped ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>RSVP Confirmed</span>
                  </>
                ) : (
                  <span>Reserve Seat (RSVP)</span>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* EVENT DETAILS MODAL */}
      {activeModalEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/80 backdrop-blur-md">
          <div className="bg-surface dark:bg-obsidian-card border border-surface-container-high dark:border-white/15 w-full max-w-lg rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setActiveModalEvent(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-surface-container dark:bg-white/10 text-on-surface dark:text-gray-300"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-secondary-container/20 text-secondary dark:text-neon-saffron text-xs font-bold uppercase">
              {activeModalEvent.category} Event
            </span>

            <h3 className="font-headline text-2xl font-bold text-primary dark:text-white">
              {activeModalEvent.title}
            </h3>

            <p className="text-xs sm:text-sm text-outline dark:text-gray-300 leading-relaxed">
              {activeModalEvent.description}
            </p>

            <div className="p-4 rounded-2xl bg-surface-container dark:bg-white/5 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-outline dark:text-gray-400">Date:</span>
                <span className="font-semibold text-primary dark:text-white">{activeModalEvent.date}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-outline dark:text-gray-400">Timing:</span>
                <span className="font-semibold text-primary dark:text-white">{activeModalEvent.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-outline dark:text-gray-400">Venue:</span>
                <span className="font-semibold text-primary dark:text-white">{activeModalEvent.venue}</span>
              </div>
            </div>

            <button
              onClick={() => {
                toggleRSVP(activeModalEvent.id);
                setActiveModalEvent(null);
              }}
              className="w-full py-3 rounded-xl bg-primary dark:bg-neon-saffron text-white dark:text-obsidian font-bold text-sm"
            >
              {activeModalEvent.rsvped ? 'Cancel RSVP' : 'Confirm RSVP'}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
