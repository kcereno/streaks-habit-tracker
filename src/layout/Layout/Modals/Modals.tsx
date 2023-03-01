/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect } from 'react';
import AddHabitModal from './AddHabitModal/AddHabitModal';
import EditDeleteHabitModal from './EditDeleteHabitModal/EditDeleteHabitModal';
import AppContext from '../../../store/AppContext/app-context';
import { HabitI } from '../../../models/models';

function Modals() {
  return (
    <div>
      <AddHabitModal />
      <EditDeleteHabitModal />
    </div>
  );
}

export default Modals;
