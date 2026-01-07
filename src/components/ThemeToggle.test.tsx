import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from './ThemeToggle';
import * as ThemeHook from '../hooks/useTheme';

describe('ThemeToggle', () => {
  it('renders and toggles theme', () => {
    const mockToggle = vi.fn();
    vi.spyOn(ThemeHook, 'useTheme').mockReturnValue({ theme: 'default', toggleTheme: mockToggle, setTheme: vi.fn() } as any);

    render(<ThemeToggle />);
    const btn = screen.getByRole('switch');
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);
    expect(mockToggle).toHaveBeenCalled();
  });
});