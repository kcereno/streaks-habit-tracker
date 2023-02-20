/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from 'react';
import './App.css';

import HabitBoard from './components/HabitBoard/HabitBoard';
import HabitGrid from './components/HabitGrid/HabitGrid';
import ViewToggle from './components/ViewToggle/ViewToggle';
import Pagination from './components/Pagination/Pagination';
import AppContext from './store/AppContext/app-context';
import Layout from './layout/Layout/Layout';
import habits from './data/data';

function App() {
  const { view } = useContext(AppContext);

  return (
    <Layout>
      <ViewToggle />
      {view === 'board' && <HabitBoard habits={habits} />}
      {view === 'grid' && <HabitGrid />}
      <Pagination />
    </Layout>
  );
}

export default App;
