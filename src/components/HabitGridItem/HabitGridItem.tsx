import React from 'react';

function HabitGridItem() {
  const days: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  return (
    <div className="card card-compact w-auto bg-base-100 shadow-xl my-4">
      <div className="card-body ">
        <h2 className="card-title text-center ">Journal</h2>

        <div className="flex flex-col gap-2 text-center text-white">
          <div className="flex gap-1">
            {days.map((day) => {
              if (day >= 1 && day <= 10) {
                return (
                  <h1 className="rounded-full bg-yellow-500 p-1 inline-block text-center w-[25px] h-[25px] ">
                    {day}
                  </h1>
                );
              }
              return null;
            })}
          </div>
          <div className="flex gap-1">
            {days.map((day) => {
              if (day >= 11 && day <= 20) {
                return (
                  <h1 className="rounded-full bg-yellow-500 p-1 inline-block text-center w-[25px] h-[25px] ">
                    {day}
                  </h1>
                );
              }
              return null;
            })}
          </div>
          <div className="flex gap-1">
            {days.map((day) => {
              if (day >= 21 && day <= 30) {
                return (
                  <h1 className="rounded-full bg-yellow-500 p-1 inline-block text-center w-[25px] h-[25px] ">
                    {day}
                  </h1>
                );
              }
              return null;
            })}
          </div>
          <div className="flex gap-1">
            {days.map((day) => {
              if (day > 30) {
                return (
                  <h1 className="rounded-full bg-yellow-500 p-1 inline-block text-center w-[25px] h-[25px] ">
                    {day}
                  </h1>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HabitGridItem;
