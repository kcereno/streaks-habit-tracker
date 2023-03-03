/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useContext } from 'react';
import HabitBoard from './components/HabitBoard/HabitBoard';
import HabitGrid from './components/HabitGrid/HabitGrid';
import ViewToggle from './components/ViewToggle/ViewToggle';
import Pagination from './components/Pagination/Pagination';
import Layout from './UI/Layout/Layout';

import './App.css';
import AppContext from './store/AppContext/app-context';

function App() {
  const { view } = useContext(AppContext);

  return (
    <Layout>
      <ViewToggle />
      {view === 'board' && <HabitBoard />}
      {view === 'grid' && <HabitGrid />}
      <Pagination />
    </Layout>
  );
}

export default App;

// Add todays date somewhere
// Create logic to create a log for today
// have board data match grid data for today
