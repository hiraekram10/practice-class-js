var index = 0
var btn = document.getElementById('btn')
var score = 0
var min = 1
var sec = 59
var timer = document.getElementById('timer')

var interval = setInterval(function () {
  timer.innerHTML = `${min} : ${sec}`
  //  sec--
  if (sec < 0) {
    min--
    sec = 59
    if (min < 0) {
      sec = 59
      min = 1
      nextQuestion()
    }
  }
}, 100)

var questions = [
 { question:`Q:01 What does HTML stand for?`,
  option1: 'Hyperlinks and Text Markup Language',
  option2: 'Hypertext Markup Language',
  option3: 'Home Tool Markup Language',
  correctOption: "Hypertext Markup Language"
},
{
  question: ' Q:02 Who is making the Web standards?',
  option1: 'Google',
  option2: 'The World Wide Web Consortium',
  option3: 'Microsoft',
  correctOption: "The World Wide Web Consortium"
},
{
  question: 'Q:03Choose the correct HTML element for the largest heading:',
  option1: '<heading>',
  option2: '<h6>',
  option3: '<h1>',
  correctOption: "<h1>"
},
{
  question: ' Q:04 What is the correct HTML element for inserting a line break?',
  option1: '<linebreak>',
  option2: '<br>',
  option3: '<break>',
  correctOption: "<br>"
},
{
  question: ' Q:05 What is the correct HTML for adding a background color?',
  option1: '<body bg="yellow">',
  option2: '<background>yellow</background>',
  option3: '<body style="background-color:yellow;">',
  correctOption: '<body style="background-color:yellow;">'
},
{
  question: 'Q:06 Choose the correct HTML element to define important text:',
  option1: '<strong>',
  option2: '<b>',
  option3: '<i>',
  correctOption: '<strong>'
},
{
  question: 'Q:07 Choose the correct HTML element to define emphasized text:',
  option1: '<italic>',
  option2: '<i>',
  option3: '<em>',
  correctOption: "<em>"
},
{
  question: 'Q:08 What is the correct HTML for creating a hyperlink?',
  option1: '<a>http://www.w3schools.com</a>',
  option2: '<a href="http://www.w3schools.com">W3Schools</a>',
  option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
  correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
},
{
  question: 'Q:09 Which character is used to indicate an end tag?',
  option1: '*',
  option2: '/',
  option3: '<',
  correctOption: "/"
},

{
  question: 'Q:10 Which of these elements are all <table> elements?',
  option1: '<table> <tr> <td>',
  option2: '<table> <head> <tfoot>',
  option3: '<table> <tr> <tt>',
  correctOption: "<table> <tr> <td>"
},


];

var ques = document.getElementById('ques')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')




function nextQuestion() {
  var getOptions = document.getElementsByName('options')
  //    console.log(getOptions)
  for (var i = 0; i < getOptions.length; i++) {
    // console.log(getOptions[i].value)
    if (getOptions[i].checked) {
      var selectedValue = getOptions[i].value
      var selectedQues = questions[index - 1]['question']
      var selectedAns = questions[index - 1][`option${selectedValue}`]
      var correctOpt = questions[index - 1][`correctOption`]
      if (selectedAns == correctOpt) {
        score++
        
      }
    }

    getOptions[i].checked = false
   
  }
  btn.disabled = true

  if (index > questions.length - 1) {
    // console.log("questions end")
    console.log(`your score is ${(score / questions.length) * 100}%`);
    
    
  } else {
    ques.innerText = questions[index].question
    opt1.innerText = questions[index].option1
    opt2.innerText = questions[index].option2
    opt3.innerText = questions[index].option3
    min = 1
    sec= 59
    index++
    
  }



}

nextQuestion()

function clicked() {

  btn.disabled = false
}