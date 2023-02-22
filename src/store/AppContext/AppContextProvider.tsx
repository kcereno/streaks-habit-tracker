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
  const [currentPage, setCurrentPage] = useState(1);

  const maxPages = Math.ceil(habits.length / (view === 'board' ? 6 : 4));

  const getDisplayedHabits = () => {
    const startIndex = (currentPage - 1) * (view === 'board' ? 6 : 4);
    const endIndex = startIndex + (view === 'board' ? 6 : 4);
    return habits.slice(startIndex, endIndex);
  };

  const addHabit = (newHabit: HabitI) => setHabits([...habits, newHabit]);

  const updateHabit = (updatedHabit: HabitI) => {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === updatedHabit.id) return updatedHabit;
      return habit;
    });
    setHabits(updatedHabits);
  };

  const updateView = (updatedView: ViewTypes) => {
    setView(updatedView);
    setCurrentPage(1);
  };

  const updateCurrentPage = (updatedPage: number) => {
    setCurrentPage(updatedPage);
  };

  const memoizedAppContextValue: AppContextI = useMemo(
    () => ({
      habits: getDisplayedHabits(),
      updateHabit,
      addHabit,
      view,
      updateView,
      editMode,
      setEditMode,
      currentPage,
      updateCurrentPage,
      maxPages,
    }),
    [editMode, habits, view, currentPage, maxPages],
  );

  return (
    <AppContext.Provider value={memoizedAppContextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
