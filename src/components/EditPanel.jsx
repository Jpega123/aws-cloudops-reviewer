import React, { useState, useCallback, useRef } from 'react';
import { renderContent } from '../utils/renderMarkdown.jsx';

function EditPanel({ slide, onClose }) {
  const [content, setContent] = useState(slide.content);
  const [status, setStatus] = useState('idle'); // 'idle' | 'saving' | 'saved' | 'error'
  const [errorMsg, setErrorMsg] = useState('');
  const [uploading, setUploading] = useState(false);
  const textareaRef = useRef(null);

  const handleSave = useCallback(async () => {
    setStatus('saving');
    setErrorMsg('');
    try {
      const res = await fetch('/api/save-slide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slideTitle: slide.title,
          sectionId: slide.sectionId,
          slideIndex: slide.slideIndex,
          content,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Save failed');
      setStatus('saved');
      // HMR will reload the module; close the panel after a short delay
      setTimeout(() => onClose(), 800);
    } catch (e) {
      setStatus('error');
      setErrorMsg(e.message);
    }
  }, [slide.title, content, onClose]);

  const handlePaste = useCallback(async (e) => {
    const items = Array.from(e.clipboardData?.items || []);
    const imageItem = items.find(item => item.type.startsWith('image/'));
    if (!imageItem) return;
    e.preventDefault();
    setUploading(true);
    try {
      const blob = imageItem.getAsFile();
      const ext = imageItem.type.split('/')[1] || 'png';
      const filename = `screenshot-${Date.now()}.${ext}`;
      const base64 = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.readAsDataURL(blob);
      });
      const res = await fetch('/api/upload-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename, base64 }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      const textarea = textareaRef.current;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const md = `![screenshot](${data.url})`;
      setContent(prev => prev.slice(0, start) + md + prev.slice(end));
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + md.length;
        textarea.focus();
      }, 0);
    } catch (err) {
      setErrorMsg(`Image upload failed: ${err.message}`);
      setStatus('error');
    } finally {
      setUploading(false);
    }
  }, []);

  const hasChanges = content !== slide.content;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div
        className="bg-white rounded-xl shadow-2xl flex flex-col"
        style={{ width: '90vw', height: '85vh', maxWidth: '1200px' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 bg-aws-navy text-white rounded-t-xl shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            <svg className="w-4 h-4 text-aws-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <span className="font-semibold text-sm truncate">{slide.title}</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1 rounded shrink-0"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Split panes */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left – markdown editor */}
          <div className="flex flex-col w-1/2 border-r border-gray-200">
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 border-b border-gray-200 shrink-0">
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Markdown</span>
              {uploading && (
                <span className="ml-auto text-xs text-blue-500 font-medium animate-pulse">uploading image…</span>
              )}
              {!uploading && hasChanges && (
                <span className="ml-auto text-xs text-aws-orange font-medium">● unsaved</span>
              )}
            </div>
            <textarea
              ref={textareaRef}
              className="flex-1 p-4 font-mono text-sm text-gray-800 resize-none focus:outline-none leading-relaxed"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
                if (status === 'saved' || status === 'error') setStatus('idle');
              }}
              onPaste={handlePaste}
              spellCheck={false}
              placeholder="Enter markdown content… (paste a screenshot to upload it)"
            />
          </div>

          {/* Right – live preview */}
          <div className="flex flex-col w-1/2 overflow-hidden">
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 border-b border-gray-200 shrink-0">
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Preview</span>
            </div>
            <div className="flex-1 overflow-y-auto p-4 text-sm text-gray-700 space-y-1 scrollbar-thin">
              {renderContent(content)}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-gray-200 bg-gray-50 rounded-b-xl shrink-0">
          <div className="text-xs text-gray-400 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Saves directly to <code className="bg-gray-200 px-1 rounded text-gray-600">aws_soa_c03_study_guide.md</code>
          </div>

          <div className="flex items-center gap-3">
            {status === 'error' && (
              <span className="text-xs text-red-500">{errorMsg}</span>
            )}
            {status === 'saved' && (
              <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Saved — reloading…
              </span>
            )}
            <button
              onClick={onClose}
              className="px-4 py-1.5 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={status === 'saving' || status === 'saved' || !hasChanges}
              className="px-4 py-1.5 text-sm font-medium bg-aws-orange text-white rounded-lg hover:bg-orange-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
            >
              {status === 'saving' ? (
                <>
                  <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Saving…
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                  </svg>
                  Save to .md
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPanel;
