import React, { useEffect, useRef } from 'react';

interface HowToPanelProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function HowToPanel({ isOpen, onToggle }: HowToPanelProps) {
  const panelRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) {
        onToggle();
        const trigger = document.getElementById('howto-toggle');
        if (trigger) (trigger as HTMLElement).focus();
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onToggle]);

  return (
    <section
      id="howto-panel"
      role="region"
      aria-hidden={!isOpen}
      ref={panelRef}
      className={`mt-4 bg-white rounded-lg p-4 border border-gray-200 transition-all overflow-hidden ${
        isOpen ? 'max-h-96' : 'max-h-0 p-0 border-0'
      }`}
    >
      <div className="p-3">
        <h2 className="font-semibold text-gray-800 mb-3">How to play</h2>
        <ul className="text-left text-gray-600 text-sm space-y-2">
          <li>• Pick a card — mark a match when someone fits the description.</li>
          <li>• Aim for a straight line — shout “Bingo!” to win.</li>
          <li>• Use the theme toggle to switch to chalkboard vibes.</li>
          <li>• Press <kbd className="rounded px-1 bg-gray-100">?</kbd> anytime for help.</li>
        </ul>
      </div>
    </section>
  );
}
