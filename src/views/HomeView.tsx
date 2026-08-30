import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { IngredientInput } from '../components/recipes/IngredientInput';
import { RecipeCard } from '../components/recipes/RecipeCard';
import { RecipeImage } from '../components/common/RecipeImage';
import { useApp } from '../context/AppContext';
import { RECIPES_DATA } from '../data/recipes';

export const HomeView: React.FC = () => {
  const { setActiveTab } = useApp();

  const popularRecipes = RECIPES_DATA.filter(r => r.isPopular).slice(0, 6);

  const handleFindRecipes = () => {
    setActiveTab('find-recipes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={{ padding: '48px 0 64px', backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }}>
            {/* Left Hero Content */}
            <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'var(--brand-primary-light)',
                  color: 'var(--brand-primary)',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  marginBottom: '20px',
                }}
              >
                <Sparkles size={16} />
                <span>Turn what you have into something delicious</span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: 'var(--text-primary)',
                  marginBottom: '18px',
                  letterSpacing: '-0.02em',
                }}
              >
                Cook something delicious with what you already have.
              </h1>

              <p
                style={{
                  fontSize: '1.125rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '36px',
                  maxWidth: '620px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                Enter the ingredients in your kitchen and discover chef-tested recipes you can make right now without extra grocery runs.
              </p>

              {/* Large Ingredient Search Input Card */}
              <div style={{ textAlign: 'left', marginBottom: '32px' }}>
                <IngredientInput
                  onFindRecipes={handleFindRecipes}
                  showQuickPicks={true}
                  ctaText="Find My Recipes"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Food Photography Showcase */}
      <section style={{ padding: '0 0 56px' }}>
        <div className="container">
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              height: '380px',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--border-light)',
            }}
          >
            <RecipeImage
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1600&q=80"
              alt="Fresh culinary ingredients and skillet cooking"
              aspectRatio="auto"
              loading="eager"
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(28,25,23,0.1) 0%, rgba(28,25,23,0.7) 100%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '36px',
              }}
            >
              <div style={{ color: '#FFFFFF', maxWidth: '600px' }}>
                <span
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(8px)',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.78125rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    display: 'inline-block',
                    marginBottom: '10px',
                  }}
                >
                  Zero Food Waste Kitchen
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    lineHeight: 1.25,
                    marginBottom: '8px',
                  }}
                >
                  Simple ingredients, extraordinary flavors.
                </h3>
                <p style={{ fontSize: '0.9375rem', opacity: 0.9, lineHeight: 1.5 }}>
                  Every recipe in CookPro is designed with authentic pantry items, clear timing, and tested step-by-step guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How CookPro Works */}
      <section style={{ padding: '48px 0 64px', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="section-tagline">How It Works</span>
            <h2 className="section-title">Cooking made effortless in three steps</h2>
            <p className="section-subtitle" style={{ margin: '6px auto 0' }}>
              CookPro compares your kitchen items against dozens of tested recipes to find your best matches instantly.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
              marginTop: '40px',
            }}
          >
            {/* Step 1 */}
            <div
              style={{
                backgroundColor: 'var(--bg-main)',
                padding: '32px 28px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-light)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--brand-primary)',
                  display: 'block',
                  marginBottom: '12px',
                }}
              >
                01
              </span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                Add ingredients
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Tell CookPro what you already have in your kitchen or choose items directly from your saved pantry.
              </p>
            </div>

            {/* Step 2 */}
            <div
              style={{
                backgroundColor: 'var(--bg-main)',
                padding: '32px 28px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-light)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--brand-primary)',
                  display: 'block',
                  marginBottom: '12px',
                }}
              >
                02
              </span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                Find your matches
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                CookPro calculates exact match percentages, highlighting what you can make now vs. recipes missing only 1 item.
              </p>
            </div>

            {/* Step 3 */}
            <div
              style={{
                backgroundColor: 'var(--bg-main)',
                padding: '32px 28px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-light)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--brand-primary)',
                  display: 'block',
                  marginBottom: '12px',
                }}
              >
                03
              </span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                Start cooking
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Enter distraction-free cooking mode with clear timers, scaled servings, and step-by-step guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Recipes Section */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="section-tagline">Trending Now</span>
              <h2 className="section-title">Popular Community Favorites</h2>
            </div>
            <button
              className="btn btn-secondary"
              onClick={handleFindRecipes}
            >
              Explore All Recipes <ArrowRight size={16} />
            </button>
          </div>

          <div className="recipe-grid">
            {popularRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} showMatchInfo={false} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
