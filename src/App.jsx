import React, { useState, useEffect, useCallback } from 'react';
import { sections, allSlides } from './data/parseContent.js';
import Sidebar from './components/Sidebar.jsx';
import TopicBrowser from './components/TopicBrowser.jsx';
import Flashcard from './components/Flashcard.jsx';
import QuizMode from './components/QuizMode.jsx';
import SearchView from './components/SearchView.jsx';
import QuickReference from './components/QuickReference.jsx';

const STORAGE_KEY = 'aws-soa-c03-progress';
const MODES = [
  { id: 'browse', label: 'Browse', icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
  )},
  { id: 'flashcards', label: 'Flashcards', icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  )},
  { id: 'quiz', label: 'Quiz', icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  )},
  { id: 'search', label: 'Search', icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  )},
  { id: 'quickref', label: 'Quick Ref', icon: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )},
];

function loadProgress() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return new Set(JSON.parse(stored));
  } catch {
    // ignore
  }
  return new Set();
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...progress]));
  } catch {
    // ignore
  }
}

export default function App() {
  const [activeMode, setActiveMode] = useState('browse');
  const [activeSection, setActiveSection] = useState(0);
  const [highlightedSlide, setHighlightedSlide] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [progress, setProgress] = useState(() => loadProgress());

  // Persist progress to localStorage whenever it changes
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const handleToggleStudied = useCallback((slideId) => {
    setProgress((prev) => {
      const next = new Set(prev);
      if (next.has(slideId)) next.delete(slideId);
      else next.add(slideId);
      return next;
    });
  }, []);

  const handleSectionSelect = useCallback((sectionId, slideId = null) => {
    setActiveSection(sectionId);
    setHighlightedSlide(slideId);
    setActiveMode('browse');
  }, []);

  const handleNavigateTo = useCallback((sectionId, slideId) => {
    setActiveSection(sectionId);
    setHighlightedSlide(slideId);
    setActiveMode('browse');
  }, []);

  const handleModeChange = (mode) => {
    setActiveMode(mode);
    if (mode !== 'browse') setHighlightedSlide(null);
  };

  const totalStudied = progress.size;
  const totalSlides = allSlides.length;
  const overallPct = totalSlides > 0 ? Math.round((totalStudied / totalSlides) * 100) : 0;

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar — only visible in Browse mode */}
      {activeMode === 'browse' && (
        <Sidebar
          sections={sections}
          progress={progress}
          activeSection={activeSection}
          activeSlide={highlightedSlide}
          onSectionSelect={handleSectionSelect}
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed((c) => !c)}
        />
      )}

      {/* Main area */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Top Navbar */}
        <header className="bg-aws-navy text-white shrink-0 shadow-md z-10">
          <div className="flex items-center gap-4 px-4 py-2.5">
            {/* Logo / Title */}
            <div className="flex items-center gap-2 mr-4 shrink-0">
              <div className="w-7 h-7 bg-aws-orange rounded-md flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                </svg>
              </div>
              <div className="hidden sm:block">
                <div className="text-xs font-bold text-aws-orange leading-none">AWS SOA-C03</div>
                <div className="text-xs text-gray-400 leading-none">Exam Reviewer</div>
              </div>
            </div>

            {/* Mode Switcher */}
            <nav className="flex items-center gap-1 flex-1">
              {MODES.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => handleModeChange(mode.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    activeMode === mode.id
                      ? 'bg-aws-orange text-white'
                      : 'text-gray-300 hover:bg-aws-lightnavy hover:text-white'
                  }`}
                >
                  {mode.icon}
                  <span className="hidden md:inline">{mode.label}</span>
                </button>
              ))}
            </nav>

            {/* Overall Progress */}
            <div className="shrink-0 flex items-center gap-2">
              <div className="hidden sm:block text-right">
                <div className="text-xs text-gray-400 leading-none">Progress</div>
                <div className="text-xs font-bold text-aws-orange leading-none mt-0.5">
                  {totalStudied}/{totalSlides}
                </div>
              </div>
              <div className="w-16 bg-aws-lightnavy rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${overallPct}%`,
                    backgroundColor: overallPct === 100 ? '#22c55e' : '#FF9900',
                  }}
                />
              </div>
              <span className="text-xs text-gray-300 w-8 text-right">{overallPct}%</span>
            </div>
          </div>
        </header>

        {/* Content area */}
        <main className="flex-1 overflow-y-auto">
          {activeMode === 'browse' && (
            <TopicBrowser
              sections={sections}
              activeSection={activeSection}
              highlightedSlide={highlightedSlide}
              progress={progress}
              onToggleStudied={handleToggleStudied}
            />
          )}
          {activeMode === 'flashcards' && (
            <Flashcard
              allSlides={allSlides}
              sections={sections}
              progress={progress}
              onToggleStudied={handleToggleStudied}
            />
          )}
          {activeMode === 'quiz' && (
            <QuizMode
              sections={sections}
            />
          )}
          {activeMode === 'search' && (
            <SearchView
              allSlides={allSlides}
              sections={sections}
              onNavigateTo={handleNavigateTo}
            />
          )}
          {activeMode === 'quickref' && (
            <QuickReference
              allSlides={allSlides}
              sections={sections}
            />
          )}
        </main>
      </div>
    </div>
  );
}
