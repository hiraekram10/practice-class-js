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


// working of spread operator
function arrUp (arr){
   arr[1].name = "haya";
   return arr
}

let obj= {
    name:"hira"
}
let result = arrUp([obj,obj,obj])   // haya, haya. haya (bcz refrence didff)  obect or array always save byy refrence not by value when we update object it also update its refrence
console.log(result);



let obj1 = {name:"saima"}
let obj2 = obj1
console.log(obj1);   //saima
console.log(obj2);  //saima

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

var practice = {
    email :"hira@gmail.com",
    pass:'iiiii'
}

var practice2 = {
    ...practice  //this is called shallow copy of object
}


practice.email ="hera@gail.com"
console.log(practice);  //hera@gmail.com
console.log(practice2); //hira


// We have two kinds of object copies in JavaScript: shallow and deep.
//  In a nutshell, shallow copies are used for “flat” objects and deep 
//  copies are used for “nested” objects.


// By “flat” objects we mean objects that contain only primitive values.

// For instance: [1, 2, 3, 4, 5]

// Nested objects mean objects that contain non-primitive values.

// For instance: [“laptop”, {value: 5000}]







