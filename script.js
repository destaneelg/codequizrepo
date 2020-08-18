var question = [
{
  prompt:"What is a useful tool for debugging?\n(A.)Console.log  \n(B.)CSS  \n(C.)HTML   \n(D.)JS ",
  answer: "(A.)"

},
{
  prompt:"What must string values be wrapped in when being assigned to variables?\n(A.) ()   \n(B.) {} \n(C.) []  \n(D.) ``",
  answer: ""

},
{
  prompt:"What can be stored in a javascript array?\n(A.)strings  \n(B.) functions \n(C.) Puppies   \n(D.)Glitter ",
  answer: ""

},
{
  prompt:"Can you access items inside a function on the global scope?\n(A.) Yes    \n(B.) No \n(C.) I'm not sure \n(D.)Absolutely ",
  answer: ""

},
{
  prompt:"How do you use JavaScript in a html file?\n(A.) Script tags   \n(B.) Just write it \n(C.) I'm not sure  \n(D.) You can put Javascript in HTML?!",
  answer: ""

},
{
  prompt:"What year did ES6 come out? \n(A.) 2019   \n(B.)2016  \n(C.) 2015 \n(D.)2020  ",
  answer: ""

},
{
  prompt:"What browsers is ES6 compatible with?\n(A.)    \n(B.)  \n(C.)   \n(D.) ",
  answer: ""

},
{
  prompt:"What version of javascript is internet explorer compatible with?\n(A.)    \n(B.)  \n(C.)   \n(D.) ",
  answer: ""

},
{
  prompt:"How do you reference a html class using javascript?\n(A.)    \n(B.)  \n(C.)   \n(D.) ",
  answer: ""

},
{
  prompt:"How do you reference a HTML ID using javascript?\n(A.)    \n(B.)  \n(C.)   \n(D.) ",
  answer: ""

},
];
var score = 0;
var timer = 70; 


  for (var i = 0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt);
    if (response == questions[i].answers){
        score++; 
        alert ("You're right!");
    }
    else {
     alert ("Wrong!")
    }
  }
alert (" You Got" + score + "out of 10 questions")
