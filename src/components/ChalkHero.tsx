import React, { useState } from 'react';
import { HowToPanel } from './HowToPanel';

interface ChalkHeroProps {
  onStart: () => void;
}

export function ChalkHero({ onStart }: ChalkHeroProps) {
  const [isHowToOpen, setHowToOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-full p-6 bg-gray-50">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <div className="bg-gradient-to-b from-slate-50 to-white rounded-2xl p-8 shadow-lg">
            <h1 className="text-5xl font-schoolbell chalk-text mb-2">Be the Chalk Hero!</h1>
            <p className="text-lg text-muted-foreground mb-6 chalk-text">Draw your luck on a playful bingo chalkboard.</p>

            <div className="flex gap-3">
              <button
                onClick={onStart}
                className="chalk-cta px-6 py-3 rounded-lg font-semibold shadow-sm"
                aria-label="Start the game"
              >
                Start Class
              </button>

              <button
                id="howto-toggle"
                aria-expanded={isHowToOpen}
                aria-controls="howto-panel"
                onClick={() => setHowToOpen((s) => !s)}
                className="px-4 py-3 rounded-lg border border-gray-200 bg-white/60"
              >
                How to play
              </button>
            </div>
          </div>

          <HowToPanel isOpen={isHowToOpen} onToggle={() => setHowToOpen(false)} />
        </div>

        <div className="hidden md:block md:w-1/2">
          <img src="/assets/chalk-hero.svg" alt="Chalk hero illustration" className="w-full" />
        </div>
      </div>
    </div>
  );
}
