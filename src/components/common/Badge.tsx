import React from 'react';
import { Sparkles, Check, Compass, Flame } from 'lucide-react';

interface MatchBadgeProps {
  score: number;
  missingCount?: number;
}

export const MatchBadge: React.FC<MatchBadgeProps> = ({ score, missingCount = 0 }) => {
  // 100% Ready to cook
  if (score === 100 && missingCount === 0) {
    return (
      <span className="badge badge-match-100">
        <Check size={13} strokeWidth={2.6} />
        100% Match • Ready
      </span>
    );
  }

  // 90%+ Strong match
  if (score >= 90) {
    return (
      <span className="badge badge-match-90">
        <Sparkles size={13} strokeWidth={2.4} />
        {score}% Match {missingCount > 0 ? `• Missing ${missingCount}` : ''}
      </span>
    );
  }

  // 70% to 89% and only 1 or 2 missing items (Almost There)
  if (score >= 70 && missingCount <= 2) {
    return (
      <span className="badge badge-match-almost">
        <Flame size={13} strokeWidth={2.4} />
        {score}% Match {missingCount > 0 ? `• Missing ${missingCount}` : ''}
      </span>
    );
  }

  // Discovery / Lower Match
  return (
    <span className="badge badge-match-explore">
      <Compass size={13} strokeWidth={2.2} />
      {score}% Match {missingCount > 0 ? `• Missing ${missingCount}` : ''}
    </span>
  );
};

export const DietaryBadge: React.FC<{ label: string }> = ({ label }) => {
  return (
    <span className="badge badge-dietary">
      {label}
    </span>
  );
};
