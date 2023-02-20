import React from 'react';

function HabitCard() {
  return (
    <div className="card w-2/5 grow card-compact bg-base-200 shadow-xl">
      <div className="card-body">
        {/* Streak Details */}
        <div className="hidden mobile-medium:flex justify-between">
          <div className="">
            <p>Longest: 4</p>
          </div>
          <div className="">
            <p>Current: 2</p>
          </div>
        </div>
        {/* Habit Details */}
        <div className="text-center my-4">
          <h1 className="text-4xl">📝</h1>
          <h2 className="text-xl font-bold mobile-medium:text-2xl">Journal</h2>
          <p className="text-gray-500">Once A Day</p>
          {/* Habit Progress */}
          <div className=" mt-4">
            <p>1/2</p>
            <progress
              className="progress progress-primary"
              value="70"
              max="100"
            />
          </div>
          <div className="progress-buttons flex justify-center gap-1 mt-4">
            <button
              type="button"
              className="btn btn-square btn-outline  btn-sm"
            >
              -
            </button>
            <button
              type="button"
              className="btn btn-square  btn-outline  btn-sm "
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HabitCard;
