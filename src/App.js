import React from 'react';
import 'fontsource-roboto';

import './App.css';
import Routes from './routes/Routes';
import BottomNav from './components/bottomNavigation/BottomNav';
// import FilterColumn from "./components/filters/filtercolumn/FilterColumn";

function App() {
  return (
    <div>
      <Routes />
      <BottomNav />
    </div>
  );
}

export default App;
