import React from 'react';
import { Minus, Plus, Users } from 'lucide-react';

interface ServingAdjusterProps {
  servings: number;
  onServingsChange: (newServings: number) => void;
  minServings?: number;
  maxServings?: number;
}

export const ServingAdjuster: React.FC<ServingAdjusterProps> = ({
  servings,
  onServingsChange,
  minServings = 1,
  maxServings = 16,
}) => {
  const handleDecrement = () => {
    if (servings > minServings) {
      onServingsChange(servings - 1);
    }
  };

  const handleIncrement = () => {
    if (servings < maxServings) {
      onServingsChange(servings + 1);
    }
  };

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--border-light)',
        padding: '4px 8px',
        borderRadius: 'var(--radius-pill)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <Users size={16} color="var(--brand-primary)" style={{ marginLeft: '4px' }} />
      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
        Servings:
      </span>

      <button
        onClick={handleDecrement}
        disabled={servings <= minServings}
        className="btn-ghost"
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--bg-main)',
          opacity: servings <= minServings ? 0.4 : 1,
        }}
        aria-label="Decrease servings"
      >
        <Minus size={14} />
      </button>

      <span
        style={{
          minWidth: '24px',
          textAlign: 'center',
          fontWeight: 700,
          fontSize: '0.9375rem',
          color: 'var(--text-primary)',
        }}
      >
        {servings}
      </span>

      <button
        onClick={handleIncrement}
        disabled={servings >= maxServings}
        className="btn-ghost"
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--bg-main)',
          opacity: servings >= maxServings ? 0.4 : 1,
        }}
        aria-label="Increase servings"
      >
        <Plus size={14} />
      </button>
    </div>
  );
};
