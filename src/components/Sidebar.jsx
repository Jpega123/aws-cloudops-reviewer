import React, { useState } from 'react';
import ProgressBar from './ProgressBar.jsx';

function Sidebar({ sections, progress, activeSection, activeSlide, onSectionSelect, collapsed, onToggle }) {
  const [expandedSections, setExpandedSections] = useState(new Set());

  const toggleSection = (id) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const getSectionProgress = (section) => {
    const studied = section.slides.filter((s) => progress.has(s.id)).length;
    return { studied, total: section.slides.length };
  };

  return (
    <aside
      className={`flex flex-col bg-aws-navy text-white transition-all duration-300 ${
        collapsed ? 'w-14' : 'w-72'
      } min-h-screen`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-aws-lightnavy">
        {!collapsed && (
          <span className="font-bold text-aws-orange text-sm truncate">SOA-C03 Sections</span>
        )}
        <button
          onClick={onToggle}
          className="text-gray-400 hover:text-white transition-colors p-1 rounded ml-auto"
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {collapsed ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7M19 19l-7-7 7-7" />
            )}
          </svg>
        </button>
      </div>

      {/* Sections List */}
      <div className="flex-1 overflow-y-auto py-2 scrollbar-dark">
        {sections.map((section) => {
          const { studied, total } = getSectionProgress(section);
          const isActive = activeSection === section.id;
          const isExpanded = expandedSections.has(section.id);

          return (
            <div key={section.id}>
              <button
                onClick={() => {
                  onSectionSelect(section.id);
                  if (!collapsed) toggleSection(section.id);
                }}
                className={`w-full text-left px-4 py-2 flex items-center gap-2 transition-colors border-l-4 ${
                  isActive
                    ? 'bg-[#1e3a5f] border-aws-orange text-white'
                    : 'border-transparent hover:bg-aws-lightnavy hover:border-aws-lightnavy text-gray-300 hover:text-white'
                }`}
                title={section.title}
              >
                {collapsed ? (
                  <span className="text-aws-orange font-bold text-xs w-6 text-center">
                    {section.id + 1}
                  </span>
                ) : (
                  <>
                    <span className="text-aws-orange font-bold text-xs w-5 shrink-0">
                      {section.id + 1}
                    </span>
                    <span className="text-sm flex-1 text-left truncate leading-tight">
                      {section.title.replace(/^\d+\.\s*/, '')}
                    </span>
                    <div className="flex items-center gap-1 shrink-0">
                      {studied === total && total > 0 ? (
                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <span className="text-xs text-gray-400">{studied}/{total}</span>
                      )}
                      <svg
                        className={`w-3 h-3 text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </>
                )}
              </button>

              {/* Progress bar per section */}
              {!collapsed && (
                <div className="px-4 pb-1">
                  <ProgressBar value={studied} max={total} className="flex items-center" dark />
                </div>
              )}

              {/* Expanded slides list */}
              {!collapsed && isExpanded && (
                <div className="pl-6 pr-2 pb-2 bg-black bg-opacity-20">
                  {section.slides.map((slide) => {
                    const isActiveSlide = activeSlide === slide.id;
                    return (
                      <button
                        key={slide.id}
                        onClick={() => onSectionSelect(section.id, slide.id)}
                        className={`w-full text-left py-1.5 px-2 text-xs flex items-center gap-1.5 rounded transition-colors border-l-2 ${
                          isActiveSlide
                            ? 'bg-aws-orange bg-opacity-20 border-aws-orange text-white font-medium'
                            : 'border-transparent text-gray-400 hover:text-white hover:bg-aws-lightnavy'
                        }`}
                      >
                        {progress.has(slide.id) ? (
                          <svg className="w-3 h-3 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <span className="w-3 shrink-0" />
                        )}
                        <span className="truncate">{slide.title}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
