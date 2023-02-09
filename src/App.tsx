import React from 'react';

import './App.css';
import Layout from './layout/Layout/Layout';
import ViewToggle from './components/ViewToggle/ViewToggle';

function App() {
  return (
    <Layout>
      <div className="flex justify-center">
        <ViewToggle />
      </div>
    </Layout>
  );
}

export default App;
