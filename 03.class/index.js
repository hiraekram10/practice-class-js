//  function hello(){
//     document.getElementById("dabba").innerHTML = "good morning"
//  }


//basic function :giving value to function
// function calling(){
//     alert("Hello hira")
// }

// for(var i = 0; i<10 ;i++){
//     calling()
// }


//getting vaue in function
      //parameter
// function plus(a,b,c){
//   return a + b +c
// }
//        //aurgument
//  var helo = plus(5,6,2)
//  alert(helo)

 //default
//  plus()



// function sum (a=3, b=4, c=5){
//       return a +b +c

// }
// var  d = +prompt("Enter your number")
// var  e = +prompt("Enter your number")
// var  f = +prompt("Enter your number")


// alert(sum(d,e,f))

// function take another function in itself called callback function
//this is local function (anoynmous function ) no name

// setInterval(function(){
//       document.write("hello")
// }, 9000)



// function callName(){
//       document.write('hira')
// }
// setInterval(callName, 9000)


//  setTimeout(function(){
//       document.write("hello hira")
//  },4000)


//trying(wrong)
// function numbs(){
//       for(var i=0; i<5;i++){
//             document.write(i)
//       }
// }

// setInterval(numbs, 4000)



// var num = 0 
// setInterval(function(){
//       num++
//       document.write(num)
// },7000)


//   stop watch

var mSec = 0
var sec = 0
var min = 0
var getmiliSec = document.getElementById('getmilisec')
var getSec = document.getElementById('getsecond')
var getmin = document.getElementById('getminute')
var interval;


function start(){
     interval = setInterval(function(){
            mSec++;
            getmiliSec.innerHTML= mSec
            if(mSec >=100){
                  sec++
                  getSec.innerHTML = sec
                  mSec = 0
            }else if(sec >=60){
                  min++
                  getmin.innerHTML = min
                  sec = 0
                  
            }
            
      }, 10)
      document.getElementById('start').disabled= true
}


function stop(){
      clearInterval(interval)
      document.getElementById("start").disabled = false
}



function reset(){
      mSec= 0;
      sec = 0
      min = 0
      getmiliSec.innerHTML= mSec;
      getSec.innerHTML = sec;
      getmin.innerHTML = min
}



