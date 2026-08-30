import React from 'react';
import { Home, Sparkles, Bookmark, Box, ShoppingBag } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const MobileNav: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    savedRecipeIds,
    shoppingList,
    pantryItems,
  } = useApp();

  const uncompletedShoppingCount = shoppingList.filter(i => !i.isChecked).length;

  return (
    <nav className="mobile-nav-bar" aria-label="Mobile navigation">
      <button
        className={`mobile-nav-item ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => setActiveTab('home')}
      >
        <Home size={20} />
        <span>Home</span>
      </button>

      <button
        className={`mobile-nav-item ${activeTab === 'find-recipes' ? 'active' : ''}`}
        onClick={() => setActiveTab('find-recipes')}
      >
        <Sparkles size={20} />
        <span>Find</span>
      </button>

      <button
        className={`mobile-nav-item ${activeTab === 'pantry' ? 'active' : ''}`}
        onClick={() => setActiveTab('pantry')}
      >
        <Box size={20} />
        <span>Pantry</span>
        {pantryItems.length > 0 && (
          <span className="mobile-badge">{pantryItems.length}</span>
        )}
      </button>

      <button
        className={`mobile-nav-item ${activeTab === 'cookbook' ? 'active' : ''}`}
        onClick={() => setActiveTab('cookbook')}
      >
        <Bookmark size={20} />
        <span>Cookbook</span>
        {savedRecipeIds.length > 0 && (
          <span className="mobile-badge">{savedRecipeIds.length}</span>
        )}
      </button>

      <button
        className={`mobile-nav-item ${activeTab === 'shopping-list' ? 'active' : ''}`}
        onClick={() => setActiveTab('shopping-list')}
      >
        <ShoppingBag size={20} />
        <span>Shopping</span>
        {uncompletedShoppingCount > 0 && (
          <span className="mobile-badge">{uncompletedShoppingCount}</span>
        )}
      </button>
    </nav>
  );
};
