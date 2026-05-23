import React, { useState, useMemo } from 'react';

function highlightText(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-yellow-200 text-yellow-900 rounded px-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

function getSnippet(content, query, length = 200) {
  if (!query) return content.slice(0, length) + (content.length > length ? '...' : '');
  const idx = content.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return content.slice(0, length) + (content.length > length ? '...' : '');
  const start = Math.max(0, idx - 80);
  const end = Math.min(content.length, idx + length - 80);
  const snippet = content.slice(start, end);
  return (start > 0 ? '...' : '') + snippet + (end < content.length ? '...' : '');
}

function SearchView({ allSlides, sections, onNavigateTo }) {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.trim().toLowerCase();
    return allSlides
      .filter(
        (slide) =>
          slide.title.toLowerCase().includes(q) ||
          slide.content.toLowerCase().includes(q)
      )
      .slice(0, 50);
  }, [query, allSlides]);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold text-aws-navy mb-4">Full-Text Search</h2>

      {/* Search input */}
      <div className="relative mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search topics, concepts, limits..."
          autoFocus
          className="w-full pl-10 pr-4 py-3 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:border-aws-orange transition-colors shadow-sm"
        />
        <svg
          className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Results count */}
      {query && (
        <p className="text-sm text-gray-500 mb-4">
          {results.length === 0
            ? 'No results found.'
            : `Found ${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`}
          {results.length === 50 && ' (showing first 50)'}
        </p>
      )}

      {/* Results list */}
      <div className="space-y-3">
        {results.map((slide) => {
          const section = sections[slide.sectionId];
          const snippet = getSnippet(slide.content, query);

          return (
            <button
              key={slide.id}
              onClick={() => onNavigateTo(slide.sectionId, slide.id)}
              className="w-full text-left bg-white border border-gray-200 rounded-xl p-4 hover:border-aws-orange hover:shadow-sm transition-all group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-aws-orange text-xs font-bold uppercase tracking-wider">
                      {section?.title?.replace(/^\d+\.\s*/, '') || 'Unknown Section'}
                    </span>
                  </div>
                  <h3 className="font-semibold text-aws-navy text-sm mb-1.5 group-hover:text-aws-orange transition-colors">
                    {highlightText(slide.title, query)}
                  </h3>
                  {snippet && (
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                      {highlightText(snippet.replace(/^[-*•]\s+/gm, '').replace(/\*\*/g, ''), query)}
                    </p>
                  )}
                </div>
                <svg
                  className="w-4 h-4 text-gray-300 group-hover:text-aws-orange transition-colors shrink-0 mt-1"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          );
        })}
      </div>

      {/* Empty state */}
      {!query && (
        <div className="text-center py-16 text-gray-400">
          <svg className="w-12 h-12 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <p className="font-medium">Start typing to search across all {allSlides.length} topics</p>
          <p className="text-sm mt-1">Try: "EC2 hibernate", "S3 replication", "placement group"</p>
        </div>
      )}
    </div>
  );
}

export default SearchView;
