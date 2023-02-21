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

  // eslint-disable-next-line object-curly-newline
  const { icon, name, progress, goal } = habit;

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
    <div className="card w-2/5 grow px-2 card-compact bg-base-200 shadow-xl tablet:w-60 ">
      {editMode && (
        <div className="flex justify-end">
          <button
            className="btn btn-ghost text-accent text-center text-xs"
            type="button"
          >
            Select
          </button>
        </div>
      )}
      <div className="py-4 tablet:py-6 max:py-8">
        {/* Habit Details */}
        <div className="text-center">
          <h1 className="text-4xl tablet:text-5xl max:text-6xl">{icon}</h1>
          <h2 className="text-xl mt-2 font-bold mobile-medium:text-2xl tablet:text-3xl max:text-4xl">
            {name}
          </h2>
          <p className="text-gray-400 max:text-xl">{frequencyText}</p>
        </div>
        {/* Habit Progress */}
        <div className="mt-5 text-center">
          <p>{`${progress}/${goal}`}</p>
          <progress
            className={`progress ${
              progressPercentage === 100 ? 'progress-success' : 'progress-error'
            } w-3/4`}
            value={progressPercentage}
            max="100"
          />
        </div>
        <div className="progress-buttons flex justify-center gap-1 tablet:gap-3 mt-4">
          <button
            type="button"
            className="btn btn-square btn-outline btn-sm tablet:btn-md "
            disabled={progress === 0}
            onClick={handleMinusButtonClick}
          >
            -
          </button>
          <button
            type="button"
            className="btn btn-square  btn-outline btn-sm tablet:btn-md"
            onClick={handlePlusButtonClick}
            disabled={progress === goal}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default HabitCard;
