/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
import React from 'react';
import Day from '../Day/Day';
import { getDaysInMonth } from '../../utils/functions';
import { HabitLogI } from '../../models/models';

interface Props {
  date: {
    month: number;
    year: number;
  };
  habitLog: HabitLogI[];
}

function Calender({ habitLog, date: { month, year } }: Props) {
  const daysInMonth = getDaysInMonth(month, year);

  let days: number[] = [];

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const generateDateId = (y: number, m: number, d: number) => {
    const convertedDay = d.toString().length === 1 ? `0${d}` : d;
    const convertedMonth = m.toString().length === 1 ? `0${m}` : m;

    return `${y}-${convertedMonth}-${convertedDay}`;
  };

  return (
    <div className="flex justify-center mt-2">
      <div className="flex flex-col gap-2 text-center text-white mt-2">
        <div className="flex flex-wrap gap-2 w-[258px] mobile-medium:w-[293px] mobile-large:w-[328px]">
          {days.map((day) => {
            const dateId = generateDateId(year, month, day);
            const isCompleted = habitLog.some(
              (habit) => habit.date === dateId && habit.completed,
            );

            return <Day key={day} id="4" day={day} completed={isCompleted} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Calender;
