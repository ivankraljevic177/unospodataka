  import firebase from "firebase";
 
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBUNkJEB2HivBcWh-Hr-1GgIlHietYGRVM",
    authDomain: "unospodataka-firebase.firebaseapp.com",
    databaseUrl: "https://unospodataka-firebase-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "unospodataka-firebase",
    storageBucket: "unospodataka-firebase.appspot.com",
    messagingSenderId: "159186905399",
    appId: "1:159186905399:web:989fc2152fbab8bf9252b2",
    measurementId: "G-1TN834Y6N7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.database();

  export default firebase;