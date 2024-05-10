

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAuth,
    GoogleAuthProvider,
    signInWithPopup ,
    onAuthStateChanged,
signOut} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBU5bpQu_ulViQbvc2QpqcNngzAfCDFDho",
    authDomain: "auth-cbb80.firebaseapp.com",
    projectId: "auth-cbb80",
    storageBucket: "auth-cbb80.appspot.com",
    messagingSenderId: "946052864396",
    appId: "1:946052864396:web:a61f0b803291f9e0875ea9",
    measurementId: "G-JEZNRQHCJY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();

  export{
    auth,
    GoogleAuthProvider,
    googleProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut
  }
