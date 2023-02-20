import { screen, render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders HabitBoard component initially', () => {
    render(<App />);

    const habitBoard = screen.getByTestId('habit-board');
    expect(habitBoard).toBeInTheDocument();
  });
});
