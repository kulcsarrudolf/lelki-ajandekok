import React from "react";

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

/**
 * Progress bar component for showing quiz completion progress
 */
const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, className = "" }) => {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">
          Kérdés {current} / {total}
        </span>
        <span className="text-sm font-medium text-blue-600">
          {percentage}%
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-blue-500 h-3 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
