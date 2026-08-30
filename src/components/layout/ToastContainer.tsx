import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map(toast => (
        <div key={toast.id} className="toast-item">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
            {toast.type === 'error' ? (
              <AlertCircle size={18} color="#EF4444" />
            ) : toast.type === 'info' ? (
              <Info size={18} color="#8DA792" />
            ) : (
              <CheckCircle2 size={18} color="#10B981" />
            )}
            <span>{toast.message}</span>
          </div>

          {toast.actionLabel && toast.onAction && (
            <button
              className="toast-action-btn"
              onClick={() => {
                toast.onAction?.();
                removeToast(toast.id);
              }}
            >
              {toast.actionLabel}
            </button>
          )}

          <button
            onClick={() => removeToast(toast.id)}
            style={{ color: '#A8A29E', padding: '2px' }}
            aria-label="Close notification"
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};
