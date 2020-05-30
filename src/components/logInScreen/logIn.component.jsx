import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

import './logIn.styles.scss';


import { uiConfig } from '../../firebase/firebase.utils';

const LogIn = () => {
  const [isSignedIn, setIsSignedIn ] = useState(false);
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
    });
    return () => {
      unregisterAuthObserver();
    }
  });
  if(!isSignedIn) {
    return (
      <div className='firebase-container'>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  } else {
    return (
      <div className='firebase-container'>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed in!</p>
        <p onClick={() => firebase.auth().signOut()}>Sign Out</p>
      </div>
    );
  }
}



export default LogIn;