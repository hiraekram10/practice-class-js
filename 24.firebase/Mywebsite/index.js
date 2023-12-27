import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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





let register = ()=>{
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    console.log('test',email.value,password.value)

    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
   console.log('user=> ',user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('error',errorCode,errorMessage);
  });




}
// window.register = register;

let registerBtn = document.getElementById('registerBtn');
// registerBtn.addEventListener('click',register)
if(registerBtn){
  registerBtn.addEventListener('click',register)
}




let login = ()=>{
  const email = document.getElementById('email')
  const password = document.getElementById('password')


signInWithEmailAndPassword(auth, email.value, password.value)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  console.log("user","login");
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorMessage);
});
}

let loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click',login)
