import { renderHook, act } from '@testing-library/react';
import { useTheme } from './useTheme';

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  it('defaults to default theme', () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe('default');
  });

  it('toggles to chalkboard and persists', () => {
    const { result } = renderHook(() => useTheme());
    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.theme).toBe('chalkboard');
    expect(localStorage.getItem('theme')).toBe('chalkboard');
    expect(document.documentElement.getAttribute('data-theme')).toBe('chalkboard');
  });
});