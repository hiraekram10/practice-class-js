var sname = document.getElementById('sName')
var semail = document.getElementById('sEmail')
var sno = document.getElementById('sNo')
var spass = document.getElementById('sPass')



var prevData = localStorage.getItem('users')
var users = prevData ? JSON.parse(prevData): [];
function signup(){
    var user = {
        name: sname.value,
        email:semail.value,
        no:sno.value,
        pass:spass
    }

// console.log(user)
users.push(user)
// console.log(users)
var springing = JSON.stringify(users)
localStorage.setItem('users', springing)
sname.value = ''
semail.value = ''
sno.value=''
spass.value= ''
location.href= './signin.html'



}
function signin(){
    var lemail = document.getElementById('lEmail')
    var lpass= document.getElementById('lPass')
    if(localStorage.getItem(users.email) == lemail.value ){
        console.log(users.email)
        location.href = './index.html'
        lemail.value = '';
        lpass = ''
    }else{
        alert('kindly sign up your account')
    location.href = './signup.html'
    }
}
