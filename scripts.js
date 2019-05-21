// function nameGetter() {  
//   var inputName = document.getElementByID("name");
//   localStorage.setItem("name", inputName.value);
// }



var storedValue = localStorage.getItem("name");



var clicky = document.querySelector('#name').value;
var button = document.querySelector("btn btn-primary");
button.addEventListener("click", console.log(clicky.value), false);

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});


