import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyBZpc-x2sqCTqqTBpFH_O0IcyGMHCt2Fco",
    authDomain: "a-react-clone-slack.firebaseapp.com",
    databaseURL: "https://a-react-clone-slack.firebaseio.com",
    projectId: "a-react-clone-slack",
    storageBucket: "a-react-clone-slack.appspot.com",
    messagingSenderId: "529959966918",
    appId: "1:529959966918:web:364f7548c5726ba5bedfc7",
    measurementId: "G-GN5MNTJCTB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;