

// find index no
// var arr= ["hira","haya","zara"];
// console.log(arr.indexOf('haya')) //1
// console.log(arr.indexOf("zaar")) //-1 cant find


//  var arr= ["hira","haya","zara","hira"];
//  console.log(arr.indexOf('hira',1)) //3



// last indexof  starting from last
var arr= ["hira","haya","zara","hira"];
console.log(arr.lastIndexOf("haya"))  //1


// charAt  give indexno to find character at that index

var name = 'Green'
console.log(name.charAt(1))


//student have 73.2 after round of percentage would be 73 1-4(no pecentage change or increase)  {Math.Round}
//Math.ceil 73.2 become 75 increase 
//Math.floor 73.9 become 73

var percentage = 73.2
console.log(Math.round(percentage));  //73
console.log(Math.ceil(percentage))  //74
console.log(Math.floor(percentage))  //73


//MATH.RANDOM  genrate random nos
console.log(Math.random()*1);   // 0.SOMETHING
console.log(Math.random()*2); // 0. -1.



// var playerOne = prompt('Enter heads NAME')
// var playerTwo = prompt('Enter TAILS NAME')


// var toss = Math.random() * 2
// var change = Math.floor(toss)
// if(change == 0){
//     console.log(playerOne + "heads win")
// }else{
//     console.log(playerTwo + "tails win");
// }


// console.log(Math.floor(toss))

 var ul = document.getElementById("unorderlist")
function toss(){
    var playerOne = document.getElementById('inpOne')
    var playerTwo = document.getElementById('inpTwo')
    var tossing = Math.random ()* 2
    var change = Math.floor(tossing)
  if(change == 0){
        var a = playerOne.value + " heads win"
    }else{
      a =  playerTwo.value + " tails win"
    }
  
    var list = document.createElement('li')
    var listText = document.createTextNode(change +"" + a)
    list.appendChild(listText)
    ul.appendChild(list)
    if(change == 0){
      list.setAttribute('class','one')
    }else{
      list.setAttribute('class','two')
    }
    playerOne.value = ""
    playerTwo.value= ""
    
  
}






