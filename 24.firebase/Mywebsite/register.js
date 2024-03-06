import {auth, 
  createUserWithEmailAndPassword,
  //phone
  RecaptchaVerifier,
  signInWithPhoneNumber

} from "./firebase.js"

// for phone


let register = ()=>{
  //   const email = document.getElementById('email')
  //   const password = document.getElementById('password')

  //   console.log('test',email.value,password.value)

  //   createUserWithEmailAndPassword(auth, email.value, password.value)
  // .then((userCredential) => {
  //   // Signed up 
  //   const user = userCredential.user;
  //  console.log('user=> ',user);
  //  email.value= ''
  //  password.value = ''
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   console.log('error',errorCode,errorMessage);
  // });
  

  //  new authentication with phone 
  let phone = document.getElementById('phone');
  
  window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
  const appVerifier = window.recaptchaVerifier;
  signInWithPhoneNumber(auth,`+${phone.value}`, appVerifier)
    .then((confirmationResult) => {
    
    console.log(confirmationResult);      // ...
    }).catch((error) => {
      console.log('error',error);
    });




  // window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
  //   'size': 'invisible',
  //   'callback': (response) => {
  //     const appVerifier = window.recaptchaVerifier;
  //     // reCAPTCHA solved, allow signInWithPhoneNumber.
  //     signInWithPhoneNumber(auth, phone.value, appVerifier)
  //   .then((confirmationResult) => {
    
  //     window.confirmationResult = confirmationResult;
     
  //   }).catch((error) => {
  //     console.log('error',error);
  //   });
  //   }
  // });




}


let registerBtn = document.getElementById('registerBtn');
// registerBtn.addEventListener('click',register)

  registerBtn.addEventListener('click',register)
