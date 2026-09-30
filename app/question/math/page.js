'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { MATH_QUIZ_DATA } from '@/data/mathQuizData';
import {
  Printer,
  RotateCcw,
  Search,
  Star,
  CheckCircle2,
  XCircle,
  HelpCircle,
  BookOpen,
  ArrowUp,
  X,
  FileText,
  ChevronRight,
  Sun,
  Moon,
  Laptop
} from 'lucide-react';

export default function MathPracticePage() {
  const [activeTab, setActiveTab] = useState('part-a'); // 'part-a' | 'part-b' | 'part-c' | 'syllabus'
  const [themePref, setThemePref] = useState('system'); // 'light' | 'dark' | 'system'
  const [mcqFilter, setMcqFilter] = useState('all'); // 'all' | 'u1' | 'u2' | 'bookmarked'
  const [partBFilter, setPartBFilter] = useState('all');
  const [partCFilter, setPartCFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [userAnswers, setUserAnswers] = useState({});
  const [bookmarks, setBookmarks] = useState([]);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Safe localStorage hydration
  useEffect(() => {
    try {
      const savedAns = localStorage.getItem('math_user_answers');
      if (savedAns) setUserAnswers(JSON.parse(savedAns));

      const savedBkm = localStorage.getItem('math_bookmarks');
      if (savedBkm) setBookmarks(JSON.parse(savedBkm));

      const savedTheme = localStorage.getItem('math_theme_pref');
      if (savedTheme) setThemePref(savedTheme);
    } catch (e) {
      // Sandbox fallback
    }
  }, []);

  // Sync scroll listener for back to top
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prepare questions data with unique identifiers
  const mcqList = useMemo(() => {
    const u1 = (MATH_QUIZ_DATA.mcqs_u1 || []).map((m, idx) => ({
      ...m,
      id: `mcq_u1_${idx + 1}`,
      unit: 'Unit 1: Differential Calculus',
      unitKey: 'u1',
      index: idx + 1
    }));
    const u2 = (MATH_QUIZ_DATA.mcqs_u2 || []).map((m, idx) => ({
      ...m,
      id: `mcq_u2_${idx + 1}`,
      unit: 'Unit 2: Multivariable & Vectors',
      unitKey: 'u2',
      index: 60 + idx + 1
    }));
    return [...u1, ...u2];
  }, []);

  const partBList = useMemo(() => {
    const u1 = (MATH_QUIZ_DATA.part_b_u1 || []).map((q) => ({
      ...q,
      id: `b_${q.num.toLowerCase()}`
    }));
    const u2 = (MATH_QUIZ_DATA.part_b_u2 || []).map((q) => ({
      ...q,
      id: `b_${q.num.toLowerCase()}`
    }));
    return [...u1, ...u2];
  }, []);

  const partCList = useMemo(() => {
    const u1 = (MATH_QUIZ_DATA.part_c_u1 || []).map((q) => ({
      ...q,
      id: `c_${q.num.toLowerCase()}`
    }));
    const u2 = (MATH_QUIZ_DATA.part_c_u2 || []).map((q) => ({
      ...q,
      id: `c_${q.num.toLowerCase()}`
    }));
    return [...u1, ...u2];
  }, []);

  // Format Mathematical Typography Helper
  const formatMathHtml = (str) => {
    if (!str) return '';
    let text = str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');

    // Subscripts
    text = text.replace(/\b([yuvwxFLR])_\(([^)]+)\)/g, '$1<sub>$2</sub>');
    text = text.replace(/\b([yuvwxFLR])_([0-9a-zA-Z+]+)\b/g, '$1<sub>$2</sub>');
    text = text.replace(/\blambda_([0-9a-zA-Z+]+)\b/g, 'λ<sub>$1</sub>');
    text = text.replace(/\btheta_([0-9a-zA-Z+]+)\b/g, 'θ<sub>$1</sub>');
    text = text.replace(/\bphi_([0-9a-zA-Z+]+)\b/g, 'ϕ<sub>$1</sub>');
    text = text.replace(/\be_([0-9a-zA-Z+]+)\b/g, 'e<sub>$1</sub>');
    text = text.replace(/\br_([0-9a-zA-Z+]+)\b/g, 'r<sub>$1</sub>');
    text = text.replace(/\bP_([0-9a-zA-Z+]+)\b/g, 'P<sub>$1</sub>');
    text = text.replace(/\bM_([0-9a-zA-Z+]+)\b/g, 'M<sub>$1</sub>');
    text = text.replace(/\bD_([0-9a-zA-Z+]+)\b/g, 'D<sub>$1</sub>');
    text = text.replace(/\b([A-Z])_([0-9]+)\b/g, '$1<sub>$2</sub>');

    // Inverses
    text = text.replace(/\b(sin|cos|tan|cot|sec|cosec)\^-\s*1\b/g, '$1<sup>-1</sup>');
    text = text.replace(/\b(sin|cos|tan|cot|sec|cosec)\^\((-?1)\)/g, '$1<sup>-1</sup>');

    // Superscripts
    text = text.replace(/([a-zA-Z0-9)\]])\^\(([^)]+)\)/g, '$1<sup>$2</sup>');
    text = text.replace(/([a-zA-Z0-9)\]])\^([0-9a-zA-Z+-]+)\b/g, '$1<sup>$2</sup>');

    // Forms
    text = text.replace(/\brt\s*-\s*s\^2\b/g, 'rt - s<sup>2</sup>');
    text = text.replace(/\brt\s*-\s*s2\b/g, 'rt - s<sup>2</sup>');
    text = text.replace(/\b1\^infinity\b/g, '1<sup>∞</sup>');
    text = text.replace(/\b0\^0\b/g, '0<sup>0</sup>');
    text = text.replace(/\binfinity\^0\b/g, '∞<sup>0</sup>');

    // Partials
    text = text.replace(/\bd\^2([xyzuvwfL])\s*\/\s*d([xyzuvw])\^2\b/g, '∂<sup>2</sup>$1/∂$2<sup>2</sup>');
    text = text.replace(/\bd\^2([xyzuvwfL])\s*\/\s*\(?d([xyzuvw])\s*d([xyzuvw])\)?\b/g, '∂<sup>2</sup>$1/∂$2∂$3');
    text = text.replace(/\bd([xyzuvwfL])\s*\/\s*d([xyzuvw])\b/g, '∂$1/∂$2');
    text = text.replace(/\bd([xyzuvwfL])\s*\/\s*dlambda\b/g, '∂$1/∂λ');
    text = text.replace(/\bd\(u,\s*v\)\s*\/\s*d\(x,\s*y\)/g, '∂(u, v)/∂(x, y)');
    text = text.replace(/\bd\(x,\s*y,\s*z\)\s*\/\s*d\(r,\s*theta,\s*phi\)/g, '∂(x, y, z)/∂(r, θ, ϕ)');
    text = text.replace(/\bd\(u,\s*v,\s*w\)\s*\/\s*d\(x,\s*y,\s*z\)/g, '∂(u, v, w)/∂(x, y, z)');

    // Greek
    text = text.replace(/\blambda\b/g, 'λ');
    text = text.replace(/\btheta\b/g, 'θ');
    text = text.replace(/\bphi\b/g, 'ϕ');
    text = text.replace(/\balpha\b/g, 'α');
    text = text.replace(/\bbeta\b/g, 'β');
    text = text.replace(/\bmu\b/g, 'μ');
    text = text.replace(/\bpi\b/g, 'π');
    text = text.replace(/\bnabla\b/g, '∇');
    text = text.replace(/\bdelta\b/g, 'δ');
    text = text.replace(/\bepsilon\b/g, 'ε');

    // Symbols
    text = text.replace(/!=/g, '≠');
    text = text.replace(/&lt;=/g, '≤');
    text = text.replace(/&gt;=/g, '≥');
    text = text.replace(/\+\/-/g, '±');
    text = text.replace(/==&gt;/g, '⇒').replace(/--&gt;/g, '→').replace(/-&gt;/g, '→');
    text = text.replace(/\binfinity\b/g, '∞');
    text = text.replace(/\bapprox\b/g, '≈');
    text = text.replace(/\bsqrt\(([^)]+)\)/g, '√($1)');
    text = text.replace(/\bsqrt\b/g, '√');

    return text;
  };

  // Option Click Handler
  const handleOptionClick = (mcq, optLetter) => {
    if (userAnswers[mcq.id]) return; // already answered

    const correctLetter = mcq.ans.trim().charAt(0).toUpperCase();
    const isCorrect = optLetter === correctLetter;

    const updated = {
      ...userAnswers,
      [mcq.id]: {
        selectedOpt: optLetter,
        isCorrect
      }
    };
    setUserAnswers(updated);
    try {
      localStorage.setItem('math_user_answers', JSON.stringify(updated));
    } catch (e) {}
  };

  // Toggle Bookmark
  const toggleBookmark = (id) => {
    let updated;
    if (bookmarks.includes(id)) {
      updated = bookmarks.filter((b) => b !== id);
    } else {
      updated = [...bookmarks, id];
    }
    setBookmarks(updated);
    try {
      localStorage.setItem('math_bookmarks', JSON.stringify(updated));
    } catch (e) {}
  };

  // Reset Quiz
  const handleResetQuiz = () => {
    if (window.confirm('Are you sure you want to reset your quiz score and restart?')) {
      setUserAnswers({});
      try {
        localStorage.removeItem('math_user_answers');
      } catch (e) {}
    }
  };

  // Quiz Stats Calculation
  const totalMCQs = mcqList.length;
  let correctCount = 0;
  let wrongCount = 0;
  Object.values(userAnswers).forEach((a) => {
    if (a.isCorrect) correctCount++;
    else wrongCount++;
  });
  const attemptedCount = correctCount + wrongCount;
  const progressPct = totalMCQs > 0 ? Math.round((attemptedCount / totalMCQs) * 100) : 0;

  // Filtered MCQs
  const filteredMCQs = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return mcqList.filter((m) => {
      if (mcqFilter === 'u1' && m.unitKey !== 'u1') return false;
      if (mcqFilter === 'u2' && m.unitKey !== 'u2') return false;
      if (mcqFilter === 'bookmarked' && !bookmarks.includes(m.id)) return false;
      if (q) {
        const str = `${m.q} ${m.options.join(' ')} ${m.ans}`.toLowerCase();
        return str.includes(q);
      }
      return true;
    });
  }, [mcqList, mcqFilter, searchQuery, bookmarks]);

  // Filtered Part B
  const filteredPartB = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return partBList.filter((b) => {
      if (partBFilter === 'u1' && b.unitKey !== 'u1') return false;
      if (partBFilter === 'u2' && b.unitKey !== 'u2') return false;
      if (q) {
        const fullContent = `${b.num} ${b.title} ${(b.sol_points || []).join(' ')}`.toLowerCase();
        return fullContent.includes(q);
      }
      return true;
    });
  }, [partBList, partBFilter, searchQuery]);

  // Filtered Part C
  const filteredPartC = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return partCList.filter((c) => {
      if (partCFilter === 'u1' && c.unitKey !== 'u1') return false;
      if (partCFilter === 'u2' && c.unitKey !== 'u2') return false;
      if (q) {
        const secTexts = (c.solution_sections || []).map((s) => `${s.heading} ${s.text}`).join(' ');
        const fullContent = `${c.num} ${c.title} ${secTexts}`.toLowerCase();
        return fullContent.includes(q);
      }
      return true;
    });
  }, [partCList, partCFilter, searchQuery]);

  // Print Handlers
  const handlePrint = (target) => {
    setIsPrintModalOpen(false);
    setTimeout(() => {
      window.print();
    }, 150);
  };

  return (
    <div className="math-practice-root" data-theme={themePref}>
      {/* Top Header Banner */}
      <header className="math-header">
        <div className="math-header-inner">
          <div className="math-brand-wrapper">
            <div className="math-brand-icon">M1</div>
            <div className="math-brand-info">
              <h1>Mathematics for Computing 1: Linear Algebra &amp; Calculus</h1>
              <p>RU-100-15-00030 | Rungta International Skills University | Question Bank &amp; Interactive Practice (Units 1 &amp; 2)</p>
            </div>
          </div>

          <div className="math-header-actions">
            <button
              type="button"
              className="math-print-btn"
              onClick={() => setIsPrintModalOpen(true)}
              title="Print Question Bank / Save as PDF"
            >
              <Printer className="w-4 h-4" />
              Print / PDF
            </button>

            {/* Theme Selector */}
            <div className="math-theme-selector">
              <button
                type="button"
                className={`math-theme-btn ${themePref === 'light' ? 'active' : ''}`}
                onClick={() => setThemePref('light')}
                title="Light Theme"
              >
                <Sun className="w-3.5 h-3.5" /> Light
              </button>
              <button
                type="button"
                className={`math-theme-btn ${themePref === 'dark' ? 'active' : ''}`}
                onClick={() => setThemePref('dark')}
                title="Dark Theme"
              >
                <Moon className="w-3.5 h-3.5" /> Dark
              </button>
              <button
                type="button"
                className={`math-theme-btn ${themePref === 'system' ? 'active' : ''}`}
                onClick={() => setThemePref('system')}
                title="System Theme"
              >
                <Laptop className="w-3.5 h-3.5" /> System
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="math-app-container">
        
        {/* Navigation Tabs */}
        <nav className="math-nav-tabs" role="tablist">
          <button
            type="button"
            className={`math-tab-btn ${activeTab === 'part-a' ? 'active' : ''}`}
            onClick={() => setActiveTab('part-a')}
          >
            <span>📝</span> PART A - Interactive MCQs
            <span className="math-tab-count">120</span>
          </button>
          <button
            type="button"
            className={`math-tab-btn ${activeTab === 'part-b' ? 'active' : ''}`}
            onClick={() => setActiveTab('part-b')}
          >
            <span>📋</span> PART B - 4 Marks Questions
            <span className="math-tab-count">50</span>
          </button>
          <button
            type="button"
            className={`math-tab-btn ${activeTab === 'part-c' ? 'active' : ''}`}
            onClick={() => setActiveTab('part-c')}
          >
            <span>📚</span> PART C - 10 Marks Questions
            <span className="math-tab-count">24</span>
          </button>
          <button
            type="button"
            className={`math-tab-btn ${activeTab === 'syllabus' ? 'active' : ''}`}
            onClick={() => setActiveTab('syllabus')}
          >
            <span>📖</span> Syllabus &amp; Formula Sheet
          </button>
        </nav>

        {/* =================================================================== */}
        {/* TAB 1: PART A (INTERACTIVE MCQS WITH TAP FEEDBACK)                  */}
        {/* =================================================================== */}
        {activeTab === 'part-a' && (
          <section>
            {/* Live Score Dashboard */}
            <div className="math-quiz-dashboard">
              <div className="math-quiz-stats-row">
                <div className="math-stat-pills">
                  <div className="math-stat-pill score">
                    <span>🎯 Score:</span>
                    <strong>{correctCount} / {totalMCQs}</strong>
                  </div>
                  <div className="math-stat-pill correct">
                    <span>✓</span>
                    <span>{correctCount} Correct</span>
                  </div>
                  <div className="math-stat-pill wrong">
                    <span>✗</span>
                    <span>{wrongCount} Incorrect</span>
                  </div>
                  <div className="math-stat-pill">
                    <span>📊 Progress:</span>
                    <span>{attemptedCount} / {totalMCQs} ({progressPct}%)</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    type="button"
                    className="math-action-btn-sm"
                    onClick={() => handlePrint('mcq')}
                    title="Print MCQs with Answers"
                  >
                    🖨️ Print MCQs + Answers
                  </button>
                  <button
                    type="button"
                    className="math-action-btn-sm text-red-500 hover:bg-red-500/10"
                    onClick={handleResetQuiz}
                    title="Reset quiz progress"
                  >
                    <RotateCcw className="w-3.5 h-3.5 mr-1" /> Reset Quiz
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="math-progress-bar-container">
                <div
                  className="math-progress-bar-fill"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="math-controls-bar">
              <div className="math-filter-group">
                <button
                  type="button"
                  className={`math-filter-btn ${mcqFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setMcqFilter('all')}
                >
                  All MCQs (120)
                </button>
                <button
                  type="button"
                  className={`math-filter-btn ${mcqFilter === 'u1' ? 'active' : ''}`}
                  onClick={() => setMcqFilter('u1')}
                >
                  Unit 1: Differential Calculus (60)
                </button>
                <button
                  type="button"
                  className={`math-filter-btn ${mcqFilter === 'u2' ? 'active' : ''}`}
                  onClick={() => setMcqFilter('u2')}
                >
                  Unit 2: Multivariable &amp; Vectors (60)
                </button>
                <button
                  type="button"
                  className={`math-filter-btn ${mcqFilter === 'bookmarked' ? 'active' : ''}`}
                  onClick={() => setMcqFilter('bookmarked')}
                >
                  ★ Bookmarked ({bookmarks.length})
                </button>
              </div>

              <div className="math-search-box">
                <Search className="math-search-icon w-4 h-4" />
                <input
                  type="text"
                  className="math-search-input"
                  placeholder="Search MCQs by question, formula, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Question Cards List */}
            <div className="math-cards-list">
              {filteredMCQs.length === 0 ? (
                <div className="text-center py-16 text-gray-500">
                  <div className="text-3xl mb-2">🔍</div>
                  <div className="font-bold text-lg">No questions match your current search or filter.</div>
                  <p className="text-sm mt-1">Try selecting &quot;All MCQs&quot; or clearing your search term.</p>
                </div>
              ) : (
                filteredMCQs.map((m) => {
                  const isBookmarked = bookmarks.includes(m.id);
                  const ansState = userAnswers[m.id];
                  const correctLetter = m.ans.trim().charAt(0).toUpperCase();

                  return (
                    <div key={m.id} className="math-card" id={`card_${m.id}`}>
                      <div className="math-card-top">
                        <div className="math-badge-group">
                          <span className="math-badge math-badge-qnum">MCQ {m.index}</span>
                          <span className="math-badge math-badge-unit">{m.unit}</span>
                        </div>
                        <button
                          type="button"
                          className={`math-bookmark-btn ${isBookmarked ? 'active' : ''}`}
                          onClick={() => toggleBookmark(m.id)}
                          title={isBookmarked ? 'Remove bookmark' : 'Bookmark this question'}
                        >
                          {isBookmarked ? '★' : '☆'}
                        </button>
                      </div>

                      <div
                        className="math-question-text"
                        dangerouslySetInnerHTML={{ __html: formatMathHtml(m.q) }}
                      />

                      {/* Options Grid */}
                      <div className="math-options-grid">
                        {m.options.map((opt) => {
                          const letter = opt.trim().charAt(0).toUpperCase();
                          const isCorrectOpt = letter === correctLetter;

                          let stateClass = '';
                          let iconNode = null;

                          if (ansState) {
                            stateClass = 'disabled';
                            if (letter === ansState.selectedOpt) {
                              if (ansState.isCorrect) {
                                stateClass += ' selected-correct';
                                iconNode = <span className="math-option-icon text-emerald-600">✓ Correct</span>;
                              } else {
                                stateClass += ' selected-wrong';
                                iconNode = <span className="math-option-icon text-red-600">✗ Wrong</span>;
                              }
                            } else if (letter === correctLetter && !ansState.isCorrect) {
                              stateClass += ' show-as-correct';
                              iconNode = <span className="math-option-icon text-emerald-600 font-bold">✓ Correct Answer</span>;
                            }
                          }

                          return (
                            <button
                              key={letter}
                              type="button"
                              className={`math-option-btn ${stateClass} ${isCorrectOpt ? 'print-correct-option' : ''}`}
                              onClick={() => handleOptionClick(m, letter)}
                            >
                              <span dangerouslySetInnerHTML={{ __html: formatMathHtml(opt) }} />
                              {iconNode}
                            </button>
                          );
                        })}
                      </div>

                      {/* Answer Reveal Box (Visible upon answering or in print) */}
                      {ansState && (
                        <div className="math-answer-reveal-box">
                          <div className="math-answer-title">
                            <span>✓</span> Correct Answer &amp; Explanation
                          </div>
                          <div>
                            <strong>Answer: </strong>
                            <span dangerouslySetInnerHTML={{ __html: formatMathHtml(m.ans) }} />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </section>
        )}

        {/* =================================================================== */}
        {/* TAB 2: PART B (4 MARKS QUESTIONS - DIRECT SHOW)                     */}
        {/* =================================================================== */}
        {activeTab === 'part-b' && (
          <section>
            <div className="math-section-hero">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <h2>PART B: Short Answer Questions (4 Marks each)</h2>
                  <p>Complete set of 50 short questions with step-by-step calculus proofs, derivations, and solutions.</p>
                </div>
                <button
                  type="button"
                  className="math-action-btn-sm"
                  onClick={() => handlePrint('part-b')}
                >
                  🖨️ Print Part B
                </button>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="math-controls-bar">
              <div className="math-filter-group">
                <button
                  type="button"
                  className={`math-filter-btn ${partBFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setPartBFilter('all')}
                >
                  All (50 Questions)
                </button>
                <button
                  type="button"
                  className={`math-filter-btn ${partBFilter === 'u1' ? 'active' : ''}`}
                  onClick={() => setPartBFilter('u1')}
                >
                  Unit 1: Differential Calculus (Q1 - Q25)
                </button>
                <button
                  type="button"
                  className={`math-filter-btn ${partBFilter === 'u2' ? 'active' : ''}`}
                  onClick={() => setPartBFilter('u2')}
                >
                  Unit 2: Multivariable &amp; Vectors (Q26 - Q50)
                </button>
              </div>

              <div className="math-search-box">
                <Search className="math-search-icon w-4 h-4" />
                <input
                  type="text"
                  className="math-search-input"
                  placeholder="Search Part B questions or solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Questions List */}
            <div className="math-cards-list">
              {filteredPartB.map((q) => (
                <div key={q.id} className="math-card">
                  <div className="math-card-top">
                    <div className="math-badge-group">
                      <span className="math-badge math-badge-qnum">{q.num}</span>
                      <span className="math-badge math-badge-marks">4 MARKS</span>
                      <span className="math-badge math-badge-unit">{q.unit}</span>
                    </div>
                  </div>
                  <h2
                    className="math-question-title"
                    dangerouslySetInnerHTML={{ __html: formatMathHtml(q.title) }}
                  />

                  {/* Direct Show Solution */}
                  <div className="math-solution-direct">
                    <div className="math-solution-title">
                      <span>💡</span> Detailed Step-by-Step Solution:
                    </div>
                    {(q.sol_points || []).map((pt, idx) => (
                      <div
                        key={idx}
                        className="math-solution-body"
                        dangerouslySetInnerHTML={{
                          __html: formatMathHtml(pt).replace(/\n/g, '<br/>')
                        }}
                      />
                    ))}

                    {q.table && (
                      <div className="math-table-wrapper">
                        <table className="math-solution-table">
                          <thead>
                            <tr>
                              {q.table.headers.map((h, hIdx) => (
                                <th key={hIdx} dangerouslySetInnerHTML={{ __html: formatMathHtml(h) }} />
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {q.table.rows.map((row, rIdx) => (
                              <tr key={rIdx}>
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} dangerouslySetInnerHTML={{ __html: formatMathHtml(cell) }} />
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {q.ascii_diagram && (
                      <div className="math-ascii-box">
                        <pre dangerouslySetInnerHTML={{ __html: formatMathHtml(q.ascii_diagram) }} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* =================================================================== */}
        {/* TAB 3: PART C (10 MARKS QUESTIONS - DIRECT SHOW)                    */}
        {/* =================================================================== */}
        {activeTab === 'part-c' && (
          <section>
            <div className="math-section-hero">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <h2>PART C: Long Answer Comprehensive Questions (10 Marks each)</h2>
                  <p>Complete set of 24 comprehensive analytical questions with extensive derivations, Leibnitz theorems, Jacobians, Hessian matrices, and optimization solutions.</p>
                </div>
                <button
                  type="button"
                  className="math-action-btn-sm"
                  onClick={() => handlePrint('part-c')}
                >
                  🖨️ Print Part C
                </button>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="math-controls-bar">
              <div className="math-filter-group">
                <button
                  type="button"
                  className={`math-filter-btn ${partCFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setPartCFilter('all')}
                >
                  All (24 Questions)
                </button>
                <button
                  type="button"
                  className={`math-filter-btn ${partCFilter === 'u1' ? 'active' : ''}`}
                  onClick={() => setPartCFilter('u1')}
                >
                  Unit 1: Differential Calculus (Q1 - Q12)
                </button>
                <button
                  type="button"
                  className={`math-filter-btn ${partCFilter === 'u2' ? 'active' : ''}`}
                  onClick={() => setPartCFilter('u2')}
                >
                  Unit 2: Multivariable &amp; Vectors (Q13 - Q24)
                </button>
              </div>

              <div className="math-search-box">
                <Search className="math-search-icon w-4 h-4" />
                <input
                  type="text"
                  className="math-search-input"
                  placeholder="Search Part C long questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Questions List */}
            <div className="math-cards-list">
              {filteredPartC.map((q) => (
                <div key={q.id} className="math-card">
                  <div className="math-card-top">
                    <div className="math-badge-group">
                      <span className="math-badge math-badge-qnum">{q.num}</span>
                      <span className="math-badge math-badge-marks">10 MARKS</span>
                      <span className="math-badge math-badge-unit">{q.unit}</span>
                    </div>
                  </div>
                  <h2
                    className="math-question-title"
                    dangerouslySetInnerHTML={{ __html: formatMathHtml(q.title) }}
                  />

                  {/* Direct Show Analytical Solution */}
                  <div className="math-solution-direct">
                    <div className="math-solution-title">
                      <span>📐</span> Complete Analytical Derivation &amp; Solution:
                    </div>

                    {(q.solution_sections || []).map((sec, sIdx) => (
                      <div key={sIdx} className="math-solution-section">
                        {sec.heading && (
                          <div
                            className="math-section-heading"
                            dangerouslySetInnerHTML={{ __html: formatMathHtml(sec.heading) }}
                          />
                        )}
                        {sec.text && (
                          <div
                            className="math-solution-body"
                            dangerouslySetInnerHTML={{
                              __html: formatMathHtml(sec.text).replace(/\n/g, '<br/>')
                            }}
                          />
                        )}

                        {sec.table && (
                          <div className="math-table-wrapper">
                            <table className="math-solution-table">
                              <thead>
                                <tr>
                                  {sec.table.headers.map((h, hIdx) => (
                                    <th key={hIdx} dangerouslySetInnerHTML={{ __html: formatMathHtml(h) }} />
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {sec.table.rows.map((row, rIdx) => (
                                  <tr key={rIdx}>
                                    {row.map((cell, cIdx) => (
                                      <td key={cIdx} dangerouslySetInnerHTML={{ __html: formatMathHtml(cell) }} />
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}

                        {sec.ascii_diagram && (
                          <div className="math-ascii-box">
                            <pre dangerouslySetInnerHTML={{ __html: formatMathHtml(sec.ascii_diagram) }} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* =================================================================== */}
        {/* TAB 4: SYLLABUS & HIGH-YIELD FORMULA SHEET                         */}
        {/* =================================================================== */}
        {activeTab === 'syllabus' && (
          <section className="space-y-6">
            
            {/* Course Meta */}
            <div className="math-syllabus-card">
              <h2>📘 Course Details &amp; Objectives</h2>
              <table className="math-syllabus-meta-table">
                <tbody>
                  <tr>
                    <td><strong>Course Code:</strong></td>
                    <td>RU-100-15-00030</td>
                    <td><strong>Course Title:</strong></td>
                    <td>Mathematics for Computing 1: Linear Algebra and Calculus</td>
                  </tr>
                  <tr>
                    <td><strong>L - T - P - C:</strong></td>
                    <td>3 - 1 - 0 - 4 (4 Credits)</td>
                    <td><strong>University:</strong></td>
                    <td>Rungta International Skills University (School of CSE)</td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                <p>
                  <strong>Course Objective:</strong> Familiarize engineering students with analytical foundations of differential calculus (mean value theorems, series approximations for algorithm complexity) and develop multivariable intuition (partial differentiation, matrix calculus, Hessian, optimization, gradient descent) essential for modern computing, data science, and machine learning.
                </p>
              </div>
            </div>

            {/* High Yield Formula Sheet */}
            <div className="math-syllabus-card">
              <h2>⚡ High-Yield Mathematical Formula Sheet</h2>

              <h3 className="text-teal-600 dark:text-teal-400">1. Standard n-th Derivatives</h3>
              <div className="math-table-wrapper">
                <table className="math-solution-table">
                  <thead>
                    <tr>
                      <th>Function y = f(x)</th>
                      <th>n-th Derivative y<sub>n</sub></th>
                      <th>Notes / Conditions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>(ax + b)^m</code></td>
                      <td><code>[m! / (m - n)!] * a^n * (ax + b)^(m - n)</code></td>
                      <td>Terminates to 0 when n &gt; m</td>
                    </tr>
                    <tr>
                      <td><code>1 / (ax + b)</code></td>
                      <td><code>[(-1)^n * n! * a^n] / (ax + b)^(n + 1)</code></td>
                      <td>Obtained by setting m = -1</td>
                    </tr>
                    <tr>
                      <td><code>log(ax + b)</code></td>
                      <td><code>[(-1)^(n - 1) * (n - 1)! * a^n] / (ax + b)^n</code></td>
                      <td>First derivative is a / (ax + b)</td>
                    </tr>
                    <tr>
                      <td><code>e^(ax)</code></td>
                      <td><code>a^n * e^(ax)</code></td>
                      <td>Exponential invariant form</td>
                    </tr>
                    <tr>
                      <td><code>a^(mx)</code></td>
                      <td><code>m^n * (log a)^n * a^(mx)</code></td>
                      <td>Base a &gt; 0</td>
                    </tr>
                    <tr>
                      <td><code>sin(ax + b)</code></td>
                      <td><code>a^n * sin(ax + b + n*π/2)</code></td>
                      <td>Phase shift of π/2 per derivative</td>
                    </tr>
                    <tr>
                      <td><code>cos(ax + b)</code></td>
                      <td><code>a^n * cos(ax + b + n*π/2)</code></td>
                      <td>Phase shift of π/2 per derivative</td>
                    </tr>
                    <tr>
                      <td><code>e^(ax) sin(bx + c)</code></td>
                      <td><code>(a^2 + b^2)^(n/2) * e^(ax) * sin(bx + c + n*ϕ)</code></td>
                      <td>ϕ = tan<sup>-1</sup>(b / a)</td>
                    </tr>
                    <tr>
                      <td><code>e^(ax) cos(bx + c)</code></td>
                      <td><code>(a^2 + b^2)^(n/2) * e^(ax) * cos(bx + c + n*ϕ)</code></td>
                      <td>ϕ = tan<sup>-1</sup>(b / a)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-teal-600 dark:text-teal-400">2. Leibnitz&apos;s Theorem for Product of Two Functions</h3>
              <div className="math-ascii-box">
                <pre>{`d^n/dx^n [u * v] = u_n * v + nC1 * u_(n-1) * v_1 + nC2 * u_(n-2) * v_2 + ... + nCr * u_(n-r) * v_r + ... + u * v_n

Summation notation:
(u * v)_n = ∑ [ n! / (r! * (n - r)!) ] * u_(n-r) * v_r   (from r = 0 to n)`}</pre>
              </div>

              <h3 className="text-teal-600 dark:text-teal-400">3. Fundamental Mean Value Theorems</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li><strong>Rolle&apos;s Theorem:</strong> If f(x) is continuous on [a, b], differentiable on (a, b), and f(a) = f(b), then ∃ c ∈ (a, b) such that <code>f&apos;(c) = 0</code> (horizontal tangent).</li>
                <li><strong>Lagrange&apos;s Mean Value Theorem (LMVT):</strong> If f(x) is continuous on [a, b] and differentiable on (a, b), then ∃ c ∈ (a, b) such that <code>f&apos;(c) = [f(b) - f(a)] / (b - a)</code> (tangent parallel to secant chord).</li>
                <li><strong>Cauchy&apos;s Mean Value Theorem:</strong> <code>[f(b) - f(a)] / [g(b) - g(a)] = f&apos;(c) / g&apos;(c)</code> for c ∈ (a, b).</li>
              </ul>

              <h3 className="text-teal-600 dark:text-teal-400">4. Standard Maclaurin Power Series Expansions</h3>
              <div className="math-table-wrapper">
                <table className="math-solution-table">
                  <thead>
                    <tr>
                      <th>Function f(x)</th>
                      <th>Series Expansion about x = 0</th>
                      <th>Radius of Convergence</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>e^x</code></td>
                      <td><code>1 + x + x^2/2! + x^3/3! + x^4/4! + ...</code></td>
                      <td>-∞ &lt; x &lt; ∞</td>
                    </tr>
                    <tr>
                      <td><code>sin x</code></td>
                      <td><code>x - x^3/3! + x^5/5! - x^7/7! + ...</code></td>
                      <td>-∞ &lt; x &lt; ∞</td>
                    </tr>
                    <tr>
                      <td><code>cos x</code></td>
                      <td><code>1 - x^2/2! + x^4/4! - x^6/6! + ...</code></td>
                      <td>-∞ &lt; x &lt; ∞</td>
                    </tr>
                    <tr>
                      <td><code>log(1 + x)</code></td>
                      <td><code>x - x^2/2 + x^3/3 - x^4/4 + ...</code></td>
                      <td>-1 &lt; x ≤ 1</td>
                    </tr>
                    <tr>
                      <td><code>1 / (1 - x)</code></td>
                      <td><code>1 + x + x^2 + x^3 + x^4 + ...</code></td>
                      <td>|x| &lt; 1</td>
                    </tr>
                    <tr>
                      <td><code>tan x</code></td>
                      <td><code>x + x^3/3 + 2x^5/15 + ...</code></td>
                      <td>|x| &lt; π/2</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-teal-600 dark:text-teal-400">5. Jacobians &amp; Coordinate Transformations</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li><strong>2D Cartesian to Polar (x = r cos θ, y = r sin θ):</strong> <code>J = ∂(x,y)/∂(r,θ) = r</code>.</li>
                <li><strong>3D Cylindrical (x = r cos θ, y = r sin θ, z = z):</strong> <code>J = ∂(x,y,z)/∂(r,θ,z) = r</code>.</li>
                <li><strong>3D Spherical (x = r sin θ cos ϕ, y = r sin θ sin ϕ, z = r cos θ):</strong> <code>J = ∂(x,y,z)/∂(r,θ,ϕ) = r^2 sin θ</code>.</li>
                <li><strong>Functional Dependence:</strong> u and v are functionally dependent ⇔ <code>∂(u,v)/∂(x,y) = 0</code> identically.</li>
              </ul>

              <h3 className="text-teal-600 dark:text-teal-400">6. Multivariable Extrema &amp; Hessian Discriminant</h3>
              <div className="math-ascii-box">
                <pre>{`Stationary points satisfy: ∂f/∂x = 0  and  ∂f/∂y = 0.
Let r = ∂^2 f / ∂x^2,   s = ∂^2 f / (∂x ∂y),   t = ∂^2 f / ∂y^2.
Discriminant D = rt - s^2 = det(Hessian Matrix):

1. If D > 0 and r > 0: Local Minimum
2. If D > 0 and r < 0: Local Maximum
3. If D < 0: Saddle Point (neither max nor min)
4. If D = 0: Test Inconclusive`}</pre>
              </div>

              <h3 className="text-teal-600 dark:text-teal-400">7. Gradient Descent Parameter Update</h3>
              <div className="math-ascii-box">
                <pre>{`θ_(t+1) = θ_t - α * ∇ f(θ_t)

where α > 0 is the learning rate (step size).
Convergence guarantee for quadratic loss (1/2 θ^T A θ): 0 < α < 2 / λ_max(A).`}</pre>
              </div>

              <h3 className="text-teal-600 dark:text-teal-400">8. Vector Calculus Core Identities</h3>
              <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li><strong>Gradient:</strong> <code>∇ϕ = i (∂ϕ/∂x) + j (∂ϕ/∂y) + k (∂ϕ/∂z)</code> (normal vector to level surface).</li>
                <li><strong>Divergence:</strong> <code>∇ · F = ∂F_1/∂x + ∂F_2/∂y + ∂F_3/∂z</code>. Field is <em>Solenoidal</em> if <code>div F = 0</code>.</li>
                <li><strong>Curl:</strong> <code>∇ × F = det([i, j, k; ∂/∂x, ∂/∂y, ∂/∂z; F_1, F_2, F_3])</code>. Field is <em>Irrotational (Conservative)</em> if <code>curl F = 0</code> (then F = ∇ϕ).</li>
                <li><strong>Fundamental Zero Identities:</strong> <code>div(curl F) = 0</code> and <code>curl(grad ϕ) = 0</code>.</li>
              </ul>
            </div>

            {/* Prescribed Textbooks */}
            <div className="math-syllabus-card">
              <h3>📚 Prescribed Textbooks &amp; References</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600 dark:text-gray-400 mt-2">
                <li><em>Higher Engineering Mathematics</em>, Dr. B.S. Grewal, 42nd Edition, Khanna Publishers.</li>
                <li><em>Linear Algebra and Its Applications</em>, Gilbert Strang, 4th Edition, Thomson Brooks/Cole.</li>
                <li><em>Advanced Engineering Mathematics</em>, Erwin Kreyszig, 10th Edition, Wiley India.</li>
                <li><em>Linear Algebra and Its Applications</em>, David C. Lay, Steven R. Lay and Judi J. McDonald, 6th Edition, Pearson.</li>
              </ul>
            </div>

          </section>
        )}

      </main>

      {/* Print Options Modal */}
      {isPrintModalOpen && (
        <div className="math-modal-backdrop" onClick={() => setIsPrintModalOpen(false)}>
          <div className="math-modal" onClick={(e) => e.stopPropagation()}>
            <div className="math-modal-header">
              <h3>
                <Printer className="w-5 h-5 text-teal-600" /> Print Question Bank / Save as PDF
              </h3>
              <button
                type="button"
                className="math-modal-close-btn"
                onClick={() => setIsPrintModalOpen(false)}
              >
                &times;
              </button>
            </div>
            <div className="math-modal-body">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Select a print mode. When printing, <strong>all MCQs will include visible answers and explanations</strong> with the correct option clearly highlighted.
              </p>
              <div>
                <button
                  type="button"
                  className="math-choice-btn"
                  onClick={() => handlePrint('all')}
                >
                  <div className="math-choice-icon">📚</div>
                  <div>
                    <div className="math-choice-title">Print Complete Question Bank (All Units)</div>
                    <div className="math-choice-desc">All 194 questions: Part A (MCQs + Answers), Part B (4 Marks), Part C (10 Marks), and Formula Sheet.</div>
                  </div>
                </button>

                <button
                  type="button"
                  className="math-choice-btn"
                  onClick={() => handlePrint('mcq')}
                >
                  <div className="math-choice-icon">📝</div>
                  <div>
                    <div className="math-choice-title">Print Part A: MCQs with Answers (120 Questions)</div>
                    <div className="math-choice-desc">All Unit 1 &amp; Unit 2 MCQs with highlighted answers and complete explanations.</div>
                  </div>
                </button>

                <button
                  type="button"
                  className="math-choice-btn"
                  onClick={() => handlePrint('part-b')}
                >
                  <div className="math-choice-icon">📋</div>
                  <div>
                    <div className="math-choice-title">Print Part B: 4 Marks Questions (50 Questions)</div>
                    <div className="math-choice-desc">Short answer questions with step-by-step calculus proofs and derivations.</div>
                  </div>
                </button>

                <button
                  type="button"
                  className="math-choice-btn"
                  onClick={() => handlePrint('part-c')}
                >
                  <div className="math-choice-icon">📐</div>
                  <div>
                    <div className="math-choice-title">Print Part C: 10 Marks Questions (24 Questions)</div>
                    <div className="math-choice-desc">Long comprehensive questions with analytical steps, Jacobians, and Hessians.</div>
                  </div>
                </button>

                <button
                  type="button"
                  className="math-choice-btn"
                  onClick={() => handlePrint('syllabus')}
                >
                  <div className="math-choice-icon">⚡</div>
                  <div>
                    <div className="math-choice-title">Print High-Yield Formula Sheet &amp; Syllabus</div>
                    <div className="math-choice-desc">Standard nth derivatives, Leibnitz formula, Maclaurin series, and vector identities.</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          type="button"
          className="math-back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
