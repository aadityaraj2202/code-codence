import React from "react";

const ProgressBar = ({ completed, total, label, showPercent = true }) => {
  const safeTotal = total > 0 ? total : 1;
  const percent = Math.min(Math.round((completed / safeTotal) * 100), 100);

  return (
    <div className="progress-bar-wrapper">
      {label && (
        <div className="progress-label">
          <span>{label}</span>
          {showPercent && <span className="progress-percent">{percent}%</span>}
        </div>
      )}
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <div className="progress-detail">
        {completed} / {total} lessons completed
      </div>
    </div>
  );
};

export default ProgressBar;
