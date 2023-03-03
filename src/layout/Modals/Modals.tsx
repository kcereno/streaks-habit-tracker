import React from 'react';
import HabitFormModal from './HabitFormModal/HabitFormModal';
import ConfirmDeleteHabitModal from './ConfirmDeleteHabitModal/ConfirmDeleteHabitModal';

function Modals() {
  return (
    <div>
      <HabitFormModal />
      <ConfirmDeleteHabitModal />
    </div>
  );
}

export default Modals;
