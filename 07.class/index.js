// var city ="karAcHi"
// // document.write(city.toUpperCase())   //KARACHI
// document.write(city[4])


var cityName= prompt('enter karachi')
var city = cityName.slice(0,1).toUpperCase()
var city2= cityName.slice(1).toLowerCase()
console.log((city+city2));

// flag to learn

var obj= {
    id:'ms12',
    name:'hira',
    age:29,
    dept:'microbiology'

}

// forin -- loop for obj
// for(var key in obj){
//     document.write(key,":" , obj[key], "<br>")
// }


// console.log(obj.name, obj.dept);  acess obj properties

//localstorage
// localStorage.setItem('firstName','hira')
// for deleting
// localStorage.clear()

//session storage
// sessionStorage.setItem('lastName', 'ekram')