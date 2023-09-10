import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="app">
      {/* <nav>Navbar</nav> */}
      <Navbar />
      <main>All Routing</main>
    </div>
  );
};

export default App;
