import React, { useRef, useEffect, useState } from 'react';
import { renderContent } from '../utils/renderMarkdown.jsx';
import EditPanel from './EditPanel.jsx';

function SlideCard({ slide, studied, onToggleStudied, highlighted, onEdit }) {
  const ref = useRef(null);

  useEffect(() => {
    if (highlighted && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [highlighted]);

  return (
    <div
      ref={ref}
      id={`slide-${slide.id}`}
      className={`bg-white rounded-xl shadow-sm border transition-all duration-200 ${
        highlighted ? 'border-aws-orange shadow-md ring-2 ring-aws-orange ring-opacity-50' : 'border-gray-200 hover:shadow-md'
      } ${studied ? 'border-l-4 border-l-green-500' : ''}`}
    >
      {/* Card Header */}
      <div className="flex items-start justify-between p-4 pb-2">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-aws-navy text-base leading-tight">{slide.title}</h3>
        </div>
        <div className="flex items-center gap-1.5 shrink-0 ml-3">
          {/* Edit button — dev only (requires Vite server for file writes) */}
          {import.meta.env.DEV && <button
            onClick={() => onEdit(slide)}
            className="flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-full font-medium bg-gray-100 text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            title="Edit this slide"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <span className="hidden sm:inline">Edit</span>
          </button>}

          {/* Studied toggle */}
          <button
            onClick={() => onToggleStudied(slide.id)}
            className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
              studied
                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
            title={studied ? 'Mark as not studied' : 'Mark as studied'}
          >
            {studied ? (
              <>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Studied
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mark Studied
              </>
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-4">
        <div className="text-sm text-gray-700 bg-gray-50 rounded-lg p-3 max-h-128 overflow-y-auto border border-gray-100 space-y-0.5 scrollbar-thin">
          {renderContent(slide.content)}
        </div>
      </div>
    </div>
  );
}

function TopicBrowser({ sections, activeSection, highlightedSlide, progress, onToggleStudied }) {
  const [editingSlide, setEditingSlide] = useState(null);

  const section = sections[activeSection];
  if (!section) return <div className="p-8 text-gray-500">Select a section from the sidebar.</div>;

  const studiedCount = section.slides.filter((s) => progress.has(s.id)).length;

  return (
    <>
      <div className="p-6 max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-aws-navy mb-1">{section.title}</h2>
          <p className="text-sm text-gray-500">
            {studiedCount} of {section.slides.length} topics studied
          </p>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: `${section.slides.length === 0 ? 0 : (studiedCount / section.slides.length) * 100}%`,
                backgroundColor: studiedCount === section.slides.length && section.slides.length > 0 ? '#22c55e' : '#FF9900',
              }}
            />
          </div>
        </div>

        {/* Slides */}
        {section.slides.length === 0 ? (
          <div className="bg-white rounded-xl p-8 text-center text-gray-400 border border-gray-200">
            No slides available for this section yet.
          </div>
        ) : (
          <div className="space-y-4">
            {section.slides.map((slide) => (
              <SlideCard
                key={slide.id}
                slide={slide}
                studied={progress.has(slide.id)}
                onToggleStudied={onToggleStudied}
                highlighted={slide.id === highlightedSlide}
                onEdit={setEditingSlide}
              />
            ))}
          </div>
        )}
      </div>

      {/* Edit panel modal */}
      {editingSlide && (
        <EditPanel
          slide={editingSlide}
          onClose={() => setEditingSlide(null)}
        />
      )}
    </>
  );
}

export default TopicBrowser;
