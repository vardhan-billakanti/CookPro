import React, { useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileNav } from './components/layout/MobileNav';
import { ToastContainer } from './components/layout/ToastContainer';
import { SearchModal } from './components/common/SearchModal';
import { CookingMode } from './components/recipes/CookingMode';
import { AuthModal } from './components/auth/AuthModal';
import { PreferencesModal } from './components/auth/PreferencesModal';
import { HomeView } from './views/HomeView';
import { FindRecipesView } from './views/FindRecipesView';
import { RecipeDetailView } from './views/RecipeDetailView';
import { PantryView } from './views/PantryView';
import { CookbookView } from './views/CookbookView';
import { ShoppingListView } from './views/ShoppingListView';
import { useApp } from './context/AppContext';

export const App: React.FC = () => {
  const { activeTab, cookingRecipe, exitCookingMode } = useApp();

  // Scroll to top whenever tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <>
      <Header />

      <main className="main-content" id="main-content">
        {activeTab === 'home' && <HomeView />}
        {activeTab === 'find-recipes' && <FindRecipesView />}
        {activeTab === 'recipe-detail' && <RecipeDetailView />}
        {activeTab === 'pantry' && <PantryView />}
        {activeTab === 'cookbook' && <CookbookView />}
        {activeTab === 'shopping-list' && <ShoppingListView />}
      </main>

      <Footer />

      <MobileNav />

      {/* Global Interactive Modals & Overlays */}
      <SearchModal />
      <AuthModal />
      <PreferencesModal />
      <ToastContainer />

      {/* Distraction-Free Fullscreen Cooking Mode */}
      {cookingRecipe && (
        <CookingMode recipe={cookingRecipe} onExit={exitCookingMode} />
      )}
    </>
  );
};

export default App;
