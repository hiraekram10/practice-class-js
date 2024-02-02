

function addUser (){
    
  var name = document.getElementById('name')
  var email = document.getElementById('email')
  var Pno = document.getElementById('number')
  var password = document.getElementById('password')
  var cpassword = document.getElementById('cpassword')
  
  
   if(name.value == ''){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter your name!",
        
      });
   }else if(email.value == ''){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter your email!",
        
      });
   }
   else if(Pno.value == ''){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter your Phone no!",
        
      });
   }

   else if(password.value == ''){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter your password!",
        
      });
   }

   else if(cpassword.value !== password.value){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your passwords are unmatched!",
        
      });
   }else{
    Swal.fire({
        title: `${name.value}`,
        text: `you are registered successfully`,
       
       
      });
   }
   var userData= {
    name:name.value,
    email:email.value,
    Pno:Pno.value,
    password:password.value,
    cpassword:cpassword.value
    
   }
     localStorage.setItem("userData",JSON.stringify(userData))

     setTimeout(()=>{
      window.location.href="./dashboard.html"
     },2000)

//  localStorage.setItem("userData",JSON.stringify(userData))
//  var getUser = JSON.parse(localStorage.getItem('userData'))
//  console.log(getUser);
  
}


function existData (){
  var getUserData = JSON.parse(localStorage.getItem('userData'))
  var savedData = document.getElementById('savedData')
  savedData.innerHTML = `<table>
  <tr>
  <th>Name</th>
  <th>Email</th>
  <th>Phone no</th>
  </tr>
  <tr>
      <td>${getUserData.name}</td>
      <td>${getUserData.email}</td>
      <td>${getUserData.Pno}</td>
      
  </tr>
</table> `

}
existData()

function logout(){
 
    window.location.href = "./index.html"
  
  
}
