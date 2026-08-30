import React, { useState } from 'react';
import { Plus, Trash2, Sparkles, X, PackageOpen } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { IngredientCategory } from '../types';
import { EmptyState } from '../components/common/EmptyState';

const CATEGORIES: IngredientCategory[] = [
  'Produce',
  'Dairy & Eggs',
  'Meat & Seafood',
  'Pantry & Grains',
  'Oils & Condiments',
  'Baking & Spices',
  'Other',
];

const COMMON_STAPLES = [
  { name: 'Olive Oil', category: 'Oils & Condiments' as IngredientCategory },
  { name: 'Salt', category: 'Baking & Spices' as IngredientCategory },
  { name: 'Black Pepper', category: 'Baking & Spices' as IngredientCategory },
  { name: 'Garlic', category: 'Produce' as IngredientCategory },
  { name: 'Onion', category: 'Produce' as IngredientCategory },
  { name: 'Butter', category: 'Dairy & Eggs' as IngredientCategory },
  { name: 'Eggs', category: 'Dairy & Eggs' as IngredientCategory },
  { name: 'Rice', category: 'Pantry & Grains' as IngredientCategory },
  { name: 'Pasta', category: 'Pantry & Grains' as IngredientCategory },
  { name: 'Soy Sauce', category: 'Oils & Condiments' as IngredientCategory },
  { name: 'Tomato', category: 'Produce' as IngredientCategory },
  { name: 'Cheddar Cheese', category: 'Dairy & Eggs' as IngredientCategory },
];

export const PantryView: React.FC = () => {
  const { pantryItems, addToPantry, removeFromPantry, clearPantry, findRecipesFromPantry } = useApp();
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState<IngredientCategory>('Produce');

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (itemName.trim()) {
      addToPantry(itemName.trim(), category);
      setItemName('');
    }
  };

  // Group pantry items by category
  const groupedPantry = CATEGORIES.map(cat => ({
    category: cat,
    items: pantryItems.filter(item => item.category === cat),
  })).filter(group => group.items.length > 0);

  return (
    <div style={{ padding: '36px 0 60px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="section-tagline">Kitchen Inventory</span>
            <h1 className="section-title">My Kitchen Pantry</h1>
            <p className="section-subtitle">
              Save what you commonly keep stocked. CookPro will automatically use your pantry to find instant recipe matches.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {pantryItems.length > 0 && (
              <>
                <button className="btn btn-ghost btn-sm" onClick={clearPantry} style={{ color: 'var(--text-muted)' }}>
                  <Trash2 size={15} /> Clear Pantry
                </button>
                <button className="btn btn-primary" onClick={findRecipesFromPantry}>
                  <Sparkles size={16} /> Find Recipes From My Pantry ({pantryItems.length})
                </button>
              </>
            )}
          </div>
        </div>

        {/* Add Item Form & Quick Staples */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-light)',
            padding: '24px',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '36px',
          }}
        >
          <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>
            Add Pantry Item
          </h3>

          <form onSubmit={handleAddItem} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Ingredient name (e.g. Greek Yogurt, Basmati Rice)..."
              value={itemName}
              onChange={e => setItemName(e.target.value)}
              style={{
                padding: '10px 16px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)',
                backgroundColor: 'var(--bg-main)',
                outline: 'none',
                fontSize: '0.9375rem',
              }}
            />

            <select
              value={category}
              onChange={e => setCategory(e.target.value as IngredientCategory)}
              style={{
                padding: '10px 16px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)',
                backgroundColor: 'var(--bg-main)',
                outline: 'none',
                fontSize: '0.9375rem',
              }}
            >
              {CATEGORIES.map(c => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <button type="submit" className="btn btn-primary" style={{ height: '44px' }}>
              <Plus size={16} /> Add to Pantry
            </button>
          </form>

          {/* Quick Staple Additions */}
          <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
            <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
              Quick-add common staples:
            </span>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {COMMON_STAPLES.map(staple => {
                const inPantry = pantryItems.some(
                  p => p.name.toLowerCase() === staple.name.toLowerCase()
                );
                if (inPantry) return null;

                return (
                  <button
                    key={staple.name}
                    className="quick-pick-btn"
                    onClick={() => addToPantry(staple.name, staple.category)}
                  >
                    + {staple.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Grouped Pantry Inventory */}
        {pantryItems.length === 0 ? (
          <EmptyState
            icon={PackageOpen}
            title="Your pantry is empty"
            description="Add ingredients you usually have in your fridge, spice rack, and cupboards. You'll be able to discover matching meals with a single click."
            actionLabel="Add Kitchen Staples"
            onAction={() => {
              COMMON_STAPLES.slice(0, 6).forEach(s => addToPantry(s.name, s.category));
            }}
          />
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {groupedPantry.map(group => (
              <div
                key={group.category}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-light)',
                  padding: '20px',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <h4 style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text-primary)' }}>
                    {group.category}
                  </h4>
                  <span className="badge badge-dietary">{group.items.length}</span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {group.items.map(item => (
                    <span key={item.id} className="ingredient-chip">
                      <span>{item.name}</span>
                      <button
                        className="chip-remove-btn"
                        onClick={() => removeFromPantry(item.id)}
                        aria-label={`Remove ${item.name} from pantry`}
                      >
                        <X size={13} strokeWidth={2.5} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
