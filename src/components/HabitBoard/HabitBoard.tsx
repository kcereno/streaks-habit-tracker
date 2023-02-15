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
            {/* New Habit Card */}
            <div className="container w-80  bg-base-200 text-center shadow-lg rounded flex flex-col items-center justify-center">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 60 60"
                >
                  <circle cx="30" cy="30" r="29" stroke="#fff" fill="none" />
                  <path fill="#fff" d="M31 17h-2v22h2v-22z" />
                  <path fill="#fff" d="M43 30v-2H17v2h26z" />
                </svg>
              </div>
              <div className="text-2xl font-bold mt-5">New Habit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HabitBoard;
