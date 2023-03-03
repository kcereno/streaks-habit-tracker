/* eslint-disable jsx-a11y/label-has-associated-control */
import { useContext } from 'react';
import AppContext from '../../../store/AppContext/app-context';

function ConfirmDeleteHabitModal() {
  const { deleteHabit, selectedHabit } = useContext(AppContext);

  const handleDeleteButtonClick = () => {
    if (selectedHabit) {
      deleteHabit(selectedHabit.id);
    }
  };
  return (
    <div>
      <input type="checkbox" id="delete-habit-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Warning!</h3>
          <p className="py-4">
            Are you you want to delete this habit?
            <br />
            This action cannot be undone and all data will be erased.
          </p>
          <div className="modal-action">
            <label htmlFor="delete-habit-modal" className="btn btn-outline">
              No, I changed my mind
            </label>
            <button type="button" onClick={handleDeleteButtonClick}>
              <label htmlFor="delete-habit-modal" className="btn btn-error">
                Yes, delete it
              </label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteHabitModal;
