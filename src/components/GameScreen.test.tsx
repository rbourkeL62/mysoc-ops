import { render } from '@testing-library/react';
import { GameScreen } from './GameScreen';
import * as ThemeHook from '../hooks/useTheme';

const sampleBoard = new Array(25).fill(null).map((_, i) => ({ id: i, text: `Item ${i}`, isMarked: false, isFreeSpace: false }));

describe('GameScreen visuals', () => {
  it('renders with chalkboard theme', () => {
    vi.spyOn(ThemeHook, 'useTheme').mockReturnValue({ theme: 'chalkboard', toggleTheme: vi.fn(), setTheme: vi.fn() } as any);
    const { container } = render(
      <GameScreen
        board={sampleBoard}
        winningSquareIds={new Set()}
        hasBingo={false}
        onSquareClick={() => {}}
        onReset={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });
});