//firebase imports


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCufpykJkjnwye2aNL8l6PLSv3PG_3Z4BE",
    authDomain: "learningfb-bbcc5.firebaseapp.com",
    projectId: "learningfb-bbcc5",
    storageBucket: "learningfb-bbcc5.appspot.com",
    messagingSenderId: "351548021683",
    appId: "1:351548021683:web:003c8c1766da0cd0b309c6",
    measurementId: "G-TYJC9QGNC8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export{
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut
  }