import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Clock, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { searchRecipes } from '../../services/recipeService';
import { Recipe } from '../../types';
import { RecipeImage } from './RecipeImage';

export const SearchModal: React.FC = () => {
  const { isGlobalSearchOpen, closeGlobalSearch, openRecipeDetail } = useApp();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([
    'Mutton',
    'Paneer',
    'Biryani',
    'Butter Chicken',
    'Pasta',
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isGlobalSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isGlobalSearchOpen]);

  // Debounced Search using recipeService (Local + Live API)
  useEffect(() => {
    const trimmed = query.trim();
    if (!trimmed) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const timer = setTimeout(async () => {
      try {
        const matching = await searchRecipes(trimmed);
        setResults(matching.slice(0, 12));
      } catch (err) {
        console.error('Search error:', err);
      } finally {
        setIsLoading(false);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  // Keyboard shortcut listener: Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isGlobalSearchOpen) {
          closeGlobalSearch();
        }
      }
      if (e.key === 'Escape' && isGlobalSearchOpen) {
        closeGlobalSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGlobalSearchOpen, closeGlobalSearch]);

  if (!isGlobalSearchOpen) return null;

  const handleSelectRecipe = (recipe: Recipe) => {
    if (query.trim() && !recentSearches.includes(query.trim())) {
      setRecentSearches(prev => [query.trim(), ...prev.slice(0, 4)]);
    }
    openRecipeDetail(recipe);
    closeGlobalSearch();
  };

  return (
    <div className="modal-backdrop" onClick={closeGlobalSearch}>
      <div
        className="modal-dialog"
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: '640px' }}
      >
        {/* Search Header Input */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '16px 20px',
            borderBottom: '1px solid var(--border-light)',
            gap: '12px',
          }}
        >
          {isLoading ? (
            <Loader2 size={20} className="spin" color="var(--brand-primary)" />
          ) : (
            <Search size={20} color="var(--brand-primary)" />
          )}
          <input
            ref={inputRef}
            type="text"
            className="search-input-field"
            placeholder="Search recipes, ingredients, cuisines (e.g. Mutton, Paneer, Biryani, Pasta)..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {query && (
            <button onClick={() => setQuery('')} style={{ color: 'var(--text-muted)' }}>
              <X size={18} />
            </button>
          )}
          <button className="btn btn-ghost btn-sm" onClick={closeGlobalSearch}>
            Esc
          </button>
        </div>

        {/* Search Body */}
        <div style={{ padding: '20px', maxHeight: '440px', overflowY: 'auto' }}>
          {query.trim() ? (
            isLoading ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '12px 0' }}>
                {[1, 2, 3].map(n => (
                  <div key={n} className="skeleton" style={{ height: '60px', width: '100%' }} />
                ))}
              </div>
            ) : results.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '4px',
                  }}
                >
                  Matching Recipes ({results.length})
                </span>
                {results.map(recipe => (
                  <button
                    key={recipe.id}
                    onClick={() => handleSelectRecipe(recipe)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--bg-surface)',
                      border: '1px solid var(--border-light)',
                      textAlign: 'left',
                      transition: 'all var(--transition-fast)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = 'var(--brand-primary-light)';
                      e.currentTarget.style.borderColor = 'var(--brand-sage-border)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = 'var(--bg-surface)';
                      e.currentTarget.style.borderColor = 'var(--border-light)';
                    }}
                  >
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: 'var(--radius-sm)',
                        overflow: 'hidden',
                        flexShrink: 0,
                      }}
                    >
                      <RecipeImage
                        src={recipe.image}
                        alt={recipe.title}
                        cuisine={recipe.cuisine}
                        aspectRatio="1/1"
                      />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: '0.9375rem',
                          color: 'var(--text-primary)',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {recipe.title}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '0.8rem',
                          color: 'var(--text-muted)',
                          marginTop: '2px',
                        }}
                      >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                          <Clock size={12} /> {recipe.totalTime} mins
                        </span>
                        <span>•</span>
                        <span>{recipe.cuisine}</span>
                        <span>•</span>
                        <span>{recipe.difficulty}</span>
                      </div>
                    </div>
                    <ArrowRight size={16} color="var(--text-muted)" />
                  </button>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '36px 16px' }}>
                <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  No recipes found for "{query}"
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Try searching for another ingredient (e.g. Mutton, Paneer, Chicken, Potato, Rice) or recipe name (e.g. Biryani, Curry, Pasta).
                </p>
              </div>
            )
          ) : (
            <div>
              {/* Recent & Suggested Searches */}
              <div style={{ marginBottom: '20px' }}>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    display: 'block',
                    marginBottom: '10px',
                  }}
                >
                  Popular Searches
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {recentSearches.map(term => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="quick-pick-btn"
                      style={{ padding: '6px 14px', fontSize: '0.85rem' }}
                    >
                      <Sparkles size={12} style={{ marginRight: '4px' }} />
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Cuisines */}
              <div>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    display: 'block',
                    marginBottom: '10px',
                  }}
                >
                  Browse by Cuisine
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['Indian', 'Italian', 'Asian', 'Mediterranean', 'Mexican', 'American', 'Middle Eastern'].map(c => (
                    <button
                      key={c}
                      onClick={() => setQuery(c)}
                      className="badge badge-dietary"
                      style={{ padding: '6px 12px', cursor: 'pointer' }}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
