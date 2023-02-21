import { useContext } from 'react';
import HabitBoard from './components/HabitBoard/HabitBoard';
import HabitGrid from './components/HabitGrid/HabitGrid';
import ViewToggle from './components/ViewToggle/ViewToggle';
import Pagination from './components/Pagination/Pagination';
import Layout from './layout/Layout/Layout';

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
