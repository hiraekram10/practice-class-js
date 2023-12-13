// var a = 5 > 10 && 3==3;
// console.log(a)  // false   just bcz first condition is true it would not check next condition just show false



// falsy value
// false,0 , undefined , null,'',NaN

// undefined
// var a ;


// not defined
// varible not ready


// var a = 5== 5 && false
// console.log(a) // false bcz first one is true

// var b = 6 > 3 && 0 && false
// console.log(b);  // return 0 bcz 0 is falsy value it woudnt move forward

// hira' && 5==5 && true && undefined && false
// undefined



// async, sync

// function funone(){
//   var obj = {
//     name: "hira",
//     age:10
//   }
//   funtwo(obj)
// }

// function funtwo(e){
//   console.log(e)
// }

// funone()


// function foo() {
//     var obj = {
//         myname: 'hira',
//         age: 6
//     }

//     doo(obj)
// }
// function doo (e){ //parameter
// console.log(e);
// }

// foo()


// var data= [12, 13,14,389 , 66, 550, 54, 66, 77,145, 166]
// var filtered = data.filter(function(data){
//     return data> 500
// })

// console.log(filtered);


var data = [29,44,158,465,56,234,89,100,25,455,232,]

var filtered = data.filter(function(e){
    return e > 100
})

console.log(filtered);