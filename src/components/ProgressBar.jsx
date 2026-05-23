import React from 'react';

function ProgressBar({ value, max, className = '', showLabel = false, dark = false }) {
  const percentage = max === 0 ? 0 : Math.round((value / max) * 100);

  return (
    <div className={`${className}`}>
      {showLabel && (
        <span className="text-xs text-gray-500 mr-2">
          {value}/{max}
        </span>
      )}
      <div
        className="flex-1 rounded-full h-1.5 overflow-hidden"
        style={{ backgroundColor: dark ? '#1a2535' : '#e5e7eb' }}
      >
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            width: `${percentage}%`,
            backgroundColor: percentage === 100 ? '#22c55e' : '#FF9900',
          }}
        />
      </div>
      {showLabel && (
        <span className="text-xs text-gray-500 ml-2">{percentage}%</span>
      )}
    </div>
  );
}

export default ProgressBar;
