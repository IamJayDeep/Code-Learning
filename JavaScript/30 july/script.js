console.log("alert and Strings")

// alert("Hello There")

// alert("By clicking OK you are conforming that you are 10 years old.")

// alert('Are you OK')

var massage = "Hello, Welcome to JavaScript";
console.log(massage)

// Opration on string
// length - total count of character inside the string (just put .length at last of the variable name)
var any = massage.length
console.log(any)

// index - position of character innside the a string (start from 0 [1st character is always zero] and goes till n-1 {where n is total no. of character})
var charAttwo = massage.charAt(2);
// console.log(charAttwo)

console.log(massage.charAt(20))
console.log(massage.charAt(21))
console.log(massage.charAt(24))

// substring
// if we give starting (startindex) and ending(endindex) number it will give that much character, if we not provide ending it will give evering after starting.
var newStr = massage.substring(10,15)
console.log(newStr)
 
var newStr1 = massage.substring(15,10)
console.log(newStr1)

// above both give same result , it assume smaller value to stating point.

var greeting = "welcome"
var userName = "John"

// var greetingMassage = greeting.concat(userName);
// console.log(greetingMassage) not used
var greetingMassage = greeting + userName
console.log(greetingMassage)
console.log(greeting + userName)
console.log("Hey " + userName + " " + greeting + " to Edyoda")

console.log(2+2)

// Includes - for searching somthing inside a string (give true if word is present, and false for word not present) {Boolean type response}
var msg = "Hey, There we are learning javaScript string method today";
console.log(msg.includes("we"));
console.log(msg.includes("are"));
console.log(msg.includes("john"));
console.log(msg.includes("Today")); // false beacause its case sensitive

console.log(msg.includes("t")); // true
console.log(msg.includes(" ")); // true
console.log(msg.includes("  ")); // false (two spaces)
console.log(msg.includes("nin")); // true

// opposite of charAt - give position
console.log(msg.indexOf("we"))
console.log(msg.indexOf("a"))
console.log(msg.indexOf("hello")) // result -1 (not present)

console.log(msg.lastIndexOf("e"))


var email = "abcd@gmail.com";
console.log(email.endsWith("gmail.com"));

console.log(email.startsWith("abc"))
