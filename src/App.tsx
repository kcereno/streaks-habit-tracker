/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import Layout from './layout/Layout/Layout';

import HabitGrid from './components/HabitGrid/HabitGrid';
import HabitBoard from './components/HabitBoard/HabitBoard';
import { ViewTypes } from './models/models';

function App() {
  const [view, setView] = useState<ViewTypes>('board');

  return (
    <Layout>
      <div className="flex items-center flex-col">
        {view === 'board' && <HabitBoard />}
        {view === 'grid' && <HabitGrid />}
      </div>
    </Layout>
  );
}

export default App;
