/* eslint-disable react/button-has-type */
import React from 'react';

function HabitGridItem() {
  const days: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl mx-2">
      {/* Content Container */}
      <div className="p-4">
        <h2 className="font-bold text-xl text-center">Journal</h2>
        {/* Grid Dates */}
        <div className="mt-4">
          {/* Calendar Controls */}
          <div className="flex justify-center gap-4">
            <button className="">«</button>
            <div className="text-center">February 2020</div>
            <button className="">»</button>
          </div>
          {/* Grid Calendar */}
          <div className="flex justify-center mt-2">
            <div className="flex flex-col gap-2 text-center text-white mt-2">
              <div className="flex flex-wrap gap-2">
                {days
                  .filter((day) => day >= 1 && day <= 7)
                  .map((day) => (
                    <h1 className="rounded-full bg-yellow-500 inline-block text-center w-[25px] h-[25px] ">
                      {day}
                    </h1>
                  ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {days
                  .filter((day) => day >= 8 && day <= 14)
                  .map((day) => (
                    <h1 className="rounded-full bg-yellow-500 inline-block text-center w-[25px] h-[25px] ">
                      {day}
                    </h1>
                  ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {days
                  .filter((day) => day >= 22 && day <= 28)
                  .map((day) => (
                    <h1 className="rounded-full bg-yellow-500 inline-block text-center w-[25px] h-[25px] ">
                      {day}
                    </h1>
                  ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {days
                  .filter((day) => day >= 22 && day <= 28)
                  .map((day) => (
                    <h1 className="rounded-full bg-yellow-500 inline-block text-center w-[25px] h-[25px] ">
                      {day}
                    </h1>
                  ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {days.map((day) => {
                  if (day >= 28) {
                    return (
                      <h1 className="rounded-full bg-yellow-500  inline-block text-center w-[25px] h-[25px] ">
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
      </div>
    </div>
  );
}

export default HabitGridItem;
