/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/button-has-type */
import React from 'react';
// import HabitGridItem from './HabitBoardItem/HabitBoardItem';
import { Habit } from '../../models/models';
import HabitCard from '../HabitCard/HabitCard';

function HabitBoard() {
  const habits: Habit[] = [
    {
      id: 1,
      name: 'Exercise',
      icon: '💪',
      frequency: 1,
    },
    {
      id: 2,
      name: 'Meditate',
      icon: '🧘‍♂️',
      frequency: 1,
    },
    {
      id: 3,
      name: 'Drink water',
      icon: '💦',
      frequency: 8,
    },
    {
      id: 4,
      name: 'Reading',
      icon: '📖',
      frequency: 2,
    },
    {
      id: 5,
      name: 'Journal',
      icon: '📝',
      frequency: 2,
    },
  ];

  return (
    <section className="habit-board mx-2 tablet:mx-4" data-testid="HabitBoard">
      <div className="habit-cards-container flex flex-wrap gap-2 tablet:gap-4 justify-center max-w-[900px]">
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
      </div>
    </section>
  );
}

export default HabitBoard;
