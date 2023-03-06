import { useContext, useEffect, useMemo, useCallback } from 'react';
import AppContext from '../../store/AppContext/app-context';
import { HabitI } from '../../models/models';
import {
  getFrequencyText,
  getTodaysFormattedDate,
  calculateLongestStreak,
  calculateCurrentStreak,
} from '../../utils/functions';
import EditDeleteHabitButtons from '../EditDeleteHabitButtons/EditDeleteHabitButtons';

interface Props {
  habit: HabitI;
  updateHabit: (updatedHabit: HabitI) => void;
}

function HabitCard({ habit, updateHabit }: Props) {
  const { editMode } = useContext(AppContext);

  const { icon, name, progress, goal, logs } = habit;

  useEffect(() => {
    const today = getTodaysFormattedDate();
    const todaysLog = logs.find((log) => log.date === today);
    const longestStreak = calculateLongestStreak(logs);

    let completed = false;

    if (progress === goal) {
      completed = true;
    }

    const updatedLogs = logs.map((log) => {
      if (log.date === today) {
        return { ...log, completed };
      }
      return log;
    });

    const currentStreak = calculateCurrentStreak(updatedLogs);

    let updatedHabit = {
      ...habit,
      streaks: { current: currentStreak, longest: longestStreak },
      logs: updatedLogs,
    };
    if (!todaysLog) {
      updatedHabit = { ...updatedHabit, logs: [...logs, { date: today, completed: false }] };
    }

    updateHabit(updatedHabit);
  }, [progress, goal]);

  const progressPercentage = useMemo(() => (progress / goal) * 100, [progress, goal]);
  const frequencyText = useMemo(() => getFrequencyText(goal), [goal]);

  const handlePlusButtonClick = useCallback(() => {
    updateHabit({ ...habit, progress: progress + 1 });
  }, [habit, progress, updateHabit]);

  const handleMinusButtonClick = useCallback(() => {
    updateHabit({ ...habit, progress: progress - 1 });
  }, [habit, progress, updateHabit]);

  return (
    <div className="card w-2/5 grow px-2 card-compact bg-base-200 shadow-xl tablet:w-60 max-w-[300px]">
      {editMode && <EditDeleteHabitButtons habit={habit} />}
      <div className="py-4 tablet:py-6 max:py-8">
        {/* Habit Details */}
        <div className="text-center">
          <h1 className="text-4xl tablet:text-5xl max:text-6xl">{icon}</h1>
          <h2 className="text-xl mt-4 font-bold mobile-medium:text-2xl tablet:text-3xl max:text-4xl capitalize">
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
            onClick={handleMinusButtonClick}>
            -
          </button>
          <button
            type="button"
            className="btn btn-square  btn-outline btn-sm tablet:btn-md"
            onClick={handlePlusButtonClick}
            disabled={progress === goal}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default HabitCard;
