    
    //function declearartion 

    // function abc (){
    //     console.log("hello");
    // }
    // abc()


    // function expression

    // let foo = function (){
    //     console.log("hi");
    // }
    // foo()


     //(let foo;)  hoisting  

    // foo()   //error :Cannot access 'foo' before initialization
    
    // let foo = function (){     // hoisting applied
    //     console.log("hi");
    // }


    // arrow function fat arrow(expression function)

    // let foo = ()=>{
    //     console.log("hi");
    // }

    // foo()


    //  let foo = a =>{
    //     return(a+ 7);       ||    let foo = a => a+ 7
    // }

    // foo(10)

//    let obj = {
//     name :"hira",
//     getname:function(){
//         console.log(this);   //THIS BIND WITH  FUNCTION see function call from which place?  regular function call through object it take objet 
//     }
//    } 
//    obj.getname()

//    let abc = obj.getname
//   abc()// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    


// let foo = (a,a)=>{
//     console.log(a);
// }
// foo("ahmed","error")//SyntaxError: Duplicate parameter name not allowed in this context




// function foo (a,a){
//     console.log(a,a);
// }
// foo("ahmed","error")//error error


// >>>>>>>>>>>>>>>>>>>>>>>>. class<<<<<<<<<<<<<<<<<<<<


// Class Methods. Class methods are created with the same syntax as object methods. 
// Use the keyword class to create a class. Always add a constructor() method.
// Classes are a template for creating objects. They encapsulate data with code to work on that data

class Students {
    constructor(name,email){
        this.fname = name,
        this.email= email
    }
}
let  student =new Students ("hira ekram","hi")
console.log(student);
