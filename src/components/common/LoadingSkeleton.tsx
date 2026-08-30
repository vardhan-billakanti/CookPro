import React from 'react';

export const RecipeCardSkeleton: React.FC = () => {
  return (
    <div className="recipe-card" aria-hidden="true">
      <div className="skeleton" style={{ height: '220px', width: '100%' }} />
      <div className="recipe-card-body">
        <div className="skeleton" style={{ height: '14px', width: '40%', marginBottom: '12px' }} />
        <div className="skeleton" style={{ height: '22px', width: '80%', marginBottom: '10px' }} />
        <div className="skeleton" style={{ height: '14px', width: '100%', marginBottom: '6px' }} />
        <div className="skeleton" style={{ height: '14px', width: '70%', marginBottom: '20px' }} />
        <div className="skeleton" style={{ height: '30px', width: '100%', marginTop: 'auto' }} />
      </div>
    </div>
  );
};

export const RecipeGridSkeleton: React.FC<{ count?: number }> = ({ count = 6 }) => {
  return (
    <div className="recipe-grid">
      {Array.from({ length: count }).map((_, i) => (
        <RecipeCardSkeleton key={i} />
      ))}
    </div>
  );
};
