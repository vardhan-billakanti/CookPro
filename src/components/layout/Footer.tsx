import React from 'react';
import { ChefHat, Heart } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Footer: React.FC = () => {
  const { setActiveTab } = useApp();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Col */}
          <div>
            <div className="header-brand" style={{ marginBottom: '12px' }}>
              <div className="brand-icon-wrapper" style={{ width: '32px', height: '32px' }}>
                <ChefHat size={18} strokeWidth={2.3} />
              </div>
              <span className="brand-title">
                <span>Cook</span>
                <span className="brand-title-accent">Pro</span>
              </span>
            </div>
            <p className="footer-brand-desc">
              Turn the ingredients you already have at home into something delicious. Reduce food waste, cook smarter, and discover great meals effortlessly.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="footer-nav-title">Explore</h4>
            <div className="footer-links">
              <button className="footer-link" onClick={() => { setActiveTab('home'); window.scrollTo(0, 0); }}>
                Home
              </button>
              <button className="footer-link" onClick={() => { setActiveTab('find-recipes'); window.scrollTo(0, 0); }}>
                Find Recipes
              </button>
              <button className="footer-link" onClick={() => { setActiveTab('cookbook'); window.scrollTo(0, 0); }}>
                My Cookbook
              </button>
              <button className="footer-link" onClick={() => { setActiveTab('pantry'); window.scrollTo(0, 0); }}>
                My Pantry
              </button>
              <button className="footer-link" onClick={() => { setActiveTab('shopping-list'); window.scrollTo(0, 0); }}>
                Shopping List
              </button>
            </div>
          </div>

          {/* Cooking Tips & Principles */}
          <div>
            <h4 className="footer-nav-title">Product Promise</h4>
            <div className="footer-links">
              <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                ✓ 100% Real, tested recipes<br />
                ✓ Exact ingredient measurements<br />
                ✓ Zero food waste optimization<br />
                ✓ Distraction-free kitchen mode
              </span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} CookPro App. All rights reserved.</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            Cook with purpose and delight <Heart size={14} fill="var(--accent-terracotta)" stroke="none" />
          </span>
        </div>
      </div>
    </footer>
  );
};
