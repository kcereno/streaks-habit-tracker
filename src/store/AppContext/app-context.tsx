import { createContext } from 'react';
import { HabitI } from '../../models/models';

export interface AppContextI {
  habits: HabitI[];
  updateHabit: (updatedHabit: HabitI) => void;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
}

const AppContext = createContext<AppContextI>({} as AppContextI);

export default AppContext;
