import { createContext } from 'react';
import { HabitI, ViewTypes } from '../../models/models';

export interface AppContextI {
  habits: HabitI[];
  updateHabit: (updatedHabit: HabitI) => void;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  view: ViewTypes;
  updateView: (view: ViewTypes) => void;
}

const AppContext = createContext<AppContextI>({} as AppContextI);

export default AppContext;
