/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
import { useContext, useState } from 'react';
import Day from '../Day/Day';
import {
  getDaysInMonth,
  generateDateId,
  getTodaysFormattedDate,
  calculateCurrentStreak,
  isFutureDate,
} from '../../utils/functions';
import { HabitI, HabitLogI } from '../../models/models';
import AppContext from '../../store/AppContext/app-context';

interface Props {
  date: {
    month: number;
    year: number;
  };
  habit: HabitI;
}

function GridCalendar({ habit, date: { month, year } }: Props) {
  const [showError, setShowError] = useState(false);
  const { updateHabit } = useContext(AppContext);
  const daysInMonth = getDaysInMonth(month, year);

  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  const toggleCompleted = (id: string) => {
    const selectedLogEntry = habit.logs.find((log) => log.date === id);
    const today = getTodaysFormattedDate();
    const isToday = id === today;

    if (isFutureDate(id)) {
      setShowError(true);
      return;
    }

    setShowError(false);
    let updatedHabit: HabitI = { ...habit };

    if (isToday) {
      if (!selectedLogEntry) {
        updatedHabit = {
          ...habit,
          progress: habit.goal,
          logs: [...habit.logs, { date: id, completed: true }],
        };
      } else {
        updatedHabit = {
          ...habit,
          progress: selectedLogEntry.completed ? 0 : habit.goal,
          logs: habit.logs.map((log) => {
            if (log.date === id) {
              return { ...log, completed: !log.completed };
            }
            return log;
          }),
        };
      }
    }

    if (!isToday && !selectedLogEntry) {
      updatedHabit = {
        ...habit,
        logs: [...habit.logs, { date: id, completed: true }],
      };
    }

    if (!isToday && selectedLogEntry) {
      const updatedLogs = habit.logs.map((log) => {
        if (log.date === id) {
          return { ...log, completed: !log.completed };
        }
        return log;
      });
      updatedHabit = { ...habit, logs: updatedLogs };
    }
    updateHabit(updatedHabit);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-2">
      <div className="flex flex-col gap-2 text-center text-white mt-2">
        <div className="flex flex-wrap gap-2 w-[258px] mobile-medium:w-[293px] mobile-large:w-[328px]">
          {days.map((day) => {
            const dateId = generateDateId(year, month, day);
            const isCompleted = habit.logs.some(
              (logEntry) => logEntry.date === dateId && logEntry.completed,
            );

            return (
              <Day
                key={day}
                id={dateId}
                day={day}
                completed={isCompleted}
                toggleCompleted={toggleCompleted}
              />
            );
          })}
        </div>
      </div>
      {showError && <p className="text-error mt-2">You cannot select a future date</p>}
    </div>
  );
}

export default GridCalendar;
