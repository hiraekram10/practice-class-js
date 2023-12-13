// var date = new Date()
// // var date2= date.getDate()//12 bcz 12 nov
// // var dayy = date.getDay()    // 0 bcz sunday 0-- 6 saturday
// // var month = date.getMonth()   //10 bcz nov 0-11
// var time =date.getTime()  //Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC
// // var year = date.getFullYear() //2023
// // var hours =date.getHours() //12 bcz 2:37
// // // document.write(time) 


// var dob = new Date('10 nov, 2002')  //1970 to 2003 checkihn miliseconds
// var dobMs = dob.getTime()
// // // document.write(dobMs)

// var minus = time - dobMs
// // // document.write(minus)

// var formula = minus /(1000 * 60 * 60 * 24 * 365)
// document.write(Math.floor(formula))

//age calculator

  
 var div = document.getElementById('box')
function agecal(){

    var date = new Date()
var time = date.getTime() 
// console.log(time)

var inp = document.getElementById('inpdate')

 var dob = new Date(inp.value)
var dobMs = dob.getTime()

var minus = time - dobMs
var formula = minus / (1000*60*60*24*345)
console.log(Math.floor(formula))
var p = document.createElement('p')
var textP = document.createTextNode(Math.floor(formula))
p.appendChild(textP)
div.appendChild(p)
inp.value = ''



}



// // var inp = prompt('12 sep, 1956');
// var dob = new Date(inp)
// var dobMs = dob.getTime()


// var minus = time - dobMs
// var formula = minus / (1000*60*60*24*345)
// console.log(Math.floor(formula))


var a = false || true // true bcz first it find  false move forward & find or || check forward
console.log(a)

var b = false && true //false k bad && miljaye kabhi agay nhi jayega
console.log(b)

var c; //undefined   
console.log(c)

// undefined   var bna howa lekn value nhi hai 
// is not deifned  var hi nhi bnaya


//false value  6
// 1.false   2.( 0)   3. "" 4.null 5.undefined 6 nan 
