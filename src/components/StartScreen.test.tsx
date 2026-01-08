import { render, fireEvent } from '@testing-library/react';
import { StartScreen } from './StartScreen';

describe('StartScreen integration', () => {
  it('renders and Start triggers onStart', () => {
    const onStart = vi.fn();
    const { getByRole } = render(<StartScreen onStart={onStart} />);
    const btn = getByRole('button', { name: /start the game/i });
    fireEvent.click(btn);
    expect(onStart).toHaveBeenCalled();
  });
});
