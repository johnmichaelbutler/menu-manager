// imports core functionaltiy using /app
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// Your web app's Firebase configuration
export const fbConfig = {
  apiKey: "AIzaSyBOO_Jm58afTSCBoW0uDJEj0D0Tj3tzd4k",
  authDomain: "menumanager-ecc59.firebaseapp.com",
  databaseURL: "https://menumanager-ecc59.firebaseio.com",
  projectId: "menumanager-ecc59",
  storageBucket: "menumanager-ecc59.appspot.com",
  messagingSenderId: "716462003405",
  appId: "1:716462003405:web:917958312db9c667e2c584",
  measurementId: "G-30RK9CXRVX"
};
// Initialize Firebase

// // Initialize Firebase
firebase.initializeApp(fbConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;