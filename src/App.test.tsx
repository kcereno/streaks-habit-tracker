import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
    const linkElement = screen.getByText(/StreakTracker/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders HabitBoard component when view is board', () => {});
  // it('renders HabitGrid component when view is grid', () => {});
});
