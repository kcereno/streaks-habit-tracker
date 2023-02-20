/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useState } from 'react';
import './App.css';

import HabitBoard from './components/HabitBoard/HabitBoard';
import HabitGrid from './components/HabitGrid/HabitGrid';
import ViewToggle from './components/ViewToggle/ViewToggle';
import Pagination from './components/Pagination/Pagination';
import AppContext from './store/AppContext/app-context';
import Layout from './layout/Layout/Layout';
import mockHabits from './data/data';
import { HabitI } from './models/models';

function App() {
  const { view } = useContext(AppContext);
  const [habits, setHabits] = useState(mockHabits);

  const updateHabit = (updatedHabit: HabitI) => {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === updatedHabit.id) return updatedHabit;

      return habit;
    });

    setHabits(updatedHabits);
  };

  return (
    <Layout>
      <ViewToggle />
      {view === 'board' && (
        <HabitBoard habits={habits} updateHabit={updateHabit} />
      )}
      {view === 'grid' && <HabitGrid />}
      <Pagination />
    </Layout>
  );
}

export default App;
