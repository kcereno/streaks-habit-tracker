import React from 'react';
import HabitGridItem from '../HabitBoardItem/HabitBoardItem';
import { Habit } from '../../models/models';

function HabitBoardView() {
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
    <div className="indicator">
      <div className="indicator-item indicator-bottom">
        <button className="btn btn-primary" type="button">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path
              d="M12 5V19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 12H5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="card bg-base-200 shadow-xl ">
        <div className="card-body  flex flex-col">
          <div className="habit-grid grid grid-cols-2 gap-10 p-5">
            {habits.map((habit) => (
              <HabitGridItem habit={habit} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HabitBoardView;
