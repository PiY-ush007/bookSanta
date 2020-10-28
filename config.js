import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCtVDR2hZYI-LJJa0mh5kvzDtfoFvt7plE",
  authDomain: "booksanta-79f24.firebaseapp.com",
  databaseURL: "https://booksanta-79f24.firebaseio.com",
  projectId: "booksanta-79f24",
  storageBucket: "booksanta-79f24.appspot.com",
  messagingSenderId: "1077924163835",
  appId: "1:1077924163835:web:3c6908787d9a8c044a005e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
