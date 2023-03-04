import { useContext } from 'react';
import AppContext from '../../store/AppContext/app-context';
import { HabitI } from '../../models/models';

interface Props {
  habit: HabitI;
}

function EditDeleteHabitButtons({ habit }: Props) {
  const { updateSelectedHabit, setModalOpen, updateModalType } = useContext(AppContext);

  const handleEditClick = () => {
    setModalOpen(true);
    updateSelectedHabit(habit);
  };

  const handleDeleteClick = () => {
    updateSelectedHabit(habit);
    updateModalType('delete');
    setModalOpen(true);
  };

  return (
    <div className="flex justify-between mt-2">
      <button
        className="btn btn-ghost  text-warning text-xs"
        type="button"
        onClick={handleEditClick}>
        Edit
      </button>
      <button
        className="btn btn-ghost text-error text-center text-xs"
        type="button"
        onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  );
}

export default EditDeleteHabitButtons;
