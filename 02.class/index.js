// var  day = "sun"

// switch(day){
//     case "mon":
//         alert("this is one");
//         break;
//         case "sun":
//         alert("this is two");
//         break;
//         default:
//             alert("default")


// }

// function submitForm(){
//     var name = document.getElementById("name");
//     console.log(name.value)
//     var email = document.getElementById("email");
//     console.log(email.value)


//     name.value = "";
//     email.value="";
// }

function cal(e){
 document.getElementById("box").value += e
 

  
}
function equaling (){
    var a = document.getElementById("box")
    a.value = eval(a.value)
}

function removing(){
    document.getElementById("box").value=""
}