import React, { useState, useEffect } from 'react';
import { renderContent } from '../utils/renderMarkdown.jsx';

function Flashcard({ allSlides, sections, progress, onToggleStudied }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  // Reset flip when index changes
  useEffect(() => {
    setFlipped(false);
  }, [currentIndex]);

  if (!allSlides || allSlides.length === 0) {
    return <div className="p-8 text-gray-500">No slides available.</div>;
  }

  const slide = allSlides[currentIndex];
  const section = sections[slide.sectionId];
  const studied = progress.has(slide.id);
  const total = allSlides.length;

  const goNext = () => {
    setCurrentIndex((i) => (i + 1) % total);
  };

  const goPrev = () => {
    setCurrentIndex((i) => (i - 1 + total) % total);
  };

  const goRandom = () => {
    const rand = Math.floor(Math.random() * total);
    setCurrentIndex(rand);
  };

  return (
    <div className="p-6 flex flex-col items-center min-h-full">
      {/* Counter and controls */}
      <div className="w-full max-w-2xl mb-4 flex items-center justify-between">
        <span className="text-sm text-gray-500 font-medium">
          Card <span className="text-aws-navy font-bold">{currentIndex + 1}</span> of {total}
        </span>
        <div className="flex gap-2">
          <button
            onClick={goRandom}
            className="flex items-center gap-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1.5 rounded-full transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Random
          </button>
          <button
            onClick={() => onToggleStudied(slide.id)}
            className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-full transition-colors ${
              studied
                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {studied ? 'Studied ✓' : 'Mark Studied'}
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-2xl mb-6">
        <div className="bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-aws-orange h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Flashcard */}
      <div className="w-full max-w-2xl card-flip-container" style={{ height: '420px' }}>
        <div
          className={`card-flip-inner cursor-pointer ${flipped ? 'flipped' : ''}`}
          onClick={() => setFlipped(!flipped)}
          style={{ height: '100%' }}
        >
          {/* Front */}
          <div className="card-front bg-aws-navy flex flex-col items-center justify-center p-8 shadow-xl">
            <div className="text-aws-orange text-xs font-bold uppercase tracking-wider mb-4">
              {section?.title || 'Section'}
            </div>
            <h2 className="text-white text-2xl font-bold text-center leading-tight mb-6">
              {slide.title}
            </h2>
            <div className="flex items-center gap-2 text-gray-400 text-sm mt-auto">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
              </svg>
              Click to reveal
            </div>
          </div>

          {/* Back */}
          <div className="card-back bg-white flex flex-col p-6 shadow-xl overflow-hidden">
            <div className="text-aws-orange text-xs font-bold uppercase tracking-wider mb-2">
              {section?.title || 'Section'}
            </div>
            <h3 className="text-aws-navy font-semibold text-lg mb-3">{slide.title}</h3>
            <div className="flex-1 overflow-y-auto text-sm text-gray-700 bg-gray-50 rounded-lg p-3 border border-gray-100 space-y-0.5 scrollbar-thin">
              {renderContent(slide.content) || <span className="text-gray-400">No content available.</span>}
            </div>
            <div className="mt-3 text-center text-gray-400 text-xs">
              Click to flip back
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-6 mt-8">
        <button
          onClick={goPrev}
          className="flex items-center gap-2 bg-aws-navy text-white px-6 py-2.5 rounded-lg hover:bg-aws-lightnavy transition-colors font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Prev
        </button>

        <span className="text-sm text-gray-400 font-mono">
          {currentIndex + 1} / {total}
        </span>

        <button
          onClick={goNext}
          className="flex items-center gap-2 bg-aws-navy text-white px-6 py-2.5 rounded-lg hover:bg-aws-lightnavy transition-colors font-medium"
        >
          Next
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Hint text */}
      <p className="mt-4 text-xs text-gray-400">Tip: Click the card to flip • Use arrows to navigate</p>
    </div>
  );
}

export default Flashcard;
