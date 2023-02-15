import React from 'react';
import HabitGridItem from './HabitBoardItem/HabitBoardItem';
import { Habit } from '../../models/models';

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
    <div className="py-10" data-testid="HabitBoardView">
      <div className="card">
        <div className="card-body  flex flex-col">
          <div className="habit-grid grid grid-cols-2 gap-10 p-5">
            {habits.map((habit) => (
              <HabitGridItem key={habit.id} habit={habit} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HabitBoard;
