import React, { useMemo, useState } from 'react';
import AppContext, { AppContextI } from './app-context';
import { HabitI, ViewTypes } from '../../models/models';
import mockHabits from '../../data/data';

interface Props {
  children: React.ReactNode;
}

function AppContextProvider({ children }: Props) {
  const [habits, setHabits] = useState<HabitI[]>(mockHabits);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [view, setView] = useState<ViewTypes>('board');

  const updateHabit = (updatedHabit: HabitI) => {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === updatedHabit.id) return updatedHabit;
      return habit;
    });
    setHabits(updatedHabits);
  };

  const updateView = (updatedView: ViewTypes) => {
    setView(updatedView);
    // setCurrentPage(1);
  };

  const memoizedAppContextValue: AppContextI = useMemo(
    () => ({
      habits,
      updateHabit,
      view,
      updateView,
      editMode,
      setEditMode,
    }),
    [editMode, setEditMode, habits, view, updateView],
  );

  return (
    <AppContext.Provider value={memoizedAppContextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
