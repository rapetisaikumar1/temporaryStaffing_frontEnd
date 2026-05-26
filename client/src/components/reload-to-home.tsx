'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function ReloadToHome() {
  const router = useRouter();

  useEffect(() => {
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    if (nav?.type === 'reload') {
      router.replace('/');
    }
  }, [router]);

  return null;
}
