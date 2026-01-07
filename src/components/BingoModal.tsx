import { useEffect, useRef } from 'react';

interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const el = containerRef.current;
    const focusable = el?.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])') as HTMLElement | null;
    focusable?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onDismiss();
      if (e.key === 'Tab') {
        // simple focus trap: keep focus inside modal
        const focusables = el?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0] as HTMLElement;
        const last = focusables[focusables.length - 1] as HTMLElement;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      previouslyFocused.current?.focus();
    };
  }, [onDismiss]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="bingo-title"
        className="chalk-modal bg-white rounded-xl p-6 max-w-xs w-full text-center shadow-xl animate-[bounce_0.5s_ease-out]"
      >
        <div className="text-5xl mb-4" aria-hidden>
          🎉
        </div>
        <h2 id="bingo-title" className="text-3xl font-bold text-amber-500 mb-2">
          BINGO!
        </h2>
        <p className="text-gray-600 mb-6">You completed a line!</p>

        <button
          onClick={onDismiss}
          className="w-full bg-accent text-white font-semibold py-3 px-6 rounded-lg active:bg-accent-light transition-colors"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
