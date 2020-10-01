 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 import 'firebase/analytics'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBGOMLlNzu6THICXNa7kHehpbkQxSWcXys",
    authDomain: "net-ninja-maioplan.firebaseapp.com",
    databaseURL: "https://net-ninja-maioplan.firebaseio.com",
    projectId: "net-ninja-maioplan",
    storageBucket: "net-ninja-maioplan.appspot.com",
    messagingSenderId: "197577457127",
    appId: "1:197577457127:web:ad1cec5f33c64281751142",
    measurementId: "G-E6KZG7HBK3"
  };

  export const fbconfig={
      
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;


  //npm install firebase