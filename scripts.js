
var clicky = document.querySelector('#name').value;
var button = document.querySelector("btn btn-primary");
button.addEventListener("click", console.log(clicky.value), false);

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});

// button.addEventListener("click", console.log(clicky),false);
// function wawa() {
//   clicky.addEventListener("click", console.log(clicky.value), false);
// }

// var internName = document.getElementByID('name').value;
// var submitButton = document.getElementByClass('go').value;

// document.getElementById('alert').innerHTML = 'The user input is: ' + variable;


// var studentList = localStorage.setItem('savedName', internName);

// if (studentList != " ") {

// }
// console.log(document.getIteim(studentList));

// var cat = localStorage.getItem('myCat');
