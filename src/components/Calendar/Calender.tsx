/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
import React from 'react';

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
        <div className="flex flex-wrap gap-2">
          {days
            .filter((day) => day >= 1 && day <= 7)
            .map((day) => (
              <h1
                key={day}
                className="flex items-center justify-center rounded-full  p-1 bg-yellow-500 w-[30px] h-[30px] mobile-medium:w-[35px] mobile-medium:h-[35px] mobile-large:w-[40px] mobile-large:h-[40px]"
              >
                {day}
              </h1>
            ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {days
            .filter((day) => day >= 8 && day <= 14)
            .map((day) => (
              <h1
                key={day}
                className="flex items-center justify-center rounded-full p-1.5 bg-yellow-500  text-center w-[30px] h-[30px] mobile-medium:w-[35px] mobile-medium:h-[35px] mobile-large:w-[40px] mobile-large:h-[40px"
              >
                {day}
              </h1>
            ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {days
            .filter((day) => day >= 15 && day <= 21)
            .map((day) => (
              <h1
                key={day}
                className="flex items-center justify-center rounded-full p-1.5 bg-yellow-500  text-center w-[30px] h-[30px] mobile-medium:w-[35px] mobile-medium:h-[35px] mobile-large:w-[40px] mobile-large:h-[40px"
              >
                {day}
              </h1>
            ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {days
            .filter((day) => day >= 22 && day <= 28)
            .map((day) => (
              <h1
                key={day}
                className="flex items-center justify-center rounded-full p-1.5 bg-yellow-500  text-center w-[30px] h-[30px] mobile-medium:w-[35px] mobile-medium:h-[35px] mobile-large:w-[40px] mobile-large:h-[40px"
              >
                {day}
              </h1>
            ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {days.map((day) => {
            if (day >= 28) {
              return (
                <h1
                  key={day}
                  className="flex items-center justify-center rounded-full p-1.5 bg-yellow-500 text-center w-[30px] h-[30px] mobile-medium:w-[35px] mobile-medium:h-[35px] mobile-large:w-[40px] mobile-large:h-[40px"
                >
                  {day}
                </h1>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default Calender;
