// var obj = {
//     fruit:'Banana',
//     color:'Yellow',
//     quantity:6
// }
// console.log(obj)

// // overwrite
//  obj.quantity = 5
//  console.log(obj);


// //  add
//  obj.taste = 'sweet'
//  console.log(obj)

// //  delte (keyword)
//  delete obj.quantity
//  console.log(obj)



//  var student1 = {
//     sName: 'hira',
//     sClass: 15,
//     sRoll : '56A',
//     greet: function (){
//       console.log( 'hello ' + this.sName)
//     }
//  }



//  student1.greet()
//  var student2 = {
//     sName: 'Nida',
//     sClass: 'js',
//     sRoll : '54B'
//  }



//  var student3 = {
//     sName: 'Haya',
//     sClass: 'css',
//     sRoll : '45A'
//  }

//  var students = [student2,student3]
//  console.log(students);



// function ProvideDataa(sNaame,sClass,sRoll){
//     return {
//     sName: sNaame,
//     sClass: sClass,
//     sRoll :sRoll

//     }
// }
//  var students = [ProvideDataa('hira','css',"76Ab"),ProvideDataa('biya','css',"76Ab")]
//  console.log(students);


// function ProvideDataa(){
//     return {
//     sName: prompt('Enter Name'),
//     sClass: prompt('Enter class'),
//     sRoll :prompt('Enter roll no')

//     }
// }
//  var students = [ProvideDataa()]
//  console.log(students);

// var preData = localStorage.getItem('students')
// var students =preData ? JSON.parse(preData):[] 

// function addData(){
//     var std =  {
//     sName: prompt('Enter Name'),
//     sClass: prompt('Enter class'),
//     sRoll :prompt('Enter roll no')

//     }
//     students.push(std)
//     console.log(students);
//     var stringing = JSON.stringify(students)
//     localStorage.setItem('students',stringing)
// }


// localStorage.setItem(prp,"hira")\


// obj loop


// var cars = {
//     honda: {
//         civic: {
//             reborn: {
//                 name: 'Honda Civic Reborn',
//                 year: 2023,
//                 price: 3000,
//                 colors: ["red", "green", "black"],
//                 gate: 4,
//                 wheel: 4
//             }
//         }
//     },
//     toyyota: {
//         corolla: {
//             gli: {
//                 name: 'Toyyota corolla GLI',
//                 year: 2020,
//                 price: 10000,
//                 colors: ["blue", "white", "black"],
//                 gate: 4,
//                 wheel: 4
//             }
//         }
//     },

// }

// var user= 'honda'
// var model ="civic"

// console.log(cars[user][model]);  //reborn{}


// neested loop

// for (var company in cars) {
//     // console.log(keys);
//     for (var model in cars[company]) {
//         // console.log(model);
//         for (var variant in cars[company][model]) {
//             // console.log(variant);
//             console.log(cars[company][model][variant].colors);
//         }
//     }
// }


practice
var kingdomAnimalia = {
    vertebrates:{
        warmblooded:{
            mamals:{
                names:['Cow ', 'Goat','horse'],
                colro:'brown',
                legs: "four",
                feed:"Grass"
            }
        }
    },
    invertebrates:{
        coldblooded:{
           Fishes:{
                names:['starFish ', 'RoutFish','greenFish'],
                colro:'grey',
                legs: "no legs",
                feed:"meat"
            }
        }
    }

}


 for( var species in kingdomAnimalia){
    // console.log(species);
    for(var animals in kingdomAnimalia[species]){
        // console.log(animals);
        for(var habitat in kingdomAnimalia[species][animals]){
            // console.log(habitat);
            console.log(kingdomAnimalia[species][animals][habitat].legs);
        }
    }
 }