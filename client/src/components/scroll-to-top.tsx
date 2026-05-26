'use client';

import { useEffect } from 'react';

export function ScrollToTop() {
  useEffect(() => {
    // Disable browser scroll restoration so page always starts at top on reload
    if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return null;
}
