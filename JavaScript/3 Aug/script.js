let fist = Math.atan(45)
console.log(fist);

let a1 = 2 ** 2;
console.log(a1);

console.log(Math.floor(Math.random()*10)); 
console.log(typeof null);
// -----------------------------------------//

/**
 * Arrays: list of same type of data represented by []
 * or 
 * collection of homogenous data type
*/

var userName = "abc";
var userName1 = "bcd";
var userName2 = "cde";
var userName3 = "efg";

var userName = ["abc", "def", "fge", "wwte"]
console.log(userName);

var prices = [12, 23, 34, 45, 56, 67, 78];
console.log(prices);

var user = ["Iron man", "widow", "wanda", "vision"];
/**
 * indexing : startes from zero (0) and end at n-1
*/

console.log(user[2]);
console.log(user[1]);
console.log(user[0]);
console.log(user[7]);


// lenth of the array

console.log(user.length);

// add item in array 
// WRONG WAY TO UPDATE ARRAY (NOT USE)
// user[4] = "America"
// user[6] = "America"
// user[user.length] = "America"
// console.log(user);


// push() : add item to the end of array

user.push("antman")
console.log(user);

// pop(): remove item from the end of the array

user.pop()
user.pop()
console.log(user); // remove 2 item

console.log("---------------------");

// shift() : remove items from starting of the list
user.shift()
console.log(user);

// unshift() : add items from the starting of the list
user.unshift("Dr.strang")
console.log(user);


console.log("---------------------");

// splice(startingIndex, deleteCount, newItem)

user.splice(2,1) // deletion of item
console.log(user);

user.splice(1,0,"loki") // added item at specific location
console.log(user);

user.splice(1, 0, "loki");
user.splice(2,1,"loki1") // replace an item at specific position
console.log(user);

// user.splice(1,2) // delete 2 item
console.log(user);
user.splice(1,2,"jay", "kishan")
console.log(user);

user.splice(2,0,"vijay", "mihir")
console.log(user);

user.splice(2,1,"mohit","viraaj","aryan")
console.log(user);

// mutation change of an item
// all tha above method mutates the array

//--------------------------------//

// slice(): does not mutate the array
// (startingIndex, tillLastIndex)

var temp = user.slice(2,4)
console.log(temp); // 2 and 3 will shown

// join two arrays

var user2 = ["bat", "spider", "lion", "bird", "ant"];
var temp2 = user.concat(user2);
console.log(temp2);
  
// sorting an array: arrange array in perticular fashion

temp2.sort() // A-Z
console.log(temp2);

temp2.reverse()
console.log(temp2); // Z-A

var idx = temp2.includes("lion")
console.log(idx);

var idx = temp2.indexOf("gir")
console.log(idx); // -1 (not available)

let str1 = 'Laurence';
let str2 = "Svekis";
let str3 = undefined;
let str4 = null;
let str5 = 1000;

console.log(typeof (str1), (str2), (str3), (str4), (str5));


let nr1 = 15;
let nr2 = 4;
let result = nr1 % nr2;
console.log(`${nr1} % ${nr2} = ${result}`);

// console.log(nr1++);
// console.log(nr1);
// console.log(++nr1);

console.log(nr1++ + ++nr2);

// let a = prompt("A")
// let b = prompt("B")
// a = Number(a)
// b = Number(b)
// let result1 = Math.sqrt((a*a) + (b*b));
// console.log(result1);

let str22 = Boolean("0")
console.log(str22,);

let x =2;
x += 2;
console.log(x);

x -=2
console.log(x);

x *= 6;
console.log(x);

x /= 2;
console.log(x);

x **= 2;
console.log(x);

x %= 3;
console.log(x);

let a = 1;
let b = 2;
let c = 3;

// let r1 = a + b;
// console.log(r1);
// let r2 = a / c;
// console.log(r2);
// c = c % b;
// console.log(c);

console.log(a>b && b<c);
console.log(a>b && b<c);

console.log(a < b || b < c);
console.log(a > b || b < c);


// not
let x1 = false;
console.log(!x1);

console.log(!(a < b));
console.log(!(a > b));


/**
 * Miles to Km converter
 * 
 * 1 mile = 1.60934km
*/

// let miles = prompt("Gives the value of miles.")
// miles = Number(miles);
// let rst = miles*1.60934 
// console.log(`The distance of ${miles} miles is equal to ${rst} km.`);

/**
 * BMI Calculator
 * 
 * 1 inch=2.54cm
 * 2.2046 pound=1kg
 * 
*/

// let height = prompt("Add your height in feet.");
// let height1 = Number(height * 0.304799);
// let weight = prompt("Add your weight in Kilogram.");
// weight = Number(weight);
// let rst1 = (weight / (height1*height1));
// console.log(`Your Height is ${height}feet and your weight is ${weight}Kg, So your BMI is ${rst1}.`);


