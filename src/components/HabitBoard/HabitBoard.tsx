import { useContext } from 'react';
import HabitCard from '../HabitCard/HabitCard';
import AppContext from '../../store/AppContext/app-context';

function HabitBoard() {
  const { habits, updateHabit } = useContext(AppContext);

  const habitCards = habits.map((habit) => (
    <HabitCard key={habit.id} habit={habit} updateHabit={updateHabit} />
  ));

  return (
    <section className="habit-board mx-2 tablet:mx-4" data-testid="habit-board">
      <div className="habit-cards-container flex flex-wrap gap-2 tablet:gap-4 justify-center max-w-[900px]">
        {habitCards}
      </div>
    </section>
  );
}

export default HabitBoard;
