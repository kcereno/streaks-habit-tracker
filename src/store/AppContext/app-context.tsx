import { createContext } from 'react';
import { HabitI, ViewTypes } from '../../models/models';

export interface AppContextI {
  habits: HabitI[];
  updateHabit: (updatedHabit: HabitI) => void;
  editMode: boolean;
  addHabit: (habit: HabitI) => void;
  setEditMode: (editMode: boolean) => void;
  view: ViewTypes;
  updateView: (view: ViewTypes) => void;
  currentPage: number;
  updateCurrentPage: (updatedPage: number) => void;
  maxPages: number;
  selectedHabit: HabitI | null;
  updateSelectedHabt: (habit: HabitI) => void;
}

const AppContext = createContext<AppContextI>({} as AppContextI);

export default AppContext;
