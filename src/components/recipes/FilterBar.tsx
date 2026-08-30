import React from 'react';
import { RotateCcw, Sparkles, Clock, Utensils, Award, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { MatchThreshold, SortOption, DietaryTag } from '../../types';

const DIETARY_LIST: DietaryTag[] = ['Vegetarian', 'Vegan', 'Gluten-Free', 'High-Protein'];

export const FilterBar: React.FC = () => {
  const { filters, setFilters, resetFilters, selectedIngredients } = useApp();

  const handleThresholdChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, matchThreshold: e.target.value as MatchThreshold }));
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value ? parseInt(e.target.value, 10) : null;
    setFilters(prev => ({ ...prev, maxTime: val }));
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, sortBy: e.target.value as SortOption }));
  };

  const handleDietToggle = (diet: DietaryTag) => {
    setFilters(prev => {
      const exists = prev.dietary.includes(diet);
      return {
        ...prev,
        dietary: exists ? prev.dietary.filter(d => d !== diet) : [...prev.dietary, diet],
      };
    });
  };

  const toggleUseEverything = () => {
    setFilters(prev => ({
      ...prev,
      useEverythingIHave: !prev.useEverythingIHave,
    }));
  };

  const isFiltered =
    filters.matchThreshold !== 'all' ||
    filters.maxTime !== null ||
    filters.mealTypes.length > 0 ||
    filters.dietary.length > 0 ||
    filters.sortBy !== 'match' ||
    filters.useEverythingIHave;

  return (
    <div className="filter-bar">
      {/* Primary Filtering Row */}
      <div className="filter-row-primary">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          {selectedIngredients.length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={15} color="var(--brand-primary)" />
              <select
                className="filter-select"
                value={filters.matchThreshold}
                onChange={handleThresholdChange}
                aria-label="Filter by match percentage"
              >
                <option value="all">All Matches</option>
                <option value="100">100% Make Now</option>
                <option value="90">90%+ Strong Match</option>
                <option value="75">75%+ Good Match</option>
                <option value="50">50%+ Discovery</option>
              </select>
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={15} color="var(--text-secondary)" />
            <select
              className="filter-select"
              value={filters.maxTime === null ? '' : filters.maxTime.toString()}
              onChange={handleTimeChange}
              aria-label="Filter by max cooking time"
            >
              <option value="">Any Time</option>
              <option value="15">Under 15 mins</option>
              <option value="30">Under 30 mins</option>
              <option value="60">Under 60 mins</option>
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Award size={15} color="var(--text-secondary)" />
            <select
              className="filter-select"
              value={filters.sortBy}
              onChange={handleSortChange}
              aria-label="Sort recipes"
            >
              <option value="match">Best Match</option>
              <option value="quickest">Quickest</option>
              <option value="easiest">Easiest</option>
              <option value="popular">Most Popular</option>
              <option value="pantry_utilization">Pantry Maximizer</option>
            </select>
          </div>
        </div>

        {/* Use Everything I Have Mode Button */}
        {selectedIngredients.length > 0 && (
          <button
            className={`btn btn-sm ${filters.useEverythingIHave ? 'btn-primary' : 'btn-secondary'}`}
            onClick={toggleUseEverything}
            title="Prioritize recipes using the highest number of your available ingredients"
            style={{ borderRadius: 'var(--radius-pill)', fontSize: '0.8125rem' }}
          >
            <Utensils size={13} />
            Use Everything I Have
          </button>
        )}
      </div>

      {/* Secondary Dietary Pills Row */}
      <div className="filter-row-secondary">
        <span style={{ fontSize: '0.78125rem', fontWeight: 600, color: 'var(--text-muted)', marginRight: '4px' }}>
          Dietary:
        </span>
        {DIETARY_LIST.map(diet => {
          const isSelected = filters.dietary.includes(diet);
          return (
            <button
              key={diet}
              onClick={() => handleDietToggle(diet)}
              className="badge"
              style={{
                backgroundColor: isSelected ? 'var(--brand-primary)' : 'var(--bg-main)',
                color: isSelected ? '#FFFFFF' : 'var(--text-secondary)',
                border: isSelected ? '1px solid var(--brand-primary)' : '1px solid var(--border-light)',
                cursor: 'pointer',
                padding: '4px 10px',
                fontSize: '0.78125rem',
              }}
            >
              {isSelected && <Check size={11} strokeWidth={3} />}
              {diet}
            </button>
          );
        })}

        {isFiltered && (
          <button
            onClick={resetFilters}
            className="btn btn-ghost btn-sm"
            style={{ color: 'var(--text-muted)', fontSize: '0.78125rem', marginLeft: 'auto' }}
          >
            <RotateCcw size={13} /> Reset Filters
          </button>
        )}
      </div>
    </div>
  );
};
