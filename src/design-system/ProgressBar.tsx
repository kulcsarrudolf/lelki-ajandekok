import React from "react";

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, className = "" }) => {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className={`w-full space-y-2 ${className}`}>
      <div className="flex justify-between items-center font-body text-sm">
        <span className="text-muted-foreground font-medium">
          Kérdés {current} / {total}
        </span>
        <span className="text-primary font-bold">{percentage}%</span>
      </div>

      <div
        className="w-full h-2.5 bg-progress-track rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
