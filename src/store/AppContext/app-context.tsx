import { createContext } from 'react';
import { ViewTypes } from '../../models/models';

export interface AppContextI {
  view: string;
  setView: (updatedView: ViewTypes) => void;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
}

const AppContext = createContext<AppContextI>({} as AppContextI);

export default AppContext;
