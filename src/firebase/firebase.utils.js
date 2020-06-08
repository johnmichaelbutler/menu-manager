import * as firebase from 'firebase/app';
import {store} from '../redux/store';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/firestore';
import { createFirestoreInstance } from 'redux-firestore';

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBOO_Jm58afTSCBoW0uDJEj0D0Tj3tzd4k",
//   authDomain: "menumanager-ecc59.firebaseapp.com",
//   databaseURL: "https://menumanager-ecc59.firebaseio.com",
//   projectId: "menumanager-ecc59",
//   storageBucket: "menumanager-ecc59.appspot.com",
//   messagingSenderId: "716462003405",
//   appId: "1:716462003405:web:917958312db9c667e2c584",
//   measurementId: "G-30RK9CXRVX"
// };

// React Redux Firebase configuration
export const rrfConfig = {
  userProfile: 'users', // Root that user profiles are written to
  useFirestoreForProfile: true, // Save profile to Firestore instead of Real Time Database
  useFirestoreForStorageMeta: true // Metadata associated with storage file uploads goes to Firestore
};

// // React Redux Firebase props neded for RRFProvider
export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

