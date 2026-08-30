import React, { useState } from 'react';
import { X, LogOut, Check } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { DietaryTag } from '../../types';
import { useApp } from '../../context/AppContext';

const DIETARY_OPTIONS: DietaryTag[] = [
  'Vegetarian',
  'Vegan',
  'Gluten-Free',
  'Dairy-Free',
  'Low-Carb',
  'High-Protein',
];

const SKILL_LEVELS = ['Beginner', 'Intermediate', 'Advanced'] as const;

export const PreferencesModal: React.FC = () => {
  const { user, isPreferencesModalOpen, closePreferencesModal, updatePreferences, logout } = useAuth();
  const { addToast } = useApp();

  const [dietary, setDietary] = useState<DietaryTag[]>(user?.dietaryPreferences || []);
  const [skill, setSkill] = useState<'Beginner' | 'Intermediate' | 'Advanced'>(user?.skillLevel || 'Intermediate');
  const [allergyInput, setAllergyInput] = useState('');
  const [allergies, setAllergies] = useState<string[]>(user?.allergies || []);

  if (!isPreferencesModalOpen) return null;

  const toggleDiet = (d: DietaryTag) => {
    setDietary(prev => (prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]));
  };

  const addAllergy = () => {
    const trimmed = allergyInput.trim();
    if (trimmed && !allergies.includes(trimmed)) {
      setAllergies(prev => [...prev, trimmed]);
      setAllergyInput('');
    }
  };

  const removeAllergy = (name: string) => {
    setAllergies(prev => prev.filter(a => a !== name));
  };

  const handleSave = () => {
    updatePreferences({
      dietaryPreferences: dietary,
      skillLevel: skill,
      allergies,
    });
    addToast('Preferences saved successfully', 'success');
    closePreferencesModal();
  };

  const handleLogout = () => {
    logout();
    addToast('Signed out of CookPro', 'info');
    closePreferencesModal();
  };

  return (
    <div className="modal-backdrop" onClick={closePreferencesModal}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()} style={{ maxWidth: '500px' }}>
        <div className="modal-header">
          <h3 className="modal-title">Chef Profile & Preferences</h3>
          <button onClick={closePreferencesModal} className="btn-ghost" style={{ padding: '4px' }}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {/* User Info Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 16px',
              backgroundColor: 'var(--bg-surface-subtle)',
              borderRadius: 'var(--radius-md)',
              marginBottom: '20px',
            }}
          >
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>
                {user?.name}
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                {user?.email}
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-ghost btn-sm"
              style={{ color: 'var(--accent-terracotta)' }}
            >
              <LogOut size={14} /> Sign Out
            </button>
          </div>

          {/* Dietary Preferences */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '8px' }}>
              Dietary Lifestyle
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {DIETARY_OPTIONS.map(d => {
                const isSelected = dietary.includes(d);
                return (
                  <button
                    key={d}
                    type="button"
                    onClick={() => toggleDiet(d)}
                    className="badge"
                    style={{
                      backgroundColor: isSelected ? 'var(--brand-primary)' : 'var(--bg-main)',
                      color: isSelected ? '#FFFFFF' : 'var(--text-secondary)',
                      border: isSelected ? '1px solid var(--brand-primary)' : '1px solid var(--border-light)',
                      padding: '6px 12px',
                      cursor: 'pointer',
                      fontSize: '0.8125rem',
                    }}
                  >
                    {isSelected && <Check size={12} strokeWidth={3} />}
                    {d}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Skill Level */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '8px' }}>
              Cooking Experience Level
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
              {SKILL_LEVELS.map(level => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setSkill(level)}
                  className={`btn btn-sm ${skill === level ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ borderRadius: 'var(--radius-sm)' }}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Allergy / Avoided Ingredients */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>
              Ingredients to Avoid / Allergies
            </label>
            <p style={{ fontSize: '0.78125rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
              Always review recipe labels carefully.
            </p>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              <input
                type="text"
                placeholder="e.g. Peanuts, Shellfish, Mushrooms"
                value={allergyInput}
                onChange={e => setAllergyInput(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addAllergy();
                  }
                }}
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  backgroundColor: 'var(--bg-main)',
                  outline: 'none',
                  fontSize: '0.875rem',
                }}
              />
              <button type="button" className="btn btn-secondary btn-sm" onClick={addAllergy}>
                Add
              </button>
            </div>

            {allergies.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {allergies.map(a => (
                  <span
                    key={a}
                    className="badge badge-terracotta"
                    style={{ padding: '4px 10px', fontSize: '0.78125rem' }}
                  >
                    {a}
                    <button
                      onClick={() => removeAllergy(a)}
                      style={{ marginLeft: '4px', cursor: 'pointer', color: 'var(--accent-terracotta)' }}
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <button className="btn btn-secondary" onClick={closePreferencesModal}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={handleSave}>
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
