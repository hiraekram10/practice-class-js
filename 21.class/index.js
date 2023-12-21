var name = ''
let abc = name || 'not provided'
console.log(abc);


var name2 = 'hi'
let abcc = name2 && 'not provided'
console.log(abcc);  //not provided


//closure:
// A closure is the combination of a function 
// bundled together (enclosed) with references to its surrounding state (the lexical environment)
//                    || OR
// a closure gives you access to an outer function's scope from an inner function.


function one(){
    let institute = "smit"
    function two(){
        console.log(institute);
    }
    two()
}
// execution context