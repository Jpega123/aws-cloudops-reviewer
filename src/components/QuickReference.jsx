import React, { useMemo, useState } from 'react';
import { renderContent } from '../utils/renderMarkdown.jsx';

const LIMITS_REGEX = /\d+[\s,]*(?:GB|TB|MB|ms|Gbps|instances|partitions|rules|targets|%|seconds|minutes|hours|days|months|years|KB|IOPS|vCPUs)/gi;
const KEYWORD_REGEX = /\b(?:NOTE:|IMPORTANT:|EXAM TIP:?)\b/gi;

function hasHighlightableContent(slide) {
  return LIMITS_REGEX.test(slide.content) || KEYWORD_REGEX.test(slide.content);
}

function QuickReference({ allSlides, sections }) {
  const [filter, setFilter] = useState('all'); // 'all' | 'limits' | 'tips'
  const [sectionFilter, setSectionFilter] = useState('all');

  const filtered = useMemo(() => {
    let slides = allSlides.filter((slide) => {
      if (filter === 'limits') return LIMITS_REGEX.test(slide.content);
      if (filter === 'tips') return KEYWORD_REGEX.test(slide.content);
      return hasHighlightableContent(slide);
    });

    if (sectionFilter !== 'all') {
      const sid = parseInt(sectionFilter);
      slides = slides.filter((s) => s.sectionId === sid);
    }

    return slides;
  }, [allSlides, filter, sectionFilter]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-aws-navy mb-1">Quick Reference</h2>
      <p className="text-sm text-gray-500 mb-5">
        Slides containing key numbers, limits, and exam tips — highlighted for fast review.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-5">
        {/* Type filter */}
        <div className="flex rounded-lg overflow-hidden border border-gray-200">
          {[
            { value: 'all', label: 'All' },
            { value: 'limits', label: 'Numbers & Limits' },
            { value: 'tips', label: 'Exam Tips' },
          ].map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                filter === value
                  ? 'bg-aws-orange text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Section filter */}
        <select
          value={sectionFilter}
          onChange={(e) => setSectionFilter(e.target.value)}
          className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:ring-2 focus:ring-aws-orange focus:border-transparent"
        >
          <option value="all">All Sections</option>
          {sections.map((s, i) => (
            <option key={i} value={i}>
              {s.title.replace(/^\d+\.\s*/, '')}
            </option>
          ))}
        </select>

        <span className="text-sm text-gray-400 ml-auto">
          {filtered.length} slide{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="font-medium">No slides match the current filter.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((slide) => {
            const section = sections[slide.sectionId];

            return (
              <div
                key={slide.id}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50 border-b border-gray-100">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-aws-orange text-xs font-bold uppercase tracking-wider shrink-0">
                      {section?.title?.replace(/^\d+\.\s*/, '') || 'Unknown'}
                    </span>
                    <span className="text-gray-300 text-xs">›</span>
                    <span className="text-aws-navy text-sm font-semibold truncate">
                      {slide.title}
                    </span>
                  </div>
                  <div className="flex gap-1 shrink-0 ml-3">
                    {LIMITS_REGEX.test(slide.content) && (
                      <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded-full font-medium">
                        Limits
                      </span>
                    )}
                    {KEYWORD_REGEX.test(slide.content) && (
                      <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-medium">
                        Tip
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="px-4 py-3 text-sm text-gray-700 bg-white max-h-56 overflow-y-auto space-y-0.5 scrollbar-thin">
                  {renderContent(slide.content)}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default QuickReference;
