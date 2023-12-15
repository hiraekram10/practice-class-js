// let abc = 'hello'

// var abc = "rida"
// console.log(abc);  //Uncaught SyntaxError: Identifier 'abc' has already been declared



// function foo (){
//     var num = 8
// }

// console.log(num); //num is not defined


// function sum (a,b){
//     b

// }
// console.log(sum(3));//undefined


// function sum (length){
//     var a = 5
//     for(var i = 0; i<length ;i++){
//         console.log(a);
//         a = a-2
//     }
// }

// sum(3)    //5,3,1




// if(true){
//     // var abc = "hira"
//     // let abc = "haya"   //abc is not defined
// }

// console.log(abc);

//perofrmance good for just use no updates
// const data = "hira"
// data= "frha"
// console.log(data);  //error



// function restPara(a = "not provided", ...rest){
//     console.log(a,rest);
// }


// function restPara( ...rest){
//     console.log(rest);
// }
// restPara() //not provided
// restPara("haya","rid@gmail.com", 02437887 ,"female" )


// spread operator
// let fruits = ["orange","mango","apple"]
// let vegetables = ["potato","onion","carrot",{greet:'hi'}]


// let join = [...fruits,...vegetables]
// console.log(join);


// let obj = {
//     fName :'hira',
//     lName:'ekram'
// }
// let objects = {
//     email:'hira@gmail.com'
// }
// let merge = {...obj,...objects}
// console.log(merge);


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>. working of spread operator
// function arrUp (arr){
//    arr[1].name = "haya";
//    return arr
// }

// let obj= {
//     name:"hira"
// }
// let result = arrUp([obj,obj,obj])   // haya, haya. haya (bcz refrence didff)  obect or array always save byy refrence not by value when we update object it also update its refrence
// console.log(result);



// let obj1 = {name:"saima"}
// let obj2 = obj1
// console.log(obj1);   //saima
// console.log(obj2);  //saima

// to prevent this we used spread operator


// var obbj1 = {name :"rida"}
// var obbj2 = {...obbj1}


// obbj2.name = "kashif"

// console.log(obbj1); rida 
// console.log(obbj2); kashif


// using nested object




// var obbj1 = {name :"rida",details:{school:"smit"}}
// var obbj2 = {...obbj1 }


// obbj2.details.school = "saylani"

// console.log(obbj1);  // saylani
// console.log(obbj2); //saylani


// to prevent this
// var obbj1 = {name :"rida",details:{school:"smit"}}
// var obbj2 = {...obbj1, details:{...obbj1.details}  deep copy }


// obbj2.details.school = "saylani"

// console.log(obbj1);  // smit
// console.log(obbj2); //saylani


// practice

// var practice = {
//     email :"hira@gmail.com",
//     pass:'iiiii'
// }

// var practice2 = {
//     ...practice  //this is called shallow copy of object
// }


// practice.email ="hera@gail.com"
// console.log(practice);  //hera@gmail.com
// console.log(practice2); //hira


// We have two kinds of object copies in JavaScript: shallow and deep.
//  In a nutshell, shallow copies are used for “flat” objects and deep 
//  copies are used for “nested” objects.


// By “flat” objects we mean objects that contain only primitive values.

// For instance: [1, 2, 3, 4, 5]

// Nested objects mean objects that contain non-primitive values.

// For instance: [“laptop”, {value: 5000}]


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> destructuring>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Destructuring is a JavaScript expression that allows us to extract 
// data from arrays, objects, and maps and set them into new,
//  distinct variables. Destructuring allows us to extract multiple properties, or items, from an array​ at a time.



// var city ={
//     name:"karachi",
//     capital:"islamabad",
//     province:"4"

// }

// console.log(city.name,city.province,city.capital);   //more words of code to prevent this


// let city ={
//     name:"karachi",
//     capital:"islamabad",
//     province:"4"

// }

// let {name,province,capital} = city

// console.log(name,capital,province);  //solved


// nested

// let city ={
//     name:"karachi",
//     capital:"islamabad",
//     province:"4",
//     water:{see:'seaview'}

// }

// let {name,province,capital,water} = city

// let {see} = water

// console.log(name,capital,province,see);  //solved



// destructuring for array 
// let arr = ["i", "love","coding"]
// let[a,b,c]=arr
// console.log(arr);


// quiz check
// var fri ="john apples are"
// var re = fri.slice(5,10)// apple  1 exclude
// console.log(re);




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.array methods >>>>>>>>>>>>>>>>>>>>>>>>.......

// let arr = ["hira",6,"smit"]
// for(var i = 0;i<arr.length ;i++){
//     console.log(arr[i]);
// }

// replace with forEach
// The forEach() method calls a function for each element in an array
// let arr = ["hira",6,"smit"]

//                       //optional
// arr.forEach(function(bb,index){
//   console.log(bb,index);
// })



// checking return value of for each
//  var testing = arr.forEach(function(bb,index){
//       console.log(bb,index);
//     })
// console.log(testing); //undefined it doesnt return anything

// map  map() creates a new array from calling a function for every array element. 
// map() does not execute the function for empty elements.
// let arr = ["hira",6,"smit"]

// arr.map(function (v,i){
//  console.log(v,i);

// })


// checking 
// let arr = ["hira",6,"smit"]

// let resu = arr.map(function (v,i){
// //  console.log(v,i);z
// //  return "elphabate"
// return `${v} saylani`

// })
// console.log(resu); //['elphabate', 'elphabate', 'elphabate']
// console.log(resu);// ['hira saylani', '6 saylani', 'smit saylani']



// filter
// its just return tru or false

// let arr = ['hira',9,"green","blue"]

// let test = arr.filter(function(v,i){
//     console.log(v,i);
//     return true
// })
// console.log(test); // if true push values in new array



// let arr = ['hira',9,"green","blue"]

// let test = arr.filter(function(v,i){
//     console.log(v,i);
//     return false
// })
// console.log(test); // []


// let arr = ['hira',9,"green","blue"]

// let test = arr.filter(function(v,i){
//     console.log(v,i);
//     return  typeof v === "number"
// })
// console.log(test); // 9

// use for filtertrate data


// var arr = ['hira','rida',"haya","bisma","rafay"]

// var test = arr.filter(function(v,i){
//     console.log(v,i);
//     return v.length === 4

// })

// console.log(test);//hira,haya,rida


// var arr = ['hira','rida',"haya","bisma","rafay"]

// var test = arr.some(function(v,i){   //every or some doing same work
//     console.log(v,i);
//     // return v.length === 3
//     return v === "haya"

// })

// console.log(test)// false  bcz itis used to check or find 
// console.log(test)  //true



// sort...   it updates old array

// var arr = [9,3,6,7,9,2,1,5]
// let soring = arr.sort()
// console.log(soring);   //1,2,3,6,7,9,9

// var arr = ["rida","samia","nabila","ayaz"]
// let soring = arr.sort()
// console.log(soring);  //ayaz,nabia,samia,rida



// var arr = [9,3,6,7,9,2,1,5]
// let reducing = arr.reduce(function(a,b){
//     console.log(a,b);
// })


var arr = [9,3,6,7,9,2,1,5]
let reducing = arr.reverse()
console.log(reducing);



















