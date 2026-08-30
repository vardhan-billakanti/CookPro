import React, { useState } from 'react';
import { Utensils } from 'lucide-react';

interface RecipeImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  aspectRatio?: '4/3' | '16/9' | '1/1' | 'auto';
  fallbackSrc?: string;
  cuisine?: string;
  loading?: 'lazy' | 'eager';
}

// Curated high-reliability culinary fallbacks by cuisine/theme
const CUISINE_FALLBACKS: Record<string, string> = {
  Italian: 'https://images.unsplash.com/photo-1621996346565-e3d5d62811b4?auto=format&fit=crop&w=1000&q=80',
  Asian: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1000&q=80',
  Mediterranean: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80',
  Mexican: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=1000&q=80',
  American: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1000&q=80',
  French: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1000&q=80',
  Indian: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1000&q=80',
  Spanish: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=1000&q=80',
  Default: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80',
};

export const RecipeImage: React.FC<RecipeImageProps> = ({
  src,
  alt,
  className = '',
  style = {},
  aspectRatio = '4/3',
  fallbackSrc,
  cuisine,
  loading = 'lazy',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [triedFallback, setTriedFallback] = useState(false);

  const getCuisineFallback = () => {
    if (cuisine && CUISINE_FALLBACKS[cuisine]) {
      return CUISINE_FALLBACKS[cuisine];
    }
    return fallbackSrc || CUISINE_FALLBACKS.Default;
  };

  const handleImageError = () => {
    if (!triedFallback) {
      setTriedFallback(true);
    } else {
      setHasError(true);
    }
  };

  const currentSrc = triedFallback ? getCuisineFallback() : src || getCuisineFallback();

  return (
    <div
      className={`recipe-img-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        aspectRatio: aspectRatio === 'auto' ? undefined : aspectRatio.replace('/', ' / '),
        backgroundColor: 'var(--bg-surface-subtle)',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Skeleton while image is loading */}
      {!isLoaded && !hasError && (
        <div
          className="skeleton"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
          }}
        />
      )}

      {/* Primary / Fallback Image */}
      {!hasError ? (
        <img
          src={currentSrc}
          alt={alt || 'CookPro Delicious Recipe'}
          loading={loading}
          onError={handleImageError}
          onLoad={() => setIsLoaded(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      ) : (
        /* Final Culinary SVG Fallback - Never a broken browser icon */
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--brand-primary-light)',
            color: 'var(--brand-primary)',
            padding: '16px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'rgba(36, 75, 52, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '8px',
            }}
          >
            <Utensils size={22} />
          </div>
          <span style={{ fontSize: '0.8125rem', fontWeight: 600 }}>{alt}</span>
        </div>
      )}
    </div>
  );
};
