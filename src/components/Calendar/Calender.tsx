/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
import React from 'react';
import Day from '../Day/Day';

interface Props {
  totalDays: number;
}

function Calender({ totalDays }: Props) {
  let days: number[] = [];

  for (let i = 1; i <= totalDays; i++) {
    days.push(i);
  }

  return (
    <div className="flex justify-center mt-2">
      <div className="flex flex-col gap-2 text-center text-white mt-2">
        <div className="flex flex-wrap gap-2 w-[258px] mobile-medium:w-[293px] mobile-large:w-[328px]">
          {days.map((day) => (
            <Day key={day} day={day} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calender;
