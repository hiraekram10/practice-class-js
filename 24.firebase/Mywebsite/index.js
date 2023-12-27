import {auth, onAuthStateChanged, signOut } from "./firebase.js";


let name= document.getElementById('name')
let email= document.getElementById('email')




onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
    name.innerText = user.email.slice(0, user.email.indexOf('@'))
    email.innerHTML = user.email
  

    const uid = user.uid;
    // ...
  } else {
    console.log("not login");
  }
});


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










