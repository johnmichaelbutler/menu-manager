import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// Your web app's Firebase configuration
  var firebaseConfig = {
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
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


//  Figure out if I need these
//   <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-analytics.js"></script>
