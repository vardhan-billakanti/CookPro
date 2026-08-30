import React from 'react';
import { ChefHat, Search, Bookmark, ShoppingBag, Box, User as UserIcon, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useAuth } from '../../context/AuthContext';

export const Header: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    openGlobalSearch,
    savedRecipeIds,
    shoppingList,
    pantryItems,
  } = useApp();

  const { user, isGuest, openAuthModal, openPreferencesModal } = useAuth();

  const uncompletedShoppingCount = shoppingList.filter(i => !i.isChecked).length;

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Brand Logo */}
        <button
          className="header-brand"
          onClick={() => setActiveTab('home')}
          aria-label="CookPro Home"
        >
          <div className="brand-icon-wrapper">
            <ChefHat size={22} strokeWidth={2.3} />
          </div>
          <div className="brand-title">
            <span>Cook</span>
            <span className="brand-title-accent">Pro</span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="header-nav" aria-label="Main navigation">
          <button
            className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            Home
          </button>
          <button
            className={`nav-link ${activeTab === 'find-recipes' ? 'active' : ''}`}
            onClick={() => setActiveTab('find-recipes')}
          >
            <Sparkles size={16} />
            Find Recipes
          </button>
          <button
            className={`nav-link ${activeTab === 'cookbook' ? 'active' : ''}`}
            onClick={() => setActiveTab('cookbook')}
          >
            <Bookmark size={16} />
            My Cookbook
            {savedRecipeIds.length > 0 && (
              <span className="nav-badge">{savedRecipeIds.length}</span>
            )}
          </button>
          <button
            className={`nav-link ${activeTab === 'pantry' ? 'active' : ''}`}
            onClick={() => setActiveTab('pantry')}
          >
            <Box size={16} />
            My Pantry
            {pantryItems.length > 0 && (
              <span className="nav-badge">{pantryItems.length}</span>
            )}
          </button>
          <button
            className={`nav-link ${activeTab === 'shopping-list' ? 'active' : ''}`}
            onClick={() => setActiveTab('shopping-list')}
          >
            <ShoppingBag size={16} />
            Shopping List
            {uncompletedShoppingCount > 0 && (
              <span className="nav-badge">{uncompletedShoppingCount}</span>
            )}
          </button>
        </nav>

        {/* Right Header Actions */}
        <div className="header-actions">
          {/* Global Search Button */}
          <button
            className="search-trigger-btn"
            onClick={openGlobalSearch}
            aria-label="Search recipes and ingredients"
            title="Search recipes (Ctrl+K)"
          >
            <Search size={16} />
            <span className="search-trigger-text">Search recipes...</span>
            <kbd className="search-shortcut">⌘K</kbd>
          </button>

          {/* Account / Preferences Button */}
          <button
            className="user-profile-btn"
            onClick={() => (isGuest ? openAuthModal() : openPreferencesModal())}
            title={isGuest ? 'Sign In / Register' : 'Preferences & Account'}
          >
            <div className="user-avatar-initial">
              {user?.name ? user.name.charAt(0).toUpperCase() : <UserIcon size={14} />}
            </div>
            <span style={{ maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {isGuest ? 'Sign In' : user?.name.split(' ')[0]}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
