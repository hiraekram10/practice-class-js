// setTimeout (function (){
//     var obj = {
//         name:'hira',
//         age:5
//     }
//     abc(obj)
// },1000)


// function abc(obj){
//    console.log(obj)
// } 


// callback funcion
// for multiple api call(we use multiple  callbackfunctions): promise

// function foo (callback){
//     setTimeout(function (){
//         var obj = {
//             name:'hira',
//             class:8
//         }
//         callback(obj)
//     },2000)

// }

// function abc(data){
// console.log(data);
// }
// foo(abc)








// function abc() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             var obj = {
                
//                     name: 'hira',
//                     class: 8

//                 }
//                 resolve(obj)
//             },3000)
//     })


// }

// abc()
// .then(function(data){
//  console.log('fdata', data);
// })

// .catch(function(err){
//     console.log('error',err);
// })



// function abc() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             var obj = {
                
//                     name: 'hira',
//                     class: 8

//                 }
//                 reject('eteter')
//             },3000)
//     })


// }

// abc()
// .then(function(data){
//  console.log('fdata', data);
// })

// .catch(function(err){
//     console.log('error',err);
// })


var weather = document.getElementById('weather')
var ul = document.getElementById('ul')

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(data){
return data.json();
}
   )

.then(function(data){
    console.log('solve',data);
  

   })


.catch(function(error){
    console.log('err',error);
})

// function abc (data){
//     console.log(data);
//     var weather = document.getElementById('weather')
//     weather.innerHTML = data[0]
// }

