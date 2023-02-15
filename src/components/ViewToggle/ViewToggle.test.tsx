import { render, screen, fireEvent } from '@testing-library/react';
import ViewToggle from './ViewToggle';
import { ViewTypes } from '../../models/models';

describe('ViewToggle', () => {
  describe('Grid Button Click', () => {
    it('sets view state to "grid" when clicked', () => {
      let mockState: ViewTypes = 'board';
      const mockUpdateView = () => {
        mockState = 'grid';
      };

      render(<ViewToggle view={mockState} updateView={mockUpdateView} />);

      const gridButton = screen.getByText('grid');
      fireEvent.click(gridButton);

      expect(mockState).toBe('grid');
    });
    it('to have "btn-active" if view is "grid"', () => {
      const mockState: ViewTypes = 'grid';
      const mockUpdateView = () => {};

      render(<ViewToggle view={mockState} updateView={mockUpdateView} />);

      const gridButton = screen.getByText('grid');

      expect(gridButton).toHaveClass('btn-active');
    });
  });
});
