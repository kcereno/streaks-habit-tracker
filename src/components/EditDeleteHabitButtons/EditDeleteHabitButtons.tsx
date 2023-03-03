/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useContext } from 'react';
import AppContext from '../../store/AppContext/app-context';
import { HabitI } from '../../models/models';

interface Props {
  habit: HabitI;
}

function EditDeleteHabitButtons({ habit }: Props) {
  const { updateSelectedHabit } = useContext(AppContext);

  const handleButtonClick = () => {
    updateSelectedHabit(habit);
  };

  return (
    <div className="flex justify-between mt-2">
      <button
        className="btn btn-ghost  text-warning text-xs"
        type="button"
        onClick={handleButtonClick}>
        <label htmlFor="modal">Edit</label>
      </button>
      <button
        className="btn btn-ghost text-error text-center text-xs"
        type="button"
        onClick={handleButtonClick}>
        <label htmlFor="delete-habit-modal">Delete</label>
      </button>
    </div>
  );
}

export default EditDeleteHabitButtons;
