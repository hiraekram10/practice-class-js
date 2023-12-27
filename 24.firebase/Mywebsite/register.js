import {auth, createUserWithEmailAndPassword } from "./firebase.js"

let register = ()=>{
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    console.log('test',email.value,password.value)

    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
   console.log('user=> ',user);
   email.value= ''
   password.value = ''
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

  registerBtn.addEventListener('click',register)
