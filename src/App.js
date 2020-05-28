import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';


import Homepage from './pages/homepage.component';

import './App.css';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(() =>!navbarOpen);
  }

  return (
    <div>
      <Navbar
        navbarState={navbarOpen}
        handleNavbar={handleNavbar}
      />
      <Homepage />
    </div>
  );
}

export default App;
