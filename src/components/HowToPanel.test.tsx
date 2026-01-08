import { render, fireEvent } from '@testing-library/react';
import { HowToPanel } from './HowToPanel';

describe('HowToPanel', () => {
  it('is hidden when closed and shows aria-hidden=true', () => {
    const { getByRole } = render(<HowToPanel isOpen={false} onToggle={() => {}} />);
    const panel = getByRole('region', { hidden: true });
    expect(panel).toHaveAttribute('aria-hidden', 'true');
  });

  it('calls onToggle when Escape key is pressed while open', () => {
    const onToggle = vi.fn();
    render(<HowToPanel isOpen={true} onToggle={onToggle} />);
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(onToggle).toHaveBeenCalled();
  });
});
