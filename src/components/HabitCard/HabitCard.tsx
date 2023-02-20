/* eslint-disable react/button-has-type */
import React from 'react';

function HabitCard() {
  return (
    <div className="card w-2/5 grow card-compact bg-base-200 shadow-xl ">
      <div className="flex justify-end">
        <button className="btn btn-ghost text-accent text-center text-xs">
          Select
        </button>
      </div>
      <div className="py-4 tablet:py-6 max:py-8">
        {/* Habit Details */}
        <div className="text-center">
          <h1 className="text-4xl tablet:text-5xl">📝</h1>
          <h2 className="text-xl font-bold mobile-medium:text-2xl tablet:text-3xl">
            Journal
          </h2>
          <p className="text-gray-400">Once A Day</p>
          {/* Streak Details */}
          <div className="hidden mobile-medium:flex justify-center gap-4 ">
            <div className="">
              <p>Current: 2</p>
            </div>
            <div className="">
              <p>Longest: 4</p>
            </div>
          </div>
        </div>
        {/* Habit Progress */}
        <div className="mt-5 text-center">
          <p>1/2</p>
          <progress
            className="progress progress-primary w-3/4"
            value="70"
            max="100"
          />
        </div>
        <div className="progress-buttons flex justify-center gap-1 tablet:gap-3 mt-4">
          <button
            type="button"
            className="btn btn-square btn-outline btn-sm tablet:btn-md"
          >
            -
          </button>
          <button
            type="button"
            className="btn btn-square  btn-outline btn-sm tablet:btn-md"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default HabitCard;
