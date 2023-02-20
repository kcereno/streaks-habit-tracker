/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from 'react';
import './App.css';
import Layout from './layout/Layout/Layout';

import { ViewTypes } from './models/models';
import HabitBoard from './components/HabitBoard/HabitBoard';
import HabitGrid from './components/HabitGrid/HabitGrid';
import ViewToggle from './components/ViewToggle/ViewToggle';
import Pagination from './components/Pagination/Pagination';
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
