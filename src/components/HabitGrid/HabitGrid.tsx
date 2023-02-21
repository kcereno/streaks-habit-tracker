import { useContext } from 'react';
import AppContext from '../../store/AppContext/app-context';
import HabitGridItem from '../HabitGridItem/HabitGridItem';

function HabitGrid() {
  const { habits } = useContext(AppContext);
  return (
    <section className="" data-testid="habit-grid">
      <div className="habit-grid-container flex flex-wrap gap-4">
        {habits.map((habit) => (
          <HabitGridItem key={habit.id} habit={habit} />
        ))}
      </div>
    </section>
  );
}

export default HabitGrid;
