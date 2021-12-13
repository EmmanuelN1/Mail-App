import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMhreBKTIfAMrrQnMF3tY5LAVeyR31EIw",
    authDomain: "c-435c0.firebaseapp.com",
    projectId: "c-435c0",
    storageBucket: "c-435c0.appspot.com",
    messagingSenderId: "376464889499",
    appId: "1:376464889499:web:a72affaa5343ba4759983e",
    measurementId: "G-EB9FKH2LZZ"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider };


