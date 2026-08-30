import React from 'react';
import { Clock, ChefHat, Bookmark, Star, Check } from 'lucide-react';
import { Recipe, RecipeMatchResult } from '../../types';
import { useApp } from '../../context/AppContext';
import { MatchBadge } from '../common/Badge';
import { RecipeImage } from '../common/RecipeImage';

interface RecipeCardProps {
  matchResult?: RecipeMatchResult;
  recipe?: Recipe;
  showMatchInfo?: boolean;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  matchResult,
  recipe: propRecipe,
  showMatchInfo = true,
}) => {
  const { openRecipeDetail, isRecipeSaved, toggleSaveRecipe, selectedIngredients } = useApp();

  const recipe = matchResult?.recipe || propRecipe;
  if (!recipe) return null;

  const saved = isRecipeSaved(recipe.id);
  const matchScore = matchResult?.matchScore;
  const missingCount = matchResult?.missingCount ?? 0;
  const missingIngredients = matchResult?.missingIngredients ?? [];

  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleSaveRecipe(recipe.id);
  };

  return (
    <article
      className="recipe-card"
      onClick={() => openRecipeDetail(recipe)}
      tabIndex={0}
      role="button"
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openRecipeDetail(recipe);
        }
      }}
      aria-label={`View recipe for ${recipe.title}`}
    >
      {/* Media Box with 4:3 Aspect Ratio */}
      <div className="recipe-card-media">
        <RecipeImage
          src={recipe.image}
          alt={recipe.title}
          cuisine={recipe.cuisine}
          aspectRatio="4/3"
        />

        {/* Top Badges */}
        <div className="card-top-badges">
          {showMatchInfo && matchScore !== undefined && selectedIngredients.length > 0 ? (
            <MatchBadge score={matchScore} missingCount={missingCount} />
          ) : (
            <span className="badge badge-dietary" style={{ backgroundColor: 'rgba(255,255,255,0.92)' }}>
              {recipe.cuisine}
            </span>
          )}
        </div>

        {/* Bookmark / Save Action */}
        <button
          className={`card-save-btn ${saved ? 'saved' : ''}`}
          onClick={handleSaveClick}
          aria-label={saved ? 'Remove from My Cookbook' : 'Save to My Cookbook'}
          title={saved ? 'Remove from My Cookbook' : 'Save to My Cookbook'}
        >
          <Bookmark size={18} fill={saved ? 'var(--accent-terracotta)' : 'none'} />
        </button>
      </div>

      {/* Card Content */}
      <div className="recipe-card-body">
        {/* Meta Info */}
        <div className="recipe-card-meta">
          <span className="meta-item">
            <Clock size={14} />
            {recipe.totalTime} mins
          </span>
          <span>•</span>
          <span className="meta-item">
            <ChefHat size={14} />
            {recipe.difficulty}
          </span>
          <span>•</span>
          <span className="meta-item" style={{ color: '#B45309', fontWeight: 600 }}>
            <Star size={13} fill="#F59E0B" stroke="#F59E0B" />
            {recipe.rating.toFixed(1)}
          </span>
        </div>

        {/* Title & Description */}
        <h4 className="recipe-card-title">{recipe.title}</h4>
        <p className="recipe-card-desc">{recipe.description}</p>

        {/* Dynamic Match Information */}
        {showMatchInfo && matchScore !== undefined && selectedIngredients.length > 0 && (
          <div className="recipe-card-match-info">
            {missingCount === 0 ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--brand-primary)', fontWeight: 600 }}>
                <Check size={14} strokeWidth={2.5} />
                <span>You have everything needed!</span>
              </div>
            ) : (
              <div>
                <div className="match-status-row">
                  <span className="match-summary-text">
                    {recipe.ingredients.length - missingCount} of {recipe.ingredients.length} ingredients
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Missing {missingCount}
                  </span>
                </div>
                <div className="missing-ingredients-preview">
                  Missing:{' '}
                  <span className="missing-tag">
                    {missingIngredients.map(i => i.name).slice(0, 3).join(', ')}
                    {missingIngredients.length > 3 ? '...' : ''}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
};
