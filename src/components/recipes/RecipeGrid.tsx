import React from 'react';
import { RecipeMatchResult } from '../../types';
import { RecipeCard } from './RecipeCard';
import { Sparkles, CheckCircle2, Compass, AlertCircle, Info } from 'lucide-react';
import { EmptyState } from '../common/EmptyState';
import { useApp } from '../../context/AppContext';

interface RecipeGridProps {
  results: RecipeMatchResult[];
  segmented?: boolean;
}

export const RecipeGrid: React.FC<RecipeGridProps> = ({ results, segmented = true }) => {
  const { selectedIngredients, clearIngredients } = useApp();

  if (results.length === 0) {
    return (
      <EmptyState
        icon={AlertCircle}
        title="No Matching Recipes Found"
        description="We couldn't find any recipes matching all of your current filters. Try relaxing your dietary filters, increasing cooking time, or adding a few more pantry items."
        actionLabel="Clear Filters"
        onAction={clearIngredients}
      />
    );
  }

  // If user hasn't selected ingredients or segmented is false, show flat grid
  if (!segmented || selectedIngredients.length === 0) {
    return (
      <div className="recipe-grid">
        {results.map(res => (
          <RecipeCard key={res.recipe.id} matchResult={res} showMatchInfo={selectedIngredients.length > 0} />
        ))}
      </div>
    );
  }

  // Segment results strictly based on mathematical match status
  const canMakeNow = results.filter(r => r.status === 'can_make_now');
  const almostThere = results.filter(r => r.status === 'almost_there');
  const exploreMore = results.filter(r => r.status === 'explore_more');

  const hasStrongMatches = canMakeNow.length > 0 || almostThere.length > 0;

  return (
    <div>
      {/* Friendly notice when user ingredients don't yet yield high-confidence matches */}
      {!hasStrongMatches && selectedIngredients.length > 0 && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            marginBottom: '36px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-surface-subtle)',
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Info size={22} />
          </div>
          <div>
            <h4 style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
              No strong matches yet
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Add 1 or 2 more ingredients (like eggs, pasta, or garlic) to find recipes you can cook immediately! Below are recipes that use some of your ingredients.
            </p>
          </div>
        </div>
      )}

      {/* 1. You Can Make Now (100% Match) */}
      {canMakeNow.length > 0 && (
        <section className="recipe-section-block">
          <div className="section-badge-header">
            <span
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'var(--status-match-high-bg)',
                color: 'var(--status-match-high-text)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CheckCircle2 size={18} />
            </span>
            <div>
              <h3>You Can Make Now ({canMakeNow.length})</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                You have 100% of the required ingredients for these meals.
              </p>
            </div>
          </div>

          <div className="recipe-grid">
            {canMakeNow.map(res => (
              <RecipeCard key={res.recipe.id} matchResult={res} />
            ))}
          </div>
        </section>
      )}

      {/* 2. Almost There (Missing 1-2 items, >= 70% Match) */}
      {almostThere.length > 0 && (
        <section className="recipe-section-block">
          <div className="section-badge-header">
            <span
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'var(--status-match-mid-bg)',
                color: 'var(--status-match-mid-text)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Sparkles size={18} />
            </span>
            <div>
              <h3>Almost There ({almostThere.length})</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                Strong matches missing only 1 or 2 ingredients.
              </p>
            </div>
          </div>

          <div className="recipe-grid">
            {almostThere.map(res => (
              <RecipeCard key={res.recipe.id} matchResult={res} />
            ))}
          </div>
        </section>
      )}

      {/* 3. Explore More Recipes */}
      {exploreMore.length > 0 && (
        <section className="recipe-section-block">
          <div className="section-badge-header">
            <span
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-surface-subtle)',
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Compass size={18} />
            </span>
            <div>
              <h3>Explore More Recipes ({exploreMore.length})</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                Browse recipes to plan your next grocery trip or meal prep.
              </p>
            </div>
          </div>

          <div className="recipe-grid">
            {exploreMore.map(res => (
              <RecipeCard key={res.recipe.id} matchResult={res} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
