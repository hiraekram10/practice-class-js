9

function signup(){
    var email = document.getElementById('semail').value
    var password = document.getElementById('spass').value
    localStorage.setItem('Email',email)
    localStorage.setItem('Password',password)
    location.href  = './signin.html'
}

function signin(){
    var email = document.getElementById('lemail').value
    var password = document.getElementById('lpass').value
    if(localStorage.getItem('Email') == email && localStorage.getItem('Password') == password){
        // alert('welcome user')
        location.href = './welcom.html'
        
    }else{
        alert('go to hell sign up krke ao')
        location.href="./signup.html"
    }

}
function logout(){
  
    location.href  = './signin.html'
    localStorage.clear()
}