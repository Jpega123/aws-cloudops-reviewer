import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

// ── Highlight preprocessing ───────────────────────────────────────────────────
// Runs BEFORE markdown parsing. Wraps numbers/limits and exam-tip keywords in
// <mark> tags so rehype-raw can render them as styled elements.

const LIMITS_REGEX = /(\d+[\s,]*(?:GB|TB|MB|ms|Gbps|instances|partitions|rules|targets|%|seconds|minutes|hours|days|months|years|KB|IOPS|vCPUs|AZ|Availability Zone)s?)/gi;
const EXAM_TIP_REGEX = /\b(NOTE:|IMPORTANT:|EXAM TIP:?|Key fact:|Remember:)/gi;

function addHighlights(md) {
  // Skip code fences and inline code so we don't highlight inside them
  const parts = md.split(/(```[\s\S]*?```|`[^`\n]+`)/g);
  return parts.map((part, i) => {
    if (i % 2 === 1) return part; // inside a code block — leave as-is
    return part
      .replace(LIMITS_REGEX, '<mark class="hl-num">$1</mark>')
      .replace(EXAM_TIP_REGEX, '<mark class="hl-tip">$1</mark>');
  }).join('');
}

// ── Callout styles (blockquotes starting with an emoji) ───────────────────────
const CALLOUT_STYLES = {
  '📌': { bg: 'bg-orange-50', border: 'border-orange-300', text: 'text-orange-900' },
  '⚡': { bg: 'bg-yellow-50', border: 'border-yellow-300', text: 'text-yellow-900' },
  '💡': { bg: 'bg-blue-50',   border: 'border-blue-300',   text: 'text-blue-900'   },
};

function extractRawText(node) {
  if (!node) return '';
  if (node.type === 'text') return node.value || '';
  if (node.children) return node.children.map(extractRawText).join('');
  return '';
}

// ── List context (react-markdown v10 removed ordered/index from li props) ─────
const ListCtx = React.createContext({ ordered: false, index: 0 });

function makeListChildren(children, ordered) {
  let counter = 0;
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    const idx = counter++;
    return (
      <ListCtx.Provider key={idx} value={{ ordered, index: idx }}>
        {child}
      </ListCtx.Provider>
    );
  });
}

// ── Custom components ─────────────────────────────────────────────────────────
const components = {
  // Paragraphs
  p: ({ children }) => (
    <p className="my-0.5 leading-relaxed">{children}</p>
  ),

  // Unordered list
  ul: ({ children }) => (
    <ul className="space-y-1 my-1">{makeListChildren(children, false)}</ul>
  ),

  // Ordered list
  ol: ({ children }) => (
    <ol className="space-y-1.5 my-1">{makeListChildren(children, true)}</ol>
  ),

  // List item — reads ordered + index from context (v10 removed them as props)
  li: ({ children }) => {
    const { ordered, index } = React.useContext(ListCtx);
    return (
      <li className="flex flex-col gap-0">
        <div className="flex gap-2 items-start">
          <span className="text-aws-orange font-bold mt-0.5 shrink-0 min-w-5 text-right">
            {ordered ? `${index + 1}.` : '›'}
          </span>
          <span className="flex-1 min-w-0">{children}</span>
        </div>
      </li>
    );
  },

  // Blockquote → styled callout box based on first emoji
  blockquote: ({ children, node }) => {
    const rawText = extractRawText(node);
    const firstChar = [...rawText.trim()][0];
    const style = CALLOUT_STYLES[firstChar] || {
      bg: 'bg-gray-50', border: 'border-gray-300', text: 'text-gray-700',
    };
    return (
      <div className={`rounded-lg border-l-4 px-3 py-2 my-1.5 text-sm ${style.bg} ${style.border} ${style.text} [&>p]:my-0`}>
        {children}
      </div>
    );
  },

  // Tables (remark-gfm)
  table: ({ children }) => (
    <div className="overflow-x-auto my-2 rounded-lg border border-gray-200">
      <table className="w-full text-xs text-left">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-aws-navy text-white">{children}</thead>
  ),
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children, isHeader }) => (
    <tr className={isHeader ? '' : 'even:bg-gray-50'}>{children}</tr>
  ),
  th: ({ children }) => (
    <th className="px-3 py-2 font-semibold text-left">{children}</th>
  ),
  td: ({ children }) => (
    <td className="px-3 py-1.5 border-t border-gray-100">{children}</td>
  ),

  // Inline code
  code: ({ inline, children }) =>
    inline ? (
      <code className="bg-gray-100 text-aws-navy text-xs px-1 py-0.5 rounded font-mono">
        {children}
      </code>
    ) : (
      <code>{children}</code>
    ),

  // Highlighted mark tags injected by addHighlights()
  mark: ({ className, children }) => (
    <mark
      className={
        className === 'hl-tip'
          ? 'bg-red-100 text-red-700 font-bold px-0.5 rounded not-italic'
          : 'bg-yellow-100 text-yellow-800 font-semibold px-0.5 rounded'
      }
    >
      {children}
    </mark>
  ),

  // Horizontal rule — suppress (used as section dividers in .md)
  hr: () => null,
};

// ── Public API ────────────────────────────────────────────────────────────────
export function renderContent(content) {
  if (!content) return null;
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={components}
    >
      {addHighlights(content)}
    </ReactMarkdown>
  );
}
