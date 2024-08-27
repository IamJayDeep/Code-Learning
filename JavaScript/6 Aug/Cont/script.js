console.log("Hello!");

/**
 * loop : repetition
 * 
 * types : two
 * 1. While
 * 2. for
 * 
 * 
 *  --> while Syntex 
 * initialization {
 * while(condition)
 * // Write code we want to repeat
 * increament/decreament
 * }
*/

// var counter = 0;
// while (counter < 100) {
//   console.log("I Know You?");
//   counter++;
  // counter--;  (Infinite)
// }

// write programe for table of 25
var counter = 1;
while (counter <= 10) {
  // console.log(25 * counter);
  console.log(25 + "x" + counter + "=" + 25*counter);
  // console.log(25,'x',counter,'=',counter*25);
  counter++;
}


var let2 = ["A","B","C","D","E","F"];

var count = 0;
while (count < let2.length) {
  console.log("hello",let2[count]);
  count++;
}


/**
 * --> FOR Loop Syntex;
 * for(Initialization;condition;increment/decreament) {
 * write your repetation code
 * }
*/

for (var count = 0; count < 10; count++) {
  console.log("hello");
}

var tableNum = 5;
for (var count = 1; count < 11; count++){
  console.log(tableNum+"x"+count+"="+tableNum*count
  );
}

for (var count = 0; count < let2.length; count++) {
  console.log("Hello", let2[count]);
}

//--------------------------------------------

//Break : USed to stop loop in between on a certain condition
// Continue: Used to skip an Iteration in between the loop execution

for (var i = 1; i < 10; i++){
  if (i===7) {
    break;
  }
  console.log(i);
}

for (var i = 1; i < 10; i++) {
  if (i===7) {
    continue
  }
  console.log(i);
}
console.log("---------------------------");
for (var i = 1; i < 100; i++){
  if (i%2 === 1) {
    console.log(i);
  }
}

console.log("hello");

var info = ["tesla", "maruti", "toyota"];
console.log(info[0]);

info[0] = "suzuki";
console.log(info[0]);
console.log(info);

info[3] = "isuzu";



