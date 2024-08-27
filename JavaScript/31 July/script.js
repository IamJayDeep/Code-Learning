console.log("Control Flow")

/* if(expression/condition) {
  // execute code for if condition
} else {
  //execute code on false value
}
*/

var isDrunk = false;

if (isDrunk) {
  console.log("He can not drive a car")
} else {
  console.log ("He can drive a car")
}


var isDrunk = true;

if (isDrunk) {
  console.log("He can not drive a car")
} else   {
  console.log ("He can drive a car")
}

// Arithmatic oprators (+,-,*,/, %)

var price = 98;
var tax = 2
var mrp = price + tax
console.log(mrp);
console.log(price + tax);

var total = 10+2+33+33.33
console.log(total)

var discount = 10;
var newPrice =price - discount;
console.log(newPrice)


var a1 = 15*6
console.log(a1)

// Calc. Intrest on amt of 600 at a rate of 7% for 2 years 

var principle = 600
var rate = 7;
var time = 2;

var newPrinciple = principle*rate*time/100;
console.log(newPrinciple);

var newPrinciple = ((principle*rate*time/100) + principle);
console.log(newPrinciple);

// % (modulus) -> Gives remainder (Division pachi je vadhe te aape)

var div1 = 20 / 3
console.log(div1)

var div1 = 20 % 3
console.log(div1)

var div1 = 20 % 4
console.log(div1)

var div2 = 25%3 + 33-23/2
console.log(div2);


// comparision oprators (<,>,<=,>=, ==, !=)

var result = 15 > 3;
console.log(result); // true

var result = 15 < 3;
console.log(result); // false

var result1 = 5>5;
console.log(result1); // false
var result1 = 5>=5;
console.log(result1); // true
var result1 = 5<=5; 
console.log(result1); // true
var result1 = 11<=5; 
console.log(result1); // true

var result2 = 8 == 8; // equality oprator , true
console.log(result2);

var result = 10 ==9 ; // false
console.log(result);

var result = 9 != 8 // unequality oprator (they are not equal so result is true)
console.log(result);
var result = 9 !=9 ; // false (BOTH EQUAL)
console.log(result);

// assignment oprator (=)

// logical oprator (AND(&&), OR, NOT)

// AND (&&)
  /* true && true = true
    true && false = false 
    false && true = false 
    false && false = false
  */

var abc = true && true;
console.log(abc);
var abc = true && false;
console.log(abc);

var abc = 10>3 && 7>6;
// step1: true && true;
// step2; true;
console.log(abc); // true

var dcf = 77>=71 && 7 <= 44;
console.log(dcf); // true


var rew = 10 != 8 && 6>8 && 50>=44 && true;
console.log(rew);

// OR (||)
/*
true || true = true 
true || false = true 
false || true = true
false || false = false

IF ANY ONE OPERAND IS TRUE , THEN IT WILL RESULT IN TRUE
*/

var vcb = 4>2 || true || 88!=33;
console.log(vcb); // true

/*
* NOT (!)
!true = false 
!false = true
*/

var avd = !20 < 18 && 22>21
console.log(avd);

/*
write a program to calculate entry fees of your park based on the given age range :
0-10 : 0rs
11-20 : 10rs
21-30 : 20rs
31+ : 25rs
*/

var age = 10.5;
var ticketCost = 0;
if (age >= 0 && age <= 10) {
  ticketCost=0;
}  else if (age >= 11 && age <=20) {
  ticketCost = 10;
} else if (age > 21 && age <= 30) {
    ticketCost = 20;
} else if (age >= 31){
  ticketCost =25;
}
  else {
    console.log("Invalid input given for age.");
}

if (age >= 0) {
console.log("Ticket cost =",ticketCost+".00 Rs");
}
