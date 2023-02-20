import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';

describe('ViewToggle', () => {
  it('renders HabitGrid component when Grid button is clicked', () => {
    render(<App />);

    const gridButton = screen.getByRole('button', { name: /grid/i });

    fireEvent.click(gridButton);

    const gridComponent = screen.getByTestId('habit-grid');
    const habitComponent = screen.queryByTestId('habit-board');

    expect(gridComponent).toBeInTheDocument();
    expect(habitComponent).not.toBeInTheDocument();
  });

  it('renders HabitBoard component when Board button is clicked', () => {
    render(<App />);

    const boardButton = screen.getByRole('button', { name: /board/i });

    fireEvent.click(boardButton);

    const boardComponent = screen.getByTestId('habit-board');
    const gridComponent = screen.queryByTestId('habit-grid');

    expect(boardComponent).toBeInTheDocument();
    expect(gridComponent).not.toBeInTheDocument();
  });
});
