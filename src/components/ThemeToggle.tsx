import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isOn = theme === 'chalkboard';

  return (
    <button
      role="switch"
      aria-checked={isOn}
      aria-label="Toggle Chalkboard theme"
      onClick={toggleTheme}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTheme();
        }
      }}
      className="flex items-center gap-2 px-2 py-1 rounded focus-visible:ring-2 focus-visible:ring-amber-400"
    >
      <span className="text-sm">Chalkboard</span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className={`${isOn ? 'text-amber-400' : 'text-gray-400'}`}
      >
        <rect x="3" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 17l-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  );
}
