import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
const firebaseui = require('firebaseui');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOO_Jm58afTSCBoW0uDJEj0D0Tj3tzd4k",
  authDomain: "menumanager-ecc59.firebaseapp.com",
  databaseURL: "https://menumanager-ecc59.firebaseio.com",
  projectId: "menumanager-ecc59",
  storageBucket: "menumanager-ecc59.appspot.com",
  messagingSenderId: "716462003405",
  appId: "1:716462003405:web:917958312db9c667e2c584",
  measurementId: "G-30RK9CXRVX"
};

// // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// // FIREBASE UI
const ui = new firebaseui.auth.AuthUI(firebase.auth());

//Add email and google provider ID to list of firebeUI signInOptions74
const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: (authResult, redirectUrl) => {
      return true;
    },
    uiShown: () => {
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of default, redirect
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
};

export const firebaseUIConnect = () => {
  ui.start('#firebaseui-auth-container',{
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
  });
  ui.start('#firebaseui-auth-container', uiConfig);
}
firebaseUIConnect();
