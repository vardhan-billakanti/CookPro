import React, { useMemo } from 'react';
import { Sparkles, Utensils, Compass } from 'lucide-react';
import { IngredientInput } from '../components/recipes/IngredientInput';
import { FilterBar } from '../components/recipes/FilterBar';
import { RecipeGrid } from '../components/recipes/RecipeGrid';
import { useApp } from '../context/AppContext';
import { getAllRecipes } from '../services/recipeService';
import { filterAndSortRecipes } from '../utils/matchingEngine';

export const FindRecipesView: React.FC = () => {
  const { selectedIngredients, filters } = useApp();

  const matchedResults = useMemo(() => {
    const allAvailable = getAllRecipes();
    return filterAndSortRecipes(allAvailable, selectedIngredients, filters);
  }, [selectedIngredients, filters]);

  const canMakeNowCount = matchedResults.filter(r => r.status === 'can_make_now').length;
  const almostThereCount = matchedResults.filter(r => r.status === 'almost_there').length;
  const hasStrongMatches = canMakeNowCount > 0 || almostThereCount > 0;

  return (
    <div style={{ padding: '36px 0 60px' }}>
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <span className="section-tagline">Recipe Match Engine</span>
          <h1 className="section-title">What can you make today?</h1>
          <p className="section-subtitle">
            Add the ingredients in your kitchen to see exact matching recipes tailored to what you already have.
          </p>
        </div>

        {/* Top Ingredient Search & Selected Chips */}
        <div style={{ marginBottom: '32px' }}>
          <IngredientInput showQuickPicks={true} autoFocus={false} />
        </div>

        {/* Results Summary Ribbon */}
        {selectedIngredients.length > 0 && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: hasStrongMatches ? 'var(--brand-primary-light)' : 'var(--bg-surface-subtle)',
              border: `1px solid ${hasStrongMatches ? 'var(--brand-sage-border)' : 'var(--border-light)'}`,
              padding: '14px 20px',
              borderRadius: 'var(--radius-md)',
              marginBottom: '24px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {hasStrongMatches ? (
                <Sparkles size={18} color="var(--brand-primary)" />
              ) : (
                <Compass size={18} color="var(--text-secondary)" />
              )}
              <span
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: hasStrongMatches ? 'var(--brand-primary)' : 'var(--text-primary)',
                }}
              >
                {hasStrongMatches
                  ? `Found ${matchedResults.length} matching recipes (${canMakeNowCount} ready right now, ${almostThereCount} almost there)`
                  : `No strong matches yet for this combination (${matchedResults.length} discovery ideas below)`}
              </span>
            </div>

            {filters.useEverythingIHave && (
              <span className="badge badge-match-almost" style={{ fontSize: '0.78125rem' }}>
                <Utensils size={12} /> Maximizing pantry ingredients
              </span>
            )}
          </div>
        )}

        {/* Filter Bar */}
        <FilterBar />

        {/* Segmented Recipe Results Grid */}
        <RecipeGrid results={matchedResults} segmented={selectedIngredients.length > 0} />
      </div>
    </div>
  );
};
