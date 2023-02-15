import React, { useState } from 'react';
import './App.css';
import Layout from './layout/Layout/Layout';
import ViewToggle from './components/ViewToggle/ViewToggle';
import HabitGridView from './components/HabitGridView/HabitGridView';
import HabitBoardView from './components/HabitBoardView/HabitBoardView';
import { ViewTypes } from './models/models';

function App() {
  const [view, setView] = useState<ViewTypes>('board');

  const updateView = (updatedView: ViewTypes) => {
    setView(updatedView);
  };
  return (
    <Layout>
      <div className="flex items-center flex-col">
        <ViewToggle view={view} updateView={updateView} />
        <div className="divider" />
        {view === 'board' && <HabitBoardView />}
        {view === 'grid' && <HabitGridView />}
        {/* <HabitBoardView />
        <HabitGridView /> */}
      </div>
    </Layout>
  );
}

export default App;
