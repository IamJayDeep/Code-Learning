var c = parseInt("122.22")
console.log(c, typeof c); // show integer value

var c = Number("122.22")
console.log(c);

var c = parseFloat("122.22");
console.log(c, typeof c); // show complete value

var input = 8;
var weekDay = "";
/*
if (input === 1) {
  weekDay = "Monday"
} else if (input===2) {
  weekDay = "Tuesday"
} else if (input===3) {
  weekDay = "wednasday"
} else if (input===4) {
  weekDay = "Thursday"
} else if (input===5) {
  weekDay = "Friday"
} else if (input===6) {
  weekDay = "Saturday"
} else if (input===7) {
  weekDay = "Sunday"
} else {
  weekDay = "Invalid Input"
}
*/

//console.log(weekDay);

switch (input) {
  case 1:
    weekDay = "Monday"
    break;
  case 2:
    weekDay = "Tuesday"
    break;
  case 3:
    weekDay = "Wednasday"
    break;
  case 4:
    weekDay = "Thursday"
    break;
  case 5:
    weekDay = "Friday"
    break;
  case 6:
    weekDay = "Saturday"
    break;
  case 7:
    weekDay = "Sunday"
    break;
  default: 
    weekDay = "Invalid Input Given"
}

console.log("==>", weekDay);

var gender = "d";
var discount = 0;

switch (gender) {
  case "m":
    discount = 0;
    break;
  case "f":
    discount = 50;
    break;
  default:
    discount = 30;
    break;
}

// console.log(discount, '%');

// var input = prompt("Enter a Vlue");
// console.log(input);

// var inputA = prompt("Enter value A");
// var inputB = prompt("Enter value B");

// inputA = Number(inputA)
// inputB = Number(inputB)
// console.log(inputA + inputB);


/**
 * -------------- Objects -------------- 
 * 
 * var <name> = {
 *  key: value,
 *  key2: value
 * };
 * 
 */

var student = {
  firstName: "jaydeep",
  lastName: "Patel",
  address: "123, ABC street",
  std: 10,
  section: "A",
};

console.log(student);

var car = {
  Maker: "Tata Moters",
  Model: "Tata Sumo",
  varient: "XML",
  color: "white",
  hasAirBags: true,
  engine: {
    type: "SSS",
    maker: "Mahindra",
    stroke: 4,
    cylinder: 8,
  }
};
console.log(car);
car.color = "black";

car.Model = "Nexon";
console.log(car);

console.log(car.Model);
console.log(car.engine);
console.log(car.engine.type);

delete car.varient; // delete key-value


//-----------------practice----------------//

var num = parseInt(122.22);
console.log(num);
var num = parseFloat(122.22);
console.log(num);

var numb1 = String(233);
console.log(numb1, typeof numb1);

var numb1 = Number("123abc")
console.log(numb1, typeof numb1);

var numb1 = parseInt("123abc");
console.log(numb1);

var numb1 = parseInt(123 + "abc");
console.log(numb1);

var numb2 = "123aas";
console.log(parseInt(numb2));

var numb3 = Number("123.333");
console.log(numb3);


const newNumber = (a, b) => a === 100 || b === 100 || (a + b) === 100;

console.log(newNumber(100,0));

