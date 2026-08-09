'use client';

import React, { useState, useEffect } from 'react';
import { useApp } from '@/context/AppContext';

export const dynamic = 'force-dynamic';

import confetti from 'canvas-confetti';
import {
  Vote,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Sparkles,
  User,
  Share2,
  Copy,
  Award,
  Clock,
  ChevronRight,
  FileText,
  Check,
  Zap,
  Info
} from 'lucide-react';

export default function ElectionsPage() {
  const {
    candidates,
    userVoteState,
    castElectionVote,
    hasVoted,
    submitFinalBallot,
    voteReceipt,
    userProfile
  } = useApp();

  const [activeTab, setActiveTab] = useState('ballot'); // 'ballot' | 'matrix' | 'candidates'
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 14, minutes: 22, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleFinalSubmit = () => {
    if (Object.keys(userVoteState).length < 2) {
      alert('Please select a candidate for both President and Vice President before submitting your ballot.');
      return;
    }
    const receipt = submitFinalBallot();
    setShowReceiptModal(true);
    // Trigger confetti effect
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log('Confetti triggered');
    }
  };

  const copyTxnHash = () => {
    if (voteReceipt?.txnHash) {
      navigator.clipboard.writeText(voteReceipt.txnHash);
      setCopiedHash(true);
      setTimeout(() => setCopiedHash(false), 2000);
    }
  };

  const presidentCandidates = candidates.filter((c) => c.position === 'President');
  const vpCandidates = candidates.filter((c) => c.position === 'Vice President');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* 1. ELECTION COUNTDOWN BANNER */}
      <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-primary via-primary-container to-obsidian text-white border border-white/10 relative overflow-hidden shadow-2xl space-y-6">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-saffron/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neon-saffron/20 border border-neon-saffron/40 text-neon-saffron text-xs font-bold uppercase">
              <Zap className="w-3.5 h-3.5" />
              <span>Official Student Union Ballot 2026</span>
            </div>
            <h1 className="font-headline font-bold text-3xl sm:text-4xl text-white">
              Executive Council Elections
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
              Cast your encrypted, verifiable vote for the Student Body Leadership. Every vote counts towards campus progress.
            </p>
          </div>

          {/* Countdown timer grid */}
          <div className="flex items-center space-x-3 bg-obsidian/70 backdrop-blur-md p-4 rounded-2xl border border-white/10">
            <div className="text-center px-2">
              <span className="font-headline text-2xl font-bold text-neon-saffron">{timeLeft.days}</span>
              <p className="text-[10px] text-gray-400 uppercase">Days</p>
            </div>
            <span className="text-xl font-bold text-gray-500">:</span>
            <div className="text-center px-2">
              <span className="font-headline text-2xl font-bold text-white">{timeLeft.hours}</span>
              <p className="text-[10px] text-gray-400 uppercase">Hours</p>
            </div>
            <span className="text-xl font-bold text-gray-500">:</span>
            <div className="text-center px-2">
              <span className="font-headline text-2xl font-bold text-white">{timeLeft.minutes}</span>
              <p className="text-[10px] text-gray-400 uppercase">Mins</p>
            </div>
            <span className="text-xl font-bold text-gray-500">:</span>
            <div className="text-center px-2">
              <span className="font-headline text-2xl font-bold text-neon-saffron">{timeLeft.seconds}</span>
              <p className="text-[10px] text-gray-400 uppercase">Secs</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. TAB CONTROLS */}
      <div className="flex items-center space-x-2 border-b border-surface-container-high dark:border-white/10 pb-3 overflow-x-auto">
        <button
          onClick={() => setActiveTab('ballot')}
          className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center space-x-2 whitespace-nowrap ${
            activeTab === 'ballot'
              ? 'bg-primary dark:bg-neon-saffron text-white dark:text-obsidian shadow-md'
              : 'bg-surface-container dark:bg-obsidian-card text-on-surface-variant dark:text-gray-300 hover:bg-surface-container-high'
          }`}
        >
          <Vote className="w-4 h-4" />
          <span>Interactive Ballot Box</span>
        </button>

        <button
          onClick={() => setActiveTab('matrix')}
          className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center space-x-2 whitespace-nowrap ${
            activeTab === 'matrix'
              ? 'bg-primary dark:bg-neon-saffron text-white dark:text-obsidian shadow-md'
              : 'bg-surface-container dark:bg-obsidian-card text-on-surface-variant dark:text-gray-300 hover:bg-surface-container-high'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Candidate Comparison Matrix</span>
        </button>
      </div>

      {/* 3. BALLOT BOX TAB */}
      {activeTab === 'ballot' && (
        <div className="space-y-10">
          
          {hasVoted ? (
            <div className="glass-card p-8 rounded-3xl border border-emerald-500/30 text-center max-w-xl mx-auto space-y-4 shadow-xl">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="font-headline font-bold text-2xl text-primary dark:text-white">
                Your Vote Has Been Recorded!
              </h2>
              <p className="text-xs sm:text-sm text-outline dark:text-gray-300 leading-relaxed">
                Thank you for exercising your democratic right. Your vote has been cryptographically signed and stored in the Election Commission vault.
              </p>
              <button
                onClick={() => setShowReceiptModal(true)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-secondary-container to-neon-saffron text-white font-semibold text-sm shadow-glow-saffron hover:opacity-95 transition-opacity inline-flex items-center space-x-2"
              >
                <Award className="w-4 h-4" />
                <span>View Official Vote Receipt</span>
              </button>
            </div>
          ) : (
            <>
              {/* SECTION: PRESIDENT POSITION */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-surface-container dark:border-white/5">
                  <div className="flex items-center space-x-2">
                    <span className="w-7 h-7 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-xs">
                      1
                    </span>
                    <h3 className="font-headline font-bold text-xl text-primary dark:text-white">
                      Presidential Candidates
                    </h3>
                  </div>
                  <span className="text-xs text-outline dark:text-gray-400">Select 1 Candidate</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {presidentCandidates.map((cand) => {
                    const isSelected = userVoteState['President'] === cand.id;

                    return (
                      <div
                        key={cand.id}
                        onClick={() => castElectionVote('President', cand.id)}
                        className={`glass-card p-6 rounded-3xl border transition-all cursor-pointer space-y-4 relative ${
                          isSelected
                            ? 'border-neon-saffron ring-2 ring-neon-saffron/50 bg-secondary-container/5 dark:bg-neon-saffron/10'
                            : 'border-surface-container-high dark:border-white/10 hover:border-primary/40 dark:hover:border-white/20'
                        }`}
                      >
                        {isSelected && (
                          <span className="absolute top-4 right-4 bg-neon-saffron text-white p-1 rounded-full">
                            <Check className="w-4 h-4" />
                          </span>
                        )}

                        <div className="flex items-center space-x-4">
                          <img
                            src={cand.avatar}
                            alt={cand.name}
                            className="w-16 h-16 rounded-2xl object-cover ring-2 ring-primary/20 dark:ring-neon-saffron/30"
                          />
                          <div>
                            <h4 className="font-headline font-bold text-lg text-primary dark:text-white">
                              {cand.name}
                            </h4>
                            <p className="text-xs font-semibold text-secondary dark:text-neon-saffron">
                              {cand.party}
                            </p>
                            <p className="text-[11px] text-outline dark:text-gray-400 mt-0.5">
                              {cand.year}
                            </p>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-surface-container dark:bg-obsidian/60 text-xs text-on-surface dark:text-gray-300 leading-relaxed italic border border-surface-container-high dark:border-white/5">
                          "{cand.manifesto}"
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* SECTION: VICE PRESIDENT POSITION */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-surface-container dark:border-white/5">
                  <div className="flex items-center space-x-2">
                    <span className="w-7 h-7 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-xs">
                      2
                    </span>
                    <h3 className="font-headline font-bold text-xl text-primary dark:text-white">
                      Vice Presidential Candidates
                    </h3>
                  </div>
                  <span className="text-xs text-outline dark:text-gray-400">Select 1 Candidate</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {vpCandidates.map((cand) => {
                    const isSelected = userVoteState['Vice President'] === cand.id;

                    return (
                      <div
                        key={cand.id}
                        onClick={() => castElectionVote('Vice President', cand.id)}
                        className={`glass-card p-6 rounded-3xl border transition-all cursor-pointer space-y-4 relative ${
                          isSelected
                            ? 'border-neon-saffron ring-2 ring-neon-saffron/50 bg-secondary-container/5 dark:bg-neon-saffron/10'
                            : 'border-surface-container-high dark:border-white/10 hover:border-primary/40 dark:hover:border-white/20'
                        }`}
                      >
                        {isSelected && (
                          <span className="absolute top-4 right-4 bg-neon-saffron text-white p-1 rounded-full">
                            <Check className="w-4 h-4" />
                          </span>
                        )}

                        <div className="flex items-center space-x-4">
                          <img
                            src={cand.avatar}
                            alt={cand.name}
                            className="w-16 h-16 rounded-2xl object-cover ring-2 ring-primary/20 dark:ring-neon-saffron/30"
                          />
                          <div>
                            <h4 className="font-headline font-bold text-lg text-primary dark:text-white">
                              {cand.name}
                            </h4>
                            <p className="text-xs font-semibold text-secondary dark:text-neon-saffron">
                              {cand.party}
                            </p>
                            <p className="text-[11px] text-outline dark:text-gray-400 mt-0.5">
                              {cand.year}
                            </p>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-surface-container dark:bg-obsidian/60 text-xs text-on-surface dark:text-gray-300 leading-relaxed italic border border-surface-container-high dark:border-white/5">
                          "{cand.manifesto}"
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* SUBMIT BALLOT ACTION */}
              <div className="p-6 rounded-3xl bg-surface-container-high dark:bg-obsidian-card border border-surface-container-highest dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-headline font-bold text-base text-primary dark:text-white">
                    Ready to lock in your ballot?
                  </h4>
                  <p className="text-xs text-outline dark:text-gray-400 mt-0.5">
                    Your voter hash: <span className="font-mono text-secondary dark:text-neon-saffron">{userProfile.membershipId}</span>
                  </p>
                </div>

                <button
                  onClick={handleFinalSubmit}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-secondary-container to-neon-saffron text-white font-bold text-sm shadow-glow-saffron hover:opacity-95 transition-opacity flex items-center space-x-2"
                >
                  <Lock className="w-4 h-4" />
                  <span>Submit Encrypted Ballot</span>
                </button>
              </div>
            </>
          )}

        </div>
      )}

      {/* 4. COMPARISON MATRIX TAB */}
      {activeTab === 'matrix' && (
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-surface-container-high dark:border-white/10 space-y-6 overflow-x-auto">
          <div className="space-y-1">
            <h3 className="font-headline font-bold text-xl text-primary dark:text-white">
              Candidate Manifesto Comparison Matrix
            </h3>
            <p className="text-xs text-outline dark:text-gray-400">
              Side-by-side key agenda evaluation for all presidential candidates.
            </p>
          </div>

          <table className="w-full text-left text-sm border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-surface-container-high dark:border-white/10 text-primary dark:text-neon-saffron">
                <th className="p-3 font-semibold">Key Agenda Item</th>
                <th className="p-3 font-semibold">Rohan Verma (Progressive)</th>
                <th className="p-3 font-semibold">Ananya Patel (United Rungta)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container dark:divide-white/5 text-on-surface dark:text-gray-300">
              <tr>
                <td className="p-3 font-medium text-xs">24x7 Library Access</td>
                <td className="p-3 text-emerald-500 font-bold text-xs">✓ Full 24/7 Access Proposed</td>
                <td className="p-3 text-emerald-500 font-bold text-xs">✓ Exam Week 24/7 Extended</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-xs">Campus Wi-Fi Upgrade</td>
                <td className="p-3 text-xs">1 Gbps Hostel Fiber Line</td>
                <td className="p-3 text-xs">Seamless Outdoor Wi-Fi Mesh</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-xs">Placement & Internships</td>
                <td className="p-3 text-xs">Free Resume & Coding Bootcamp</td>
                <td className="p-3 text-xs">Alumni Referral Portal</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-xs">Mess Food Quality</td>
                <td className="p-3 text-xs">Weekly Student Audits</td>
                <td className="p-3 text-xs">New Organic Catering Contractor</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* 5. VOTE RECEIPT MODAL */}
      {showReceiptModal && voteReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/85 backdrop-blur-md">
          <div className="bg-surface dark:bg-obsidian-card border border-surface-container-high dark:border-white/15 w-full max-w-md rounded-3xl p-6 space-y-6 shadow-2xl relative text-center">
            
            <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-secondary-container to-neon-saffron p-0.5 shadow-glow-saffron flex items-center justify-center">
              <div className="w-full h-full bg-obsidian rounded-[14px] flex items-center justify-center text-neon-saffron font-bold text-xl">
                🪷
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="font-headline font-bold text-2xl text-primary dark:text-white">
                Official Vote Receipt
              </h3>
              <p className="text-xs text-emerald-500 font-semibold">
                Status: Cryptographically Signed & Verified
              </p>
            </div>

            <div className="space-y-3 text-left p-4 rounded-2xl bg-surface-container dark:bg-white/5 border border-surface-container-high dark:border-white/10 text-xs">
              <div>
                <p className="text-outline dark:text-gray-400">Transaction Hash:</p>
                <div className="flex items-center justify-between font-mono text-secondary dark:text-neon-saffron font-bold mt-0.5">
                  <span className="truncate pr-2">{voteReceipt.txnHash}</span>
                  <button onClick={copyTxnHash} className="p-1 hover:text-white">
                    {copiedHash ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-surface-container dark:border-white/5">
                <div>
                  <p className="text-outline dark:text-gray-400">Voter ID:</p>
                  <p className="font-semibold text-on-surface dark:text-white">{voteReceipt.voterId}</p>
                </div>
                <div>
                  <p className="text-outline dark:text-gray-400">Timestamp:</p>
                  <p className="font-semibold text-on-surface dark:text-white">{voteReceipt.timestamp}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowReceiptModal(false)}
              className="w-full py-3 rounded-xl bg-primary text-white font-bold text-sm"
            >
              Done & Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
