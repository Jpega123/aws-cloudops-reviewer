import React from 'react';

const LIMITS_REGEX = /(\d+[\s,]*(?:GB|TB|MB|ms|Gbps|instances|partitions|rules|targets|%|seconds|minutes|hours|days|months|years|KB|IOPS|vCPUs|AZ|Availability Zone)s?)/gi;
const EXAM_TIP_REGEX = /\b(NOTE:|IMPORTANT:|EXAM TIP:?|Key fact:|Remember:)/gi;

function highlightText(text) {
  const combined = new RegExp(`(${LIMITS_REGEX.source}|${EXAM_TIP_REGEX.source})`, 'gi');
  const parts = [];
  let lastIndex = 0;
  let match;
  combined.lastIndex = 0;

  while ((match = combined.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    const isTip = EXAM_TIP_REGEX.test(match[0]);
    EXAM_TIP_REGEX.lastIndex = 0;
    parts.push(
      <mark
        key={match.index}
        className={isTip
          ? 'bg-red-100 text-red-700 font-bold px-0.5 rounded not-italic'
          : 'bg-yellow-100 text-yellow-800 font-semibold px-0.5 rounded'}
      >
        {match[0]}
      </mark>
    );
    lastIndex = combined.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts.length > 0 ? parts : text;
}

function renderInline(text) {
  // Bold **text**
  const boldSplit = text.split(/(\*\*[^*]+\*\*)/g);
  if (boldSplit.length > 1) {
    return boldSplit.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{highlightText(part.slice(2, -2))}</strong>;
      }
      return <span key={i}>{highlightText(part)}</span>;
    });
  }
  // Inline code `text`
  const codeSplit = text.split(/(`[^`]+`)/g);
  if (codeSplit.length > 1) {
    return codeSplit.map((part, i) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={i} className="bg-gray-100 text-aws-navy text-xs px-1 py-0.5 rounded font-mono">{part.slice(1, -1)}</code>;
      }
      return <span key={i}>{highlightText(part)}</span>;
    });
  }
  return highlightText(text);
}

// ── List parsing ──────────────────────────────────────────────────────────────

function getIndent(line) {
  const m = line.match(/^(\s*)/);
  return m ? m[1].length : 0;
}

function isBulletLine(line) {
  return /^[-*•]\s+/.test(line.trim()) && line.trim().length > 0;
}

function isNumberedLine(line) {
  return /^\d+\.\s+/.test(line.trim());
}

// Recursively parse list items at a given base indent level.
// Returns { items: [{ text, children }], nextIdx }
function parseListAt(lines, start, baseIndent) {
  const items = [];
  let i = start;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) { i++; continue; } // blank line inside list block – skip
    if (!isBulletLine(line)) break;  // non-bullet line – stop

    const indent = getIndent(line);

    if (indent < baseIndent) break; // dedented past our level – stop

    if (indent > baseIndent) {
      // Sub-list: attach to last item's children
      if (items.length > 0) {
        const sub = parseListAt(lines, i, indent);
        // Append (not overwrite) so inconsistent indentation (1-space vs 2-space)
        // doesn't wipe out already-collected children
        items[items.length - 1].children.push(...sub.items);
        i = sub.nextIdx;
      } else {
        // Orphaned deeper item – treat as base level
        items.push({ text: trimmed.replace(/^[-*•]\s+/, ''), children: [] });
        i++;
      }
      continue;
    }

    // Same indent → sibling item
    items.push({ text: trimmed.replace(/^[-*•]\s+/, ''), children: [] });
    i++;
  }

  return { items, nextIdx: i };
}

function renderListItems(items, depth = 0) {
  if (!items.length) return null;
  return (
    <ul className={depth === 0 ? 'space-y-1 my-1' : 'space-y-0.5 ml-4 mt-0.5'}>
      {items.map((item, j) => (
        <li key={j} className="flex flex-col gap-0">
          <div className="flex gap-2 items-start">
            <span className={`mt-0.5 shrink-0 font-bold ${depth === 0 ? 'text-aws-orange' : 'text-gray-400'}`}>
              {depth === 0 ? '›' : '–'}
            </span>
            <span>{renderInline(item.text)}</span>
          </div>
          {item.children.length > 0 && renderListItems(item.children, depth + 1)}
        </li>
      ))}
    </ul>
  );
}

// ── Blockquote callout rendering ──────────────────────────────────────────────

const CALLOUT_STYLES = {
  '📌': { bg: 'bg-orange-50', border: 'border-orange-300', text: 'text-orange-800' },
  '⚡': { bg: 'bg-yellow-50', border: 'border-yellow-300', text: 'text-yellow-800' },
  '💡': { bg: 'bg-blue-50',   border: 'border-blue-300',   text: 'text-blue-800'   },
};

function renderCallout(lines) {
  const text = lines.map(l => l.replace(/^>\s?/, '')).join(' ').trim();
  const firstChar = [...text][0]; // emoji-safe first character
  const style = CALLOUT_STYLES[firstChar] || { bg: 'bg-gray-50', border: 'border-gray-300', text: 'text-gray-700' };
  return (
    <div className={`flex gap-2 items-start rounded-lg border-l-4 px-3 py-2 my-1 ${style.bg} ${style.border} ${style.text}`}>
      <span className="text-sm leading-relaxed">{renderInline(text)}</span>
    </div>
  );
}

// ── Table rendering ───────────────────────────────────────────────────────────

function renderTable(rows) {
  if (rows.length < 2) return null;

  const parseRow = (row) =>
    row.split('|').map(c => c.trim()).filter((_, i, arr) => i > 0 && i < arr.length - 1 || (arr[0] !== '' || arr[arr.length - 1] !== ''));

  const headers = parseRow(rows[0]);
  const body = rows.slice(2); // skip separator row

  return (
    <div className="overflow-x-auto my-2 rounded-lg border border-gray-200">
      <table className="w-full text-xs text-left">
        <thead>
          <tr className="bg-aws-navy text-white">
            {headers.map((h, i) => (
              <th key={i} className="px-3 py-2 font-semibold">{renderInline(h)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, i) => {
            const cells = parseRow(row);
            return (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                {cells.map((cell, j) => (
                  <td key={j} className="px-3 py-1.5 border-t border-gray-100">{renderInline(cell)}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ── Main renderer ─────────────────────────────────────────────────────────────

export function renderContent(content) {
  if (!content) return null;
  const lines = content.split('\n');
  const output = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) { i++; continue; }

    // Blockquote callout (> ...)
    if (trimmed.startsWith('> ') || trimmed === '>') {
      const block = [];
      while (i < lines.length && (lines[i].trim().startsWith('>') || lines[i].trim() === '')) {
        if (lines[i].trim() !== '') block.push(lines[i]);
        i++;
      }
      output.push(<div key={`bq-${output.length}`}>{renderCallout(block)}</div>);
      continue;
    }

    // Markdown table (| col | col |)
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const tableRows = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableRows.push(lines[i].trim());
        i++;
      }
      const rendered = renderTable(tableRows);
      if (rendered) output.push(<div key={`tbl-${output.length}`}>{rendered}</div>);
      continue;
    }

    // Bullet list – use indentation-aware parser
    if (isBulletLine(line)) {
      const baseIndent = getIndent(line);
      const { items, nextIdx } = parseListAt(lines, i, baseIndent);
      i = nextIdx;
      output.push(<div key={`ul-${output.length}`}>{renderListItems(items)}</div>);
      continue;
    }

    // Numbered list
    if (isNumberedLine(line)) {
      const items = [];
      while (i < lines.length && isNumberedLine(lines[i])) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i++;
      }
      output.push(
        <ol key={`ol-${output.length}`} className="space-y-1 my-1 list-decimal list-inside">
          {items.map((item, j) => (
            <li key={j} className="pl-1">{renderInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Plain paragraph
    output.push(
      <p key={`p-${output.length}`} className="my-0.5 leading-relaxed">
        {renderInline(trimmed)}
      </p>
    );
    i++;
  }

  return output;
}
