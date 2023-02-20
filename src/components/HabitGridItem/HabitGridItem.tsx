/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/button-has-type */
import { useContext, useState, useEffect } from 'react';
import AppContext from '../../store/AppContext/app-context';

import { months } from '../../data/data';
import Calender from '../Calendar/Calender';
import { getDaysInMonth } from '../../utils/functions';

function HabitGridItem() {
  const { editMode } = useContext(AppContext);
  const [monthNumber, setMonthNumber] = useState(0);
  const [year, setYear] = useState(2023);

  const daysInMonth = getDaysInMonth(monthNumber, year);

  useEffect(() => {
    const today = new Date();
    setMonthNumber(today.getMonth());
    setYear(today.getFullYear());
  }, []);

  const handlePrevMonthButtonClick = () => {
    if (monthNumber === 0) {
      setMonthNumber(11);
      setYear(year - 1);
    } else {
      setMonthNumber(monthNumber - 1);
    }
  };

  const handleNextMonthButtonClick = () => {
    if (monthNumber === 11) {
      setMonthNumber(0);
      setYear(year + 1);
    } else {
      setMonthNumber(monthNumber + 1);
    }
  };

  return (
    <div className="card card-compact grow w-full bg-base-100 shadow-xl mx-2 tablet:w-auto">
      {editMode && (
        <div className="flex justify-end">
          <button className="btn btn-ghost text-accent text-center text-xs">
            Select
          </button>
        </div>
      )}
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
            <button className="" onClick={handlePrevMonthButtonClick}>
              «
            </button>
            <div className="text-center">{`${months[monthNumber]} ${year}`}</div>
            <button className="" onClick={handleNextMonthButtonClick}>
              »
            </button>
          </div>
          {/* Grid Calendar */}
          <Calender totalDays={daysInMonth} />
        </div>
      </div>
    </div>
  );
}

export default HabitGridItem;
