console.log("Oprators");


var price = 99;
// Arithmatic oprator 
// Increament : Increase the value by 1
// price++;
// price = price + 1;
price++;
console.log(price); //100

// Decreament : decrease the value by 1
price --; //99
price --; //98
console.log(price);

// increase the number by 5
// price = price + 5 //103
price += 5; // this and above both are same
console.log(price);


// decrease by 10
price -= 10;
console.log(price); //93

var abc = 10;
console.log(abc++); // ans - 10
console.log(abc); // 11 

// price++ -> post increament : USE OLD VALUE AND THEN UPDATE IT

// ++price -> pre increamenet : UPDATE THE VALUE AND THEN USE IT

var abc = 10;
console.log(++abc); // ans - 11
console.log(abc); // 11 


var a = 1;
console.log(a++ + a++ + ++a + a++ + ++a);
// 1 +2 + 4 + 4 + 6
// 17

/**
 * if-else statement
 * if (expression){
 *    true block
 * } else {
 * false block
 * }
 * 
*/

/**
 * Ternary oprator
 * expression ? true block : false block;
*/

var age = 17;
age >= 18 ? console.log("You can give a votr") : console.log("You can not give a vote");

var age = 10;
age >= 18? console.log("You can got") : console.log("You can not got");;

var a = false;
a ? console.log("1") : console.log(0);

// comparision oprator
// (==) : compare the value only not data type,
// (===): compare value and data type both

var a = "true" ; // (number and below is string {only care about value not data type})
a == "1" ? console.log("yes") : console.log("No");

var b = "true"; 
b === "yash" ? console.log("yes") : console.log("No");

//-------------------------------------

console.log(10+10); // math addition
console.log("10"+"10"); // string concatination
console.log(10+"10"); // string concatination
console.log(10 + "John"); // string concatination

console.log(true+"John"); // truejohn
console.log(true+"1"); // truejohn
console.log(false + 1); // truejohn

var c = Number("10")
console.log(c, typeof c);
var c = Number(10)
console.log(c, typeof c);
var c = Number("John") 
console.log(c, typeof c); // NaN - Not a Number (type is number)




var x = Number("john")
x ? console.log("yes") : console.log("No");

var temp = Number(10);
console.log(temp, typeof temp);



var x = parseInt("123john")
x ? console.log("yes") : console.log("No");

var x = parseInt("123john")
console.log(x);