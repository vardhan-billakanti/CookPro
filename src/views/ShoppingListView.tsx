import React, { useState } from 'react';
import { ShoppingBag, Plus, Trash2, CheckCircle2, Circle, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { EmptyState } from '../components/common/EmptyState';

export const ShoppingListView: React.FC = () => {
  const {
    shoppingList,
    addToShoppingList,
    toggleShoppingItem,
    removeFromShoppingList,
    clearCompletedShopping,
    clearAllShopping,
    setActiveTab,
  } = useApp();

  const [newItemName, setNewItemName] = useState('');

  const handleAddCustomItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItemName.trim()) {
      addToShoppingList(newItemName.trim());
      setNewItemName('');
    }
  };

  const completedCount = shoppingList.filter(i => i.isChecked).length;
  const pendingCount = shoppingList.length - completedCount;

  return (
    <div style={{ padding: '36px 0 60px' }}>
      <div className="container" style={{ maxWidth: '720px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="section-tagline">Grocery Companion</span>
            <h1 className="section-title">My Shopping List</h1>
            <p className="section-subtitle">
              Easily manage missing ingredients and items for upcoming culinary creations.
            </p>
          </div>

          {shoppingList.length > 0 && (
            <div style={{ display: 'flex', gap: '8px' }}>
              {completedCount > 0 && (
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={clearCompletedShopping}
                >
                  Clear Completed ({completedCount})
                </button>
              )}
              <button
                className="btn btn-ghost btn-sm"
                onClick={clearAllShopping}
                style={{ color: 'var(--text-muted)' }}
              >
                <Trash2 size={14} /> Clear All
              </button>
            </div>
          )}
        </div>

        {/* Add Custom Item Input */}
        <form
          onSubmit={handleAddCustomItem}
          style={{
            display: 'flex',
            gap: '10px',
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-light)',
            padding: '8px 12px 8px 16px',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '28px',
          }}
        >
          <input
            type="text"
            placeholder="Add an item (e.g. Sourdough Bread, Butter, Basil)..."
            value={newItemName}
            onChange={e => setNewItemName(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '0.9375rem',
              backgroundColor: 'transparent',
              color: 'var(--text-primary)',
            }}
          />
          <button type="submit" className="btn btn-primary btn-sm">
            <Plus size={16} /> Add Item
          </button>
        </form>

        {/* List Content */}
        {shoppingList.length === 0 ? (
          <EmptyState
            icon={ShoppingBag}
            title="Your shopping list is empty"
            description="When browsing recipes with missing ingredients, click 'Add Missing to Shopping List' to automatically add them here."
            actionLabel="Browse Matching Recipes"
            onAction={() => setActiveTab('find-recipes')}
          />
        ) : (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-light)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            {/* Summary Bar */}
            <div
              style={{
                padding: '12px 20px',
                backgroundColor: 'var(--bg-surface-subtle)',
                borderBottom: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.8125rem',
                color: 'var(--text-secondary)',
                fontWeight: 600,
              }}
            >
              <span>{pendingCount} items remaining</span>
              <span>{completedCount} completed</span>
            </div>

            {/* Items */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {shoppingList.map((item, idx) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 20px',
                    borderBottom: idx < shoppingList.length - 1 ? '1px solid var(--border-light)' : 'none',
                    backgroundColor: item.isChecked ? 'var(--bg-main)' : 'transparent',
                    transition: 'background-color var(--transition-fast)',
                  }}
                >
                  <button
                    onClick={() => toggleShoppingItem(item.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      textAlign: 'left',
                      flex: 1,
                    }}
                  >
                    <span style={{ color: item.isChecked ? 'var(--brand-primary)' : 'var(--text-muted)' }}>
                      {item.isChecked ? (
                        <CheckCircle2 size={20} />
                      ) : (
                        <Circle size={20} />
                      )}
                    </span>
                    <div>
                      <span
                        style={{
                          fontSize: '0.9375rem',
                          fontWeight: 500,
                          color: item.isChecked ? 'var(--text-muted)' : 'var(--text-primary)',
                          textDecoration: item.isChecked ? 'line-through' : 'none',
                        }}
                      >
                        {item.name}
                      </span>
                      {item.amount && item.unit && (
                        <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginLeft: '6px' }}>
                          ({item.amount} {item.unit})
                        </span>
                      )}
                      {item.recipeSourceTitle && (
                        <span
                          style={{
                            display: 'block',
                            fontSize: '0.75rem',
                            color: 'var(--brand-sage)',
                            marginTop: '2px',
                          }}
                        >
                          For: {item.recipeSourceTitle}
                        </span>
                      )}
                    </div>
                  </button>

                  <button
                    className="btn btn-ghost btn-icon-only"
                    onClick={() => removeFromShoppingList(item.id)}
                    aria-label={`Remove ${item.name}`}
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
