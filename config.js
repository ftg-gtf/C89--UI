import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyD2k1LjtUGB1b-i7HI_b6kDZTF6eBdZklM",
  authDomain: "c77santa.firebaseapp.com",
  projectId: "c77santa",
  storageBucket: "c77santa.appspot.com",
  messagingSenderId: "1006517590167",
  appId: "1:1006517590167:web:2d48d856dd69c3bcc6f1d2"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
