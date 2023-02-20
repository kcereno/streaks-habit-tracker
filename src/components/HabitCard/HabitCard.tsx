/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/button-has-type */

import { useContext } from 'react';
import AppContext from '../../store/AppContext/app-context';
import { HabitI } from '../../models/models';
import { getFrequencyText } from '../../utils/functions';

interface Props {
  habit: HabitI;
  updateHabit: (updatedHabit: HabitI) => void;
}

function HabitCard({ habit, updateHabit }: Props) {
  const { editMode } = useContext(AppContext);
  const { id, icon, name, progress, goal } = habit;

  const progressPercentage = (progress / goal) * 100;
  const frequencyText = getFrequencyText(goal);

  const handlePlusButtonClick = () => {
    const newProgressValue = progress + 1;

    const updatedHabit = { ...habit, progress: newProgressValue };
    updateHabit(updatedHabit);
  };
  const handleMinusButtonClick = () => {
    const newProgressValue = progress - 1;

    const updatedHabit = { ...habit, progress: newProgressValue };
    updateHabit(updatedHabit);
  };

  return (
    <div className="card w-2/5 grow card-compact bg-base-200 shadow-xl ">
      {editMode && (
        <div className="flex justify-end">
          <button className="btn btn-ghost text-accent text-center text-xs">
            Select
          </button>
        </div>
      )}
      <div className="py-4 tablet:py-6 max:py-8">
        {/* Habit Details */}
        <div className="text-center">
          <h1 className="text-4xl tablet:text-5xl">{icon}</h1>
          <h2 className="text-xl mt-2 font-bold mobile-medium:text-2xl tablet:text-3xl">
            {name}
          </h2>
          <p className="text-gray-400">{frequencyText}</p>
          {/* Streak Details */}
          <div className="hidden mobile-medium:flex justify-center gap-4 mt-2 ">
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
          <p>{`${progress}/${goal}`}</p>
          <progress
            className="progress progress-primary w-3/4"
            value={progressPercentage}
            max="100"
          />
        </div>
        <div className="progress-buttons flex justify-center gap-1 tablet:gap-3 mt-4">
          <button
            type="button"
            className="btn btn-square btn-outline btn-sm tablet:btn-md"
            onClick={handleMinusButtonClick}
          >
            -
          </button>
          <button
            type="button"
            className="btn btn-square  btn-outline btn-sm tablet:btn-md"
            onClick={handlePlusButtonClick}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default HabitCard;
