import React, { useState, useRef, useEffect } from 'react';
import { Search, Plus, X, Sparkles, Trash2, ArrowRight } from 'lucide-react';
import { MASTER_INGREDIENTS, POPULAR_HERO_INGREDIENTS } from '../../data/ingredients';
import { useApp } from '../../context/AppContext';
import { IngredientDef } from '../../types';

interface IngredientInputProps {
  onFindRecipes?: () => void;
  showQuickPicks?: boolean;
  ctaText?: string;
  autoFocus?: boolean;
}

export const IngredientInput: React.FC<IngredientInputProps> = ({
  onFindRecipes,
  showQuickPicks = true,
  ctaText = 'Find Recipes',
  autoFocus = false,
}) => {
  const { selectedIngredients, addIngredient, removeIngredient, clearIngredients } = useApp();
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<IngredientDef[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Update suggestions as user types
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);

    if (val.trim().length > 0) {
      const q = val.trim().toLowerCase();
      const filtered = MASTER_INGREDIENTS.filter(item => {
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesAlias = item.aliases.some(alias => alias.toLowerCase().includes(q));
        const notAlreadySelected = !selectedIngredients.some(
          s => s.toLowerCase() === item.name.toLowerCase()
        );
        return (matchesName || matchesAlias) && notAlreadySelected;
      }).slice(0, 7);

      setSuggestions(filtered);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  };

  const handleSelectSuggestion = (ing: IngredientDef) => {
    addIngredient(ing.name);
    setInputValue('');
    setSuggestions([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (suggestions.length > 0) {
        handleSelectSuggestion(suggestions[0]);
      } else if (inputValue.trim()) {
        addIngredient(inputValue.trim());
        setInputValue('');
        setIsOpen(false);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div ref={containerRef} className="ingredient-search-box">
      {/* Search Input Field */}
      <div className="search-input-row">
        <Search size={22} color="var(--brand-primary)" />
        <input
          ref={inputRef}
          type="text"
          className="search-input-field"
          placeholder="Search or add an ingredient (e.g. Tomato, Eggs, Chicken, Rice)..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (inputValue.trim().length > 0) setIsOpen(true);
          }}
          autoFocus={autoFocus}
        />
        {inputValue.trim() && (
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              addIngredient(inputValue.trim());
              setInputValue('');
              setIsOpen(false);
              inputRef.current?.focus();
            }}
          >
            <Plus size={16} /> Add
          </button>
        )}
      </div>

      {/* Autocomplete Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div className="autocomplete-dropdown" role="listbox">
          {suggestions.map(sugg => (
            <div
              key={sugg.id}
              className="autocomplete-item"
              onClick={() => handleSelectSuggestion(sugg)}
              role="option"
              aria-selected={false}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Plus size={15} color="var(--brand-primary)" />
                <span style={{ fontWeight: 500 }}>{sugg.name}</span>
              </div>
              <span className="autocomplete-cat">{sugg.category}</span>
            </div>
          ))}
        </div>
      )}

      {/* Selected Ingredient Chips */}
      {selectedIngredients.length > 0 ? (
        <div style={{ marginTop: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              In your kitchen ({selectedIngredients.length}):
            </span>
            <button
              onClick={clearIngredients}
              style={{
                fontSize: '0.78125rem',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '2px 6px',
                borderRadius: '4px',
              }}
              className="btn-ghost"
              title="Clear all ingredients"
            >
              <Trash2 size={13} /> Clear all
            </button>
          </div>

          <div className="ingredient-chips-container">
            {selectedIngredients.map(ing => (
              <span key={ing} className="ingredient-chip">
                <span>{ing}</span>
                <button
                  className="chip-remove-btn"
                  onClick={() => removeIngredient(ing)}
                  aria-label={`Remove ${ing}`}
                >
                  <X size={13} strokeWidth={2.5} />
                </button>
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ marginTop: '12px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          No ingredients added yet. Add a few items from your pantry to start discovering matching recipes!
        </div>
      )}

      {/* Quick Add Popular Ingredients */}
      {showQuickPicks && (
        <div className="quick-picks-row">
          <span className="quick-pick-label">Popular ingredients:</span>
          {POPULAR_HERO_INGREDIENTS.map(pop => {
            const isAlreadyAdded = selectedIngredients.some(
              s => s.toLowerCase() === pop.toLowerCase()
            );
            if (isAlreadyAdded) return null;

            return (
              <button
                key={pop}
                className="quick-pick-btn"
                onClick={() => addIngredient(pop)}
              >
                + {pop}
              </button>
            );
          })}
        </div>
      )}

      {/* Primary Action Button (If provided) */}
      {onFindRecipes && (
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
          <button className="btn btn-primary btn-lg" onClick={onFindRecipes}>
            <Sparkles size={18} />
            {ctaText}
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};
