/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useState } from 'react';
import HabitBoard from './components/HabitBoard/HabitBoard';
import HabitGrid from './components/HabitGrid/HabitGrid';
import ViewToggle from './components/ViewToggle/ViewToggle';
import Pagination from './components/Pagination/Pagination';
import Layout from './layout/Layout/Layout';

import { ViewTypes } from './models/models';

import './App.css';
import AppContext from './store/AppContext/app-context';

function App() {
  const { habits, updateHabit, view, updateView } = useContext(AppContext);

  const [currentPage, setCurrentPage] = useState(1);

  // Functions

  const updateCurrentPage = (updatedPage: number) => {
    setCurrentPage(updatedPage);
  };

  const getDisplayedHabits = () => {
    const startIndex = (currentPage - 1) * (view === 'board' ? 6 : 4);
    const endIndex = startIndex + (view === 'board' ? 6 : 4);
    return habits.slice(startIndex, endIndex);
  };

  // Variables
  // const maxPages = Math.ceil(habits.length / (view === 'board' ? 6 : 4));

  const displayedHabits = getDisplayedHabits();

  return (
    <Layout>
      <ViewToggle />
      {view === 'board' && (
        <HabitBoard habits={displayedHabits} updateHabit={updateHabit} />
      )}
      {view === 'grid' && (
        <HabitGrid habits={displayedHabits} updateHabit={updateHabit} />
      )}
      {/* <Pagination
        currentPage={currentPage}
        updateCurrentPage={updateCurrentPage}
        maxPages={maxPages}
      /> */}
    </Layout>
  );
}

export default App;
