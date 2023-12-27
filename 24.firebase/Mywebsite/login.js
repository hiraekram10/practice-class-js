import { auth, signInWithEmailAndPassword } from "./firebase.js";


let login = ()=>{
    const email = document.getElementById('email')
    const password = document.getElementById('password')
  
  
  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user","login");
    email.value= ''
    password.value = ''
    location.href= './profile.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
  }
  
  let loginBtn = document.getElementById('loginBtn');
  loginBtn.addEventListener('click',login)