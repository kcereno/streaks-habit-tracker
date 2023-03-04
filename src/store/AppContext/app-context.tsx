import { createContext } from 'react';
import { HabitI, ViewTypes } from '../../models/models';

export interface AppContextI {
  habits: HabitI[];
  updateHabit: (updatedHabit: HabitI) => void;
  editMode: boolean;
  addHabit: (habit: HabitI) => void;
  deleteHabit: (habitId: string) => void;
  setEditMode: (editMode: boolean) => void;
  view: ViewTypes;
  updateView: (view: ViewTypes) => void;
  currentPage: number;
  updateCurrentPage: (updatedPage: number) => void;
  maxPages: number;
  selectedHabit: HabitI | null;
  updateSelectedHabit: (habit: HabitI | null) => void;
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
  modalType: 'form' | 'delete';
  updateModalType: (modalType: 'form' | 'delete') => void;
}

const AppContext = createContext<AppContextI>({} as AppContextI);

export default AppContext;
