import React, { useState, useEffect } from 'react';
import { X, ArrowLeft, ArrowRight, Play, Pause, RotateCcw, Check, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Recipe } from '../../types';
import { useApp } from '../../context/AppContext';

interface CookingModeProps {
  recipe: Recipe;
  onExit: () => void;
}

export const CookingMode: React.FC<CookingModeProps> = ({ recipe, onExit }) => {
  const { addToast } = useApp();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Timer state for current step
  const currentStep = recipe.instructions[currentStepIndex];
  const stepDurationSecs = (currentStep?.durationMinutes || 0) * 60;

  const [timeLeft, setTimeLeft] = useState(stepDurationSecs);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Reset timer when step changes
  useEffect(() => {
    const newSecs = (recipe.instructions[currentStepIndex]?.durationMinutes || 0) * 60;
    setTimeLeft(newSecs);
    setIsTimerRunning(false);
  }, [currentStepIndex, recipe]);

  // Timer countdown effect
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            // Play gentle chime or notify
            addToast(`Timer finished for Step ${currentStepIndex + 1}!`, 'success');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft, currentStepIndex, addToast]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        if (!isCompleted) handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        onExit();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStepIndex, isCompleted]);

  const handleNext = () => {
    if (currentStepIndex < recipe.instructions.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      setIsCompleted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
      setIsCompleted(false);
    }
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="cooking-mode-overlay" role="dialog" aria-label="Cooking Mode">
      {/* Top Header */}
      <header className="cooking-mode-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={onExit}
            className="btn-ghost"
            style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)' }}
          >
            <X size={20} />
            <span>Exit Cooking Mode</span>
          </button>
        </div>

        <span className="cooking-mode-title">{recipe.title}</span>

        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)' }}>
          {isCompleted ? 'Finished' : `Step ${currentStepIndex + 1} of ${recipe.instructions.length}`}
        </span>
      </header>

      {/* Main Focus Content */}
      <main className="cooking-mode-content">
        {isCompleted ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'var(--status-match-high-bg)',
                color: 'var(--status-match-high-text)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
              }}
            >
              <Sparkles size={40} />
            </div>

            <h2 className="cooking-step-heading" style={{ marginBottom: '12px' }}>
              Bon Appétit!
            </h2>
            <p className="cooking-step-instruction" style={{ maxWidth: '500px', margin: '0 auto 32px' }}>
              You've completed all steps for <strong>{recipe.title}</strong>. Enjoy your fresh homemade meal!
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <button className="btn btn-secondary" onClick={() => { setIsCompleted(false); setCurrentStepIndex(0); }}>
                <RotateCcw size={16} /> Cook Again
              </button>
              <button className="btn btn-primary" onClick={onExit}>
                <Check size={16} /> Return to Recipes
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Step Progress Pills */}
            <div style={{ display: 'flex', gap: '6px', marginBottom: '24px' }}>
              {recipe.instructions.map((_, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: '6px',
                    borderRadius: '3px',
                    backgroundColor:
                      i < currentStepIndex
                        ? 'var(--brand-primary)'
                        : i === currentStepIndex
                        ? 'var(--accent-terracotta)'
                        : 'var(--border-subtle)',
                    transition: 'all var(--transition-fast)',
                  }}
                />
              ))}
            </div>

            {/* Step Indicator */}
            <div className="step-indicator">
              Step {currentStepIndex + 1} of {recipe.instructions.length}
            </div>

            {/* Step Title & Instruction */}
            <h2 className="cooking-step-heading">{currentStep.title}</h2>
            <p className="cooking-step-instruction">{currentStep.instruction}</p>

            {/* Chef Tip if available */}
            {currentStep.tip && (
              <div className="cooking-step-tip">
                <strong>Chef's Pro Tip:</strong> {currentStep.tip}
              </div>
            )}

            {/* Step Timer (if specified) */}
            {stepDurationSecs > 0 && (
              <div className="step-timer-box">
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block' }}>
                    Step Timer
                  </span>
                  <div className="timer-digits">{formatTimer(timeLeft)}</div>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    className={`btn btn-sm ${isTimerRunning ? 'btn-secondary' : 'btn-primary'}`}
                    onClick={() => setIsTimerRunning(!isTimerRunning)}
                  >
                    {isTimerRunning ? <Pause size={15} /> : <Play size={15} />}
                    {isTimerRunning ? 'Pause' : 'Start'}
                  </button>

                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => {
                      setIsTimerRunning(false);
                      setTimeLeft(stepDurationSecs);
                    }}
                    title="Reset timer"
                  >
                    <RotateCcw size={15} />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Bottom Sticky Controls */}
      <footer className="cooking-mode-footer">
        <button
          className="btn btn-secondary"
          onClick={handlePrev}
          disabled={currentStepIndex === 0 && !isCompleted}
          style={{ opacity: currentStepIndex === 0 && !isCompleted ? 0.4 : 1 }}
        >
          <ArrowLeft size={18} /> Previous Step
        </button>

        {!isCompleted && (
          <button className="btn btn-primary btn-lg" onClick={handleNext}>
            {currentStepIndex === recipe.instructions.length - 1 ? (
              <>
                <Check size={20} /> Finish Cooking
              </>
            ) : (
              <>
                Next Step <ArrowRight size={20} />
              </>
            )}
          </button>
        )}
      </footer>
    </div>
  );
};
