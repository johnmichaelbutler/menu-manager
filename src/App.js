import React, { useState, Suspense } from 'react';

import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import HomePage from './pages/homePage/homePage.component';

import './App.css';
import AboutPage from './pages/aboutPage/aboutPage.component';
import LogInPage from './pages/logInPage/logInPage.component';
import SignUpPage from './pages/signUpPage/signUpPage.component';


import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import  { rrfProps } from './firebase/firebase.utils';

const App = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(() =>!navbarOpen);
  }

  return (
    <div>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Navbar
          navbarState={navbarOpen}
          handleNavbar={handleNavbar}
        />
        <Switch>
          <Suspense fallback={<h1>Loading...</h1>} />
          <Route path='/about'>
            <AboutPage />
          </Route>
          <Route path='login'>
            <LogInPage />
          </Route>
          <Route path='/signup'>
            <SignUpPage />
          </Route>
          <Route path=''>
            <HomePage />
          </Route>
        </Switch>
      </ReactReduxFirebaseProvider>
    </div>
  );
}

export default App;
