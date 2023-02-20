import React, { useMemo, useState } from 'react';
import AppContext, { AppContextI } from './app-context';

interface Props {
  children: React.ReactNode;
}

function AppContextProvider({ children }: Props) {
  const [view, setView] = useState<string>('board');
  const [editMode, setEditMode] = useState<boolean>(false);

  const memoizedAppContextValue: AppContextI = useMemo(
    () => ({
      view,
      setView,
      editMode,
      setEditMode,
    }),
    [view, setView, editMode, setEditMode],
  );

  return (
    <AppContext.Provider value={memoizedAppContextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
