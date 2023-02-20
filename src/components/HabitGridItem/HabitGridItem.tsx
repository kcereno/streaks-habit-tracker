/* eslint-disable react/button-has-type */
import React from 'react';

function HabitGridItem() {
  const days: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  return (
    <div className="card card-compact grow w-full bg-base-100 shadow-xl mx-2 tablet:w-auto">
      {/* Content Container */}
      <div className="py-5 tablet:px-4">
        <h2 className="font-bold text-3xl text-center">Journal</h2>
        <div className="flex justify-center gap-4 text-slate-500">
          <p>Current: 4</p>
          <p>Longest:10</p>
        </div>
        {/* Grid Dates */}
        <div className="mt-4 ">
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
                    <h1 className="flex items-center justify-center rounded-full  p-1 bg-yellow-500 w-[30px] h-[30px] mobile-medium:w-[35px] mobile-medium:h-[35px] mobile-large:w-[40px] mobile-large:h-[40px]">
                      {day}
                    </h1>
                  ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {days
                  .filter((day) => day >= 8 && day <= 14)
                  .map((day) => (
                    <h1 className="flex items-center justify-center rounded-full p-1.5 bg-yellow-500  text-center w-[30px] h-[30px] mobile-medium:w-[35px] mobile-medium:h-[35px] mobile-large:w-[40px] mobile-large:h-[40px">
                      {day}
                    </h1>
                  ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {days
                  .filter((day) => day >= 15 && day <= 21)
                  .map((day) => (
                    <h1 className="flex items-center justify-center rounded-full p-1.5 bg-yellow-500  text-center w-[30px] h-[30px] mobile-medium:w-[35px] mobile-medium:h-[35px] mobile-large:w-[40px] mobile-large:h-[40px">
                      {day}
                    </h1>
                  ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {days
                  .filter((day) => day >= 22 && day <= 28)
                  .map((day) => (
                    <h1 className="flex items-center justify-center rounded-full p-1.5 bg-yellow-500  text-center w-[30px] h-[30px] mobile-medium:w-[35px] mobile-medium:h-[35px] mobile-large:w-[40px] mobile-large:h-[40px">
                      {day}
                    </h1>
                  ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {days.map((day) => {
                  if (day >= 28) {
                    return (
                      <h1 className="flex items-center justify-center rounded-full p-1.5 bg-yellow-500 text-center w-[30px] h-[30px] mobile-medium:w-[35px] mobile-medium:h-[35px] mobile-large:w-[40px] mobile-large:h-[40px">
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
