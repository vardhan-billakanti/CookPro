import React, { useState, useMemo } from 'react';
import {
  ArrowLeft,
  Clock,
  Star,
  Bookmark,
  Share2,
  Play,
  Check,
  Plus,
  ShoppingBag,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ServingAdjuster } from '../components/recipes/ServingAdjuster';
import { DietaryBadge } from '../components/common/Badge';
import { scaleIngredientQuantity } from '../utils/servingScaler';
import { shareRecipe } from '../utils/share';
import { evaluateRecipeMatch } from '../utils/matchingEngine';
import { RECIPES_DATA } from '../data/recipes';
import { RecipeCard } from '../components/recipes/RecipeCard';
import { RecipeImage } from '../components/common/RecipeImage';

export const RecipeDetailView: React.FC = () => {
  const {
    selectedRecipe,
    closeRecipeDetail,
    selectedIngredients,
    isRecipeSaved,
    toggleSaveRecipe,
    addMissingToShoppingList,
    addToShoppingList,
    startCookingMode,
    addToast,
  } = useApp();

  if (!selectedRecipe) return null;

  // Servings adjuster state
  const [servings, setServings] = useState(selectedRecipe.servings || 4);

  // Match evaluation for this recipe
  const matchResult = useMemo(() => {
    return evaluateRecipeMatch(selectedRecipe, selectedIngredients);
  }, [selectedRecipe, selectedIngredients]);

  const saved = isRecipeSaved(selectedRecipe.id);

  // Handle Share
  const handleShare = async () => {
    const res = await shareRecipe(
      selectedRecipe.title,
      `Check out this recipe for ${selectedRecipe.title} on CookPro!`,
      window.location.href
    );
    if (res.method === 'clipboard') {
      addToast('Recipe link copied to clipboard!', 'success');
    } else if (res.success) {
      addToast('Recipe shared successfully!', 'success');
    }
  };

  // Related Recipes (same cuisine or similar difficulty/dietary)
  const relatedRecipes = useMemo(() => {
    return RECIPES_DATA.filter(
      r => r.id !== selectedRecipe.id && (r.cuisine === selectedRecipe.cuisine || r.mealType === selectedRecipe.mealType)
    ).slice(0, 3);
  }, [selectedRecipe]);

  return (
    <div style={{ padding: '24px 0 80px' }}>
      <div className="container">
        {/* Back Button */}
        <button
          onClick={closeRecipeDetail}
          className="btn btn-ghost"
          style={{ marginBottom: '20px', padding: '6px 12px', display: 'inline-flex', gap: '6px' }}
        >
          <ArrowLeft size={18} />
          <span>Back to recipes</span>
        </button>

        {/* Hero Top Media & Summary */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px',
            marginBottom: '40px',
          }}
        >
          {/* Large Hero Image */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 'clamp(280px, 45vw, 440px)',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border-light)',
            }}
          >
            <RecipeImage
              src={selectedRecipe.image}
              alt={selectedRecipe.title}
              cuisine={selectedRecipe.cuisine}
              aspectRatio="auto"
              loading="eager"
            />

            <div
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                display: 'flex',
                gap: '8px',
              }}
            >
              <button
                className="btn btn-secondary btn-icon-only"
                onClick={handleShare}
                aria-label="Share recipe"
                title="Share recipe"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.94)' }}
              >
                <Share2 size={18} />
              </button>
              <button
                className={`btn btn-secondary btn-icon-only ${saved ? 'saved' : ''}`}
                onClick={() => toggleSaveRecipe(selectedRecipe.id)}
                aria-label={saved ? 'Remove from Cookbook' : 'Save to Cookbook'}
                title={saved ? 'Remove from Cookbook' : 'Save to Cookbook'}
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.94)', color: saved ? 'var(--accent-terracotta)' : 'inherit' }}
              >
                <Bookmark size={18} fill={saved ? 'var(--accent-terracotta)' : 'none'} />
              </button>
            </div>
          </div>

          {/* Title & Key Meta Data */}
          <div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
              <span className="badge badge-dietary" style={{ fontWeight: 600 }}>
                {selectedRecipe.cuisine}
              </span>
              <span className="badge badge-dietary">
                {selectedRecipe.mealType}
              </span>
              {selectedRecipe.dietary.map(d => (
                <DietaryBadge key={d} label={d} />
              ))}
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: 700,
                lineHeight: 1.2,
                color: 'var(--text-primary)',
                marginBottom: '12px',
              }}
            >
              {selectedRecipe.title}
            </h1>

            <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
              {selectedRecipe.description}
            </p>

            {/* Quick Cooking Stats Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '16px',
                padding: '16px 20px',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
                marginBottom: '28px',
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
                  Prep Time
                </span>
                <span style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {selectedRecipe.prepTime} mins
                </span>
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
                  Cook Time
                </span>
                <span style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {selectedRecipe.cookTime} mins
                </span>
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
                  Difficulty
                </span>
                <span style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {selectedRecipe.difficulty}
                </span>
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
                  Rating
                </span>
                <span style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Star size={16} fill="#F59E0B" stroke="#F59E0B" />
                  {selectedRecipe.rating.toFixed(1)} ({selectedRecipe.reviewCount})
                </span>
              </div>
            </div>

            {/* Match Breakdown Card */}
            {selectedIngredients.length > 0 && (
              <div
                style={{
                  padding: '20px',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: matchResult.missingCount === 0 ? 'var(--status-match-high-bg)' : 'var(--status-match-mid-bg)',
                  border: matchResult.missingCount === 0 ? '1px solid #C2E2CC' : '1px solid #F8D9B2',
                  marginBottom: '28px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Sparkles size={18} color={matchResult.missingCount === 0 ? 'var(--status-match-high-text)' : 'var(--status-match-mid-text)'} />
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: matchResult.missingCount === 0 ? 'var(--status-match-high-text)' : 'var(--status-match-mid-text)' }}>
                      {matchResult.matchScore}% Match for Your Kitchen
                    </h3>
                  </div>

                  {matchResult.missingCount > 0 && (
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => addMissingToShoppingList(matchResult.missingIngredients, selectedRecipe.title)}
                    >
                      <Plus size={14} /> Add {matchResult.missingCount} Missing to Shopping List
                    </button>
                  )}
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {matchResult.missingCount === 0
                    ? 'You have all required ingredients to cook this right now!'
                    : `You already have ${selectedRecipe.ingredients.length - matchResult.missingCount} of ${selectedRecipe.ingredients.length} ingredients. Missing: ${matchResult.missingIngredients.map(m => m.name).join(', ')}.`}
                </p>
              </div>
            )}

            {/* Start Cooking CTA Button */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => startCookingMode(selectedRecipe)}
                style={{ flex: 1, minWidth: '220px' }}
              >
                <Play size={20} fill="#FFFFFF" /> Start Cooking Mode
              </button>
            </div>
          </div>
        </div>

        {/* Ingredients & Instructions Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px',
            marginTop: '40px',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            {/* Ingredients Column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Ingredients
                </h3>

                <ServingAdjuster
                  servings={servings}
                  onServingsChange={setServings}
                />
              </div>

              {/* Ingredients List */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-light)',
                  padding: '16px 20px',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {selectedRecipe.ingredients.map(ing => {
                    const { formatted } = scaleIngredientQuantity(ing.amount, selectedRecipe.servings, servings);
                    const isMatched = matchResult.matchedIngredients.some(
                      m => m.recipeIngredient.id === ing.id
                    );

                    return (
                      <div
                        key={ing.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '10px 12px',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: isMatched ? 'var(--status-match-high-bg)' : 'transparent',
                          border: isMatched ? '1px solid #D4E8DC' : '1px solid transparent',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span
                            style={{
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              backgroundColor: isMatched ? 'var(--brand-primary)' : 'var(--bg-surface-subtle)',
                              color: isMatched ? '#FFFFFF' : 'var(--text-muted)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '0.75rem',
                            }}
                          >
                            {isMatched ? <Check size={12} strokeWidth={3} /> : '○'}
                          </span>
                          <div>
                            <span style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>
                              {ing.name}
                            </span>
                            {ing.isOptional && (
                              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '6px' }}>
                                (optional)
                              </span>
                            )}
                            {ing.notes && (
                              <span style={{ display: 'block', fontSize: '0.78125rem', color: 'var(--text-muted)' }}>
                                {ing.notes}
                              </span>
                            )}
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--brand-primary)' }}>
                            {formatted} {ing.unit}
                          </span>
                          {!isMatched && (
                            <button
                              className="btn btn-ghost btn-sm"
                              onClick={() => addToShoppingList(ing.name, ing.amount, ing.unit, selectedRecipe.title)}
                              title="Add to shopping list"
                              style={{ padding: '4px 6px' }}
                            >
                              <ShoppingBag size={15} color="var(--accent-terracotta)" />
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step-by-Step Instructions Column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Instructions
                </h3>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  {selectedRecipe.instructions.length} steps
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {selectedRecipe.instructions.map(step => (
                  <div
                    key={step.stepNumber}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-light)',
                      padding: '20px 24px',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <span
                        style={{
                          fontSize: '0.8125rem',
                          fontWeight: 700,
                          color: 'var(--brand-primary)',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}
                      >
                        Step {step.stepNumber < 10 ? `0${step.stepNumber}` : step.stepNumber}
                      </span>
                      {step.durationMinutes && (
                        <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Clock size={13} /> {step.durationMinutes} mins
                        </span>
                      )}
                    </div>

                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                      {step.title}
                    </h4>

                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: step.tip ? '12px' : '0' }}>
                      {step.instruction}
                    </p>

                    {step.tip && (
                      <div
                        style={{
                          backgroundColor: 'var(--brand-primary-light)',
                          borderLeft: '3px solid var(--brand-primary)',
                          padding: '8px 12px',
                          borderRadius: '0 6px 6px 0',
                          fontSize: '0.8125rem',
                          color: 'var(--brand-primary)',
                        }}
                      >
                        <strong>Tip:</strong> {step.tip}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* You Might Also Like Section */}
        {relatedRecipes.length > 0 && (
          <div style={{ marginTop: '72px', paddingTop: '40px', borderTop: '1px solid var(--border-light)' }}>
            <div className="section-header">
              <span className="section-tagline">Recommendations</span>
              <h3 className="section-title">You Might Also Like</h3>
            </div>

            <div className="recipe-grid">
              {relatedRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} showMatchInfo={selectedIngredients.length > 0} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
