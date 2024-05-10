import {auth,
    GoogleAuthProvider,
    googleProvider,
    signInWithPopup,

    onAuthStateChanged,
    signOut} from './firebase.js'



let googleSignin = ()=>{
    signInWithPopup(auth, googleProvider)
  .then((result) => {
    
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    
    const user = result.user;
  
    window.location.href= './profile.html'
    console.log("user--->",user);

   
   
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  
    const email = error.customData.email;
  
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log('error-->',error);
    console.log('emial--->',email);
 
  });
}
let signinWithGoogle = document.getElementById('signinWithGoogle');
signinWithGoogle.addEventListener('click',googleSignin)
















let logout=()=>{
    signOut(auth).then(() => {
        
        console.log("user sign out");
        location.href= './index.html'
      }).catch((error) => {
       console.log(error);
      });
}


let logoutBtn = document.getElementById('logoutBtn');

 logoutBtn.addEventListener('click',logout)