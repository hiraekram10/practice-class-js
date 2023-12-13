// function fill(){
// //  var inpValue =  document.getElementById('inp').value
// //  console.log(inpValue)

// //checking attribte value
// // var inpValue =  document.getElementById('inp');
// // var b = inpValue.getAttribute('name')
// // console.log(b);


// // var inpValue =  document.getElementById('inp');
// // var b = inpValue.hasAttribute('class')   //false bcz not 
// // console.log(b);

// var inpValue =  document.getElementById('inp');
// var b = inpValue.setAttribute('class', 'clicking')   
// console.log(b);


// }
// var ul = document.getElementById('ul')



// function foo (){
//     var a = document.getElementById('inp').value
//     var li = document.createElement('li')
//     var liText = document.createTextNode(a)
//     li.appendChild(liText)   LI KA CHILD LI TEXT
//     // console.log(li)

//     ul.appendChild(li) UL KA CHILD LI
// }

var ul  = document.getElementById('ul')

function foo (){
    var a = document.getElementById("inp");
    var li = document.createElement('li');
    var liText = document.createTextNode(a.value)
    li.appendChild(liText)
    ul.appendChild(li)
    a.value = ''


    var deleteBtn = document.createElement('button');
    var deleteBtnText = document.createTextNode('delte')
    deleteBtn.appendChild(deleteBtnText)
    li.appendChild(deleteBtn)
    deleteBtn.setAttribute("onclick","del(this)")


    var editbBtn = document .createElement('button')
    var editBtnText= document.createTextNode('Edit')
    editbBtn.appendChild(editBtnText)
    li.appendChild(editbBtn)
    editbBtn.setAttribute('onclick','edit(this)')

    console.log(li)
    
}

function deleteAll(){
    ul.innerHTML = ''
}

function del(e){
//   e.remove()  btn disappered
  e.parentNode.remove()
}
function edit(e){
    // console.log(e.parentNode.firstChild)
    
     var a =  prompt("Enter Edit menu",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = a

}