import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
// const firebaseui = require('firebaseui');

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

// // // FIREBASE UI
// const ui = new firebaseui.auth.AuthUI(firebase.auth());

//Add email and google provider ID to list of firebeUI signInOptions74
export const uiConfig = {
  // Will use popup for IDP Providers sign-in flow instead of default, redirect
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};

// export const firebaseUIConnect = () => {
//   ui.start('#firebaseui-auth-container',{
//     signInOptions: [
//       {
//         provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
//         requireDisplayName: false
//       },
//       {
//         provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID
//       }
//     ]
//   });
//   if (ui.isPendingRedirect()) {
//     ui.start('#firebaseui-auth-container', uiConfig);
//   }
// }

// This is how to track the Auth state across all your pages once the user has logged in
// const initApp = () => {
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       const {
//         displayName
//       } = user;
//       console.log(user);
//       user.getIdToken().then((accessToken) => {
//         document.getElementById('sign-in-status').textContent = `${displayName}`;
//         document.getElementById('sign-in').textContent = 'Sign Out';
//       });
//     } else {
//       //User is signed out
//       document.getElementById('sign-in-status').textContent = 'Signed out';
//       document.getElementById('sign-in').textContent = 'Log In';
//     }
//   }, (error) => {
//     console.log(error);
//   });
// };

// window.addEventListener('load', () => {
//   initApp();
// })
