console.log("Hello!");
// Synthex of Function;
/* function <function-name> (argument = default value) {
  function body
  } 
*/

function jay(num1,num2) {
  var result = num1 + num2;
  return result;
}

var total = jay(5, 7);
console.log(total);

function newGet(principle, rate, time) {
  if (!principle || !rate || !time) {
    alert('Principle, Rate and Time Should be given');
  } 
  var si = (principle * rate * time) / 100
  var finalAmt = principle + si;
  return finalAmt;
}

// var newPrinciple = newGet(10000,7,2.5)
// console.log(newPrinciple);

// var temp = newGet(20000, 5, 3);
// console.log(temp);

var p = Number(prompt("Enter The Principle Amount"));
var r = Number(prompt("Enter the Rate of Intrest"));
var t = Number(prompt("Enter the Time period"));

var temp2 = newGet(p, r, t);
console.log(temp2);

// username = "Jay";
function greetUser(username = "There") {
  var greeting = (`Hello ${username}, Welcome to JS session`);
  return greeting;
}

var uName = greetUser("John")
console.log(uName);

// function test() {
//   return "hello";
// }
// console.log(test());

console.log(typeof console.log);

///----------------------------------------
// Print hello in console after 5 sec
// setTimeout(callback fucntion, time in ms);

function greet() {
  console.log("Hello John");
}

setTimeout(greet, 5000)
