import { useEffect, useState, useCallback } from 'react';

type Theme = 'default' | 'chalkboard';
const STORAGE_KEY = 'theme';
const LEGACY_KEY_BOOLEAN = 'chalkboardOn';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'default';
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw === 'chalkboard' || raw === 'default') return raw as Theme;
      // migration from legacy boolean key
      const legacy = localStorage.getItem(LEGACY_KEY_BOOLEAN);
      if (legacy === 'true') {
        localStorage.setItem(STORAGE_KEY, 'chalkboard');
        localStorage.removeItem(LEGACY_KEY_BOOLEAN);
        return 'chalkboard';
      }
    } catch {
      // ignore
    }
    return 'default';
  });

  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (theme === 'chalkboard') {
      document.documentElement.setAttribute('data-theme', 'chalkboard');
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', '#192c22');
    } else {
      document.documentElement.removeAttribute('data-theme');
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', '#2563eb');
    }
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'chalkboard' ? 'default' : 'chalkboard'));
  }, []);

  return { theme, setTheme, toggleTheme } as const;
}
