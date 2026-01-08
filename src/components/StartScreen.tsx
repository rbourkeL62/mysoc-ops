import { ChalkHero } from './ChalkHero';

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return <ChalkHero onStart={onStart} />;
}

