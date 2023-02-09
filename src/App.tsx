import React from 'react';

import './App.css';
import Layout from './layout/Layout/Layout';
import ViewToggle from './components/ViewToggle/ViewToggle';
import HabitGridView from './components/HabitGridView/HabitGridView';

function App() {
  return (
    <Layout>
      <div className="flex items-center flex-col">
        <ViewToggle />
        <div className="divider" />
        <div className="card bg-base-200 shadow-xl">
          <HabitGridView />
        </div>
      </div>
    </Layout>
  );
}

export default App;
