import {auth, onAuthStateChanged, signOut, sendEmailVerification } from "./firebase.js";


let name= document.getElementById('name')
let email= document.getElementById('email')
let main = document.getElementById('main')
let loader = document.getElementById('loader')




onAuthStateChanged(auth, (user) => {
  if (user) {
    

sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    console.log("eamail sent");
  });
    console.log("user----->",user);
    // if login cannot move to login or register page
    if(window.location.pathname !== "/profile.html"){
      window.location.href = "profile.html"
    }
    loader.style.display = "none";
    main.style.display = "flex";
 
    name.innerText = user.email.slice(0, user.email.indexOf('@'));
    email.innerHTML = user.email;
  
  

    // const uid = user.uid;
   

    // ...
  } else {
    console.log("not login");
    // window.location =  "index.html"
    if(location.pathname !== "/index.html"){
      window.location = 'index.html'
      console.log(location.pathname);
    }
  }
});



// logout
let logout=()=>{
    signOut(auth).then(() => {
        
        console.log("user sign out");
        location.href= './index.html'
      }).catch((error) => {
       console.log(error);
      });
}


let logoutBtn = document.getElementById('logoutBtn');

 logoutBtn &&  logoutBtn.addEventListener('click',logout)










