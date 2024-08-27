console.log("Hello");

var heading = document.getElementById('subheading')
heading.innerText = "ABCD";

var timer = 10;
var timer1 = document.getElementById('timer')
setInterval(() => {
  if (timer === 1) {
    clearInterval(timer)
  }

  timer1.innerText = timer;
  timer--;
}, 1000);

var change = document.getElementsByName('para');
change.style.color = 'blue';