import React from 'react';
import './firebaseUI.styles.scss';
import { firebaseUIConnect } from '../../firebase/firebase.utils';
import './firebaseUI.styles.scss';

const FirebaseUI = () => {
  // firebaseUIConnect();
  return (
    <div className="firebase-container">
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
    </div>
  )
}



export default FirebaseUI;