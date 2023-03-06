/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
import { useContext } from 'react';
import Day from '../Day/Day';
import { getDaysInMonth, generateDateId } from '../../utils/functions';
import { HabitI } from '../../models/models';
import AppContext from '../../store/AppContext/app-context';

interface Props {
  date: {
    month: number;
    year: number;
  };
  habit: HabitI;
}

function Calender({ habit, date: { month, year } }: Props) {
  const { updateHabit } = useContext(AppContext);
  const daysInMonth = getDaysInMonth(month, year);

  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  const toggleCompleted = (id: string) => {
    const logEntry = habit.logs.find((log) => log.date === id);

    if (!logEntry) {
      const updatedLog = { date: id, completed: true };
      const updatedLogs = [...habit.logs, updatedLog];
      const updatedHabit = { ...habit, progress: habit.progress + habit.goal, logs: updatedLogs };
      updateHabit(updatedHabit);
    } else {
      const updatedLog = { ...logEntry, completed: !logEntry.completed };
      const updatedLogs = habit.logs.map((log) => (log.date === id ? updatedLog : log));
      const updatedHabit = {
        ...habit,
        progress: updatedLog.completed ? habit.progress + habit.goal : habit.progress - habit.goal,
        logs: updatedLogs,
      };
      updateHabit(updatedHabit);
    }
  };

  return (
    <div className="flex justify-center mt-2">
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
    </div>
  );
}

export default Calender;
