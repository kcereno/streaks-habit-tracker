/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/button-has-type */
import React from 'react';
// import HabitGridItem from './HabitBoardItem/HabitBoardItem';
import { HabitI } from '../../models/models';
import HabitCard from '../HabitCard/HabitCard';

interface Props {
  habits: HabitI[];
  updateHabit: (updatedHabit: HabitI) => void;
}

function HabitBoard({ habits, updateHabit }: Props) {
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
