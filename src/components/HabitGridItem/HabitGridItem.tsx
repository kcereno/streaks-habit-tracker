/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useState, useEffect } from 'react';
import AppContext from '../../store/AppContext/app-context';
import { months } from '../../data/data';
import Calender from '../Calendar/Calender';
import { HabitI } from '../../models/models';
import EditDeleteHabitButtons from '../EditDeleteHabitButtons/EditDeleteHabitButtons';

interface Props {
  habit: HabitI;
}

function HabitGridItem({ habit }: Props) {
  const { editMode } = useContext(AppContext);
  const [month, setMonth] = useState<number>(2);
  const [year, setYear] = useState(2023);

  useEffect(() => {
    const today = new Date();
    setMonth(today.getMonth() + 1);
    setYear(today.getFullYear());
  });

  const { name } = habit;

  const handlePrevMonthButtonClick = () => {
    const newMonth = month === 1 ? 12 : month - 1;
    const newYear = month === 1 ? year - 1 : year;
    setMonth(newMonth);
    setYear(newYear);
  };
  const handleNextMonthButtonClick = () => {
    const newMonth = month === 12 ? 1 : month + 1;
    const newYear = month === 12 ? year + 1 : year;
    setMonth(newMonth);
    setYear(newYear);
  };

  return (
    <div className="card card-compact grow w-full bg-base-100 shadow-xl mx-2 tablet:w-auto">
      {editMode && <EditDeleteHabitButtons habit={habit} />}
      {/* Content Container */}
      <div className="py-5 tablet:px-4">
        <h2 className="font-bold text-3xl text-center">{name}</h2>
        <div className="flex justify-center gap-4 text-slate-500">
          <p>Current: 4</p>
          <p>Longest:10</p>
        </div>
        {/* Grid Dates */}
        <div className="mt-4 ">
          {/* Calendar Controls */}
          <div className="flex justify-center gap-4">
            <button type="button" className="" onClick={handlePrevMonthButtonClick}>
              «
            </button>
            <div className="text-center">{`${months[month]} ${year}`}</div>
            <button type="button" className="" onClick={handleNextMonthButtonClick}>
              »
            </button>
          </div>
          {/* Grid Calendar */}
          <Calender date={{ month, year }} habit={habit} />
        </div>
      </div>
    </div>
  );
}

export default HabitGridItem;
