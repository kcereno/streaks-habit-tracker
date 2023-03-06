import { useContext } from 'react';
import AppContext from '../../../store/AppContext/app-context';

function ConfirmDeleteHabitModal() {
  const { deleteHabit, selectedHabit, modalType, modalOpen, setModalOpen } = useContext(AppContext);

  const handleDeleteButtonClick = () => {
    if (selectedHabit) {
      deleteHabit(selectedHabit.id);
    }

    setModalOpen(false);
  };
  return (
    <div className={`modal ${modalOpen && modalType === 'delete' && 'modal-open'}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Warning!</h3>
        <p className="py-4">Are you you want to delete this habit?</p>
        <p> This action cannot be undone and all data will be erased.</p>
        <div className="mt-6">
          <div className="flex flex-col gap-2 align-center mobile-large:flex-row mobile-large:justify-end">
            <button type="button" className="btn btn-outline" onClick={handleDeleteButtonClick}>
              No, I changed my mind
            </button>
            <button type="button" className="btn btn-error" onClick={handleDeleteButtonClick}>
              Yes, delete it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteHabitModal;
