import React from 'react';

import './App.css';
import Layout from './layout/Layout/Layout';
import ViewToggle from './components/ViewToggle/ViewToggle';
import HabitGridView from './components/HabitGridView/HabitGridView';
import HabitBoardView from './components/HabitBoardView/HabitBoardView';

function App() {
  return (
    <Layout>
      <div className="flex items-center flex-col">
        <ViewToggle />
        <div className="divider" />
        <HabitBoardView />
        <HabitGridView />
      </div>
    </Layout>
  );
}

export default App;
