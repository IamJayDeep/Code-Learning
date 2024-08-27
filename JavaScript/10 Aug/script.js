console.log(document);

/*
  DOM 
 */


var heading = document.getElementById('subHeading');
console.log(heading);

var card1 = document.getElementById('card1');
console.log(card1);

var card = document.getElementsByClassName('card');
console.log(card);
var card = document.getElementsByClassName('card2');
console.log(card);

var tag = document.getElementsByTagName('div');
console.log(tag);

var header1 = document.getElementsByTagName('header');
if (header1.length === 0) {
  alert('header not found');  
}
// console.log(header);


//-----------------------------------
//querySelector()

var pArticle = document.querySelector('.subclass p')
console.log(pArticle);
var card = document.querySelector('headerr')
console.log(card);

var allCard = document.querySelectorAll('div ~ div')
console.log(allCard);

var heading = document.getElementById('subHeading')
heading.innerText = "ABC"

var heading = document.getElementById('subHeading');
setTimeout (function() {
  heading.innerText = "Jaydeep"
},5000)

/* 
var img = document.getElementById('card-img')
setTimeout(() => {
  img.alt = "somthing"
  img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWxlyOawWbV241ktPfoIXKQ8iTffGS2Q8DFg&s"
}, 5000);
 */
// console.log(img);

var cards = document.getElementById('card1')
setTimeout(() => {
  cards.innerHTML = "<span>This is Test</span>";
  
}, 5000);

var counter = 10;
// var timer = document.getElementsByClassName('timer')
var timer = document.getElementById('timer');
var interval = setInterval(function () {
  if (counter === 1) {
    clearInterval(interval);
  }
  timer.innerText = counter;
  counter--;
}, 1000);

