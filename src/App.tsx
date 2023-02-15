/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import Layout from './layout/Layout/Layout';

// import HabitGrid from './components/HabitGrid/HabitGrid';
// import HabitBoard from './components/HabitBoard/HabitBoard';
import { ViewTypes } from './models/models';
import HabitBoard from './components/HabitBoard/HabitBoard';

function App() {
  const [view, setView] = useState<ViewTypes>('board');

  return (
    <Layout>
      {/* {view === 'board' && <HabitBoard />}
      {view === 'grid' && <HabitGrid />} */}

      <HabitBoard />
    </Layout>
  );
}

export default App;
