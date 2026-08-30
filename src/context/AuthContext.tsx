import React, { createContext, useContext, useState } from 'react';
import { UserProfile, DietaryTag } from '../types';
import { getStoredUser, setStoredUser } from '../utils/storage';

interface AuthContextType {
  user: UserProfile | null;
  isGuest: boolean;
  login: (name: string, email: string) => void;
  signup: (name: string, email: string) => void;
  logout: () => void;
  updatePreferences: (prefs: {
    dietaryPreferences?: DietaryTag[];
    allergies?: string[];
    skillLevel?: 'Beginner' | 'Intermediate' | 'Advanced';
    maxCookingTime?: number;
  }) => void;
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  isPreferencesModalOpen: boolean;
  openPreferencesModal: () => void;
  closePreferencesModal: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DEFAULT_GUEST: UserProfile = {
  id: 'guest',
  name: 'Home Chef',
  email: 'guest@cookpro.app',
  dietaryPreferences: [],
  allergies: [],
  skillLevel: 'Intermediate',
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => getStoredUser() || DEFAULT_GUEST);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isPreferencesModalOpen, setIsPreferencesModalOpen] = useState(false);

  const isGuest = user?.id === 'guest';

  const login = (name: string, email: string) => {
    const newUser: UserProfile = {
      id: 'user_' + Math.random().toString(36).substring(2, 9),
      name: name || 'Chef ' + email.split('@')[0],
      email,
      dietaryPreferences: user?.dietaryPreferences || [],
      allergies: user?.allergies || [],
      skillLevel: user?.skillLevel || 'Intermediate',
    };
    setUser(newUser);
    setStoredUser(newUser);
    setIsAuthModalOpen(false);
  };

  const signup = (name: string, email: string) => {
    login(name, email);
  };

  const logout = () => {
    setUser(DEFAULT_GUEST);
    setStoredUser(null);
  };

  const updatePreferences = (prefs: {
    dietaryPreferences?: DietaryTag[];
    allergies?: string[];
    skillLevel?: 'Beginner' | 'Intermediate' | 'Advanced';
    maxCookingTime?: number;
  }) => {
    if (!user) return;
    const updated: UserProfile = {
      ...user,
      ...prefs,
    };
    setUser(updated);
    if (!isGuest) {
      setStoredUser(updated);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isGuest,
        login,
        signup,
        logout,
        updatePreferences,
        isAuthModalOpen,
        openAuthModal: () => setIsAuthModalOpen(true),
        closeAuthModal: () => setIsAuthModalOpen(false),
        isPreferencesModalOpen,
        openPreferencesModal: () => setIsPreferencesModalOpen(true),
        closePreferencesModal: () => setIsPreferencesModalOpen(false),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
