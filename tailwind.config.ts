import { defineConfig } from 'vite';
import type { Config } from 'tailwindcss';

// Tailwind config: add Schoolbell font and chalk colors
const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        chalkboard: 'var(--chalkboard-bg)',
        chalk: {
          ink: 'var(--chalk-ink)',
          green: 'var(--chalk-green)',
          yellow: 'var(--chalk-yellow)',
          gray: 'var(--chalk-gray)',
          border: 'var(--chalk-border)',
          faint: 'var(--chalk-faint)'
        }
      },
      fontFamily: {
        schoolbell: ['Schoolbell', 'cursive']
      },
      boxShadow: {
        'chalk-frame': 'inset 0 8px 20px rgba(0,0,0,0.35), 0 2px 6px rgba(0,0,0,0.25)'
      }
    }
  },
  plugins: []
};

export default config;