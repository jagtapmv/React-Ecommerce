import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBnL3VA0jzVLUaLEhg9dC_qtL8VZvegCGM",
    authDomain: "e-commerce-612bd.firebaseapp.com",
    databaseURL: "https://e-commerce-612bd.firebaseio.com",
    projectId: "e-commerce-612bd",
    storageBucket: "e-commerce-612bd.appspot.com",
    messagingSenderId: "1094489206755",
    appId: "1:1094489206755:web:39f32968d1dc02407ebad6",
    measurementId: "G-XHRTTLNVD9"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();