import React from 'react';
import { Bookmark, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { RecipeCard } from '../components/recipes/RecipeCard';
import { EmptyState } from '../components/common/EmptyState';

export const CookbookView: React.FC = () => {
  const { savedRecipes, setActiveTab, selectedIngredients } = useApp();

  return (
    <div style={{ padding: '36px 0 60px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="section-tagline">Personal Collection</span>
            <h1 className="section-title">My Cookbook</h1>
            <p className="section-subtitle">
              Your handpicked collection of saved recipes, ready whenever inspiration strikes.
            </p>
          </div>

          {savedRecipes.length > 0 && (
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => setActiveTab('find-recipes')}
            >
              <Sparkles size={14} /> Find More Recipes
            </button>
          )}
        </div>

        {/* Content */}
        {savedRecipes.length === 0 ? (
          <EmptyState
            icon={Bookmark}
            title="Your cookbook is empty"
            description="Save recipes you love or want to try later by clicking the bookmark icon on any recipe card."
            actionLabel="Discover Recipes"
            onAction={() => setActiveTab('find-recipes')}
          />
        ) : (
          <div
            className="recipe-grid"
            style={{
              maxWidth: savedRecipes.length === 1 ? '380px' : savedRecipes.length === 2 ? '780px' : 'none',
            }}
          >
            {savedRecipes.map(recipe => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                showMatchInfo={selectedIngredients.length > 0}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
