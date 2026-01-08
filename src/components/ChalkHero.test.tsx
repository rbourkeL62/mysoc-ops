import { render, fireEvent } from '@testing-library/react';
import { ChalkHero } from './ChalkHero';
import * as ThemeHook from '../hooks/useTheme';

describe('ChalkHero', () => {
  it('renders and matches snapshot', () => {
    vi.spyOn(ThemeHook, 'useTheme').mockReturnValue({ theme: 'chalkboard', toggleTheme: vi.fn(), setTheme: vi.fn() } as any);
    const { container } = render(<ChalkHero onStart={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  it('calls onStart when Start Class is clicked', () => {
    const onStart = vi.fn();
    const { getByRole } = render(<ChalkHero onStart={onStart} />);
    const btn = getByRole('button', { name: /start the game/i });
    fireEvent.click(btn);
    expect(onStart).toHaveBeenCalled();
  });
});
