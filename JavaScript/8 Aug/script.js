console.log("Hello!");

var info = ["jay", "vijay", "mitesh", "suraj"];
console.log(info[0]);
info[0] = "deep";
console.log(info);

info[-1] = "jay";
info[8] = "jay2";
console.log(info);
console.log(info.length); 

/* NEGATIVE INDEX WILL NOT COUNTED WHEN WE CALCULATE INDEX */

// length 

var info2 = ["jay", "vijay", "mitesh", "suraj"];
var Booleans = [true, false, true, false, true];
var empt = [];
console.log(empt.length);
console.log(info2.length);
console.log(Booleans.length);

/* at() : shows what is available at that index */
let num = [1, 2, 3, 4, 5, 5, 6, 6, 7];
console.log(num.at(1)); 

let nam = ["jay", "sunil", "krunik", "kul", "deep"];
console.log(nam.at(30)); //undefined


console.log(nam.at(nam.length - 1));
console.log(nam[3]);

var shoppingList = ["Milk", "Bread", "Apple"];
console.log(shoppingList);
console.log(shoppingList.length);
shoppingList[1] = "banana";
console.log(shoppingList);
shoppingList[7] = "banana";
console.log(shoppingList);
shoppingList[10] = "banana";
console.log(shoppingList);
shoppingList[20] = "banana";
console.log(shoppingList.length);

console.log(shoppingList.push("kaju"));
console.log(shoppingList);

var shop = ["Vijay", "Kumar", "Mohit", "Viraj", "Suraj", "Nitya"];
let shopNew = [shop.push("Bharat")]
console.log(shop);
shop.push("Prit")
console.log(shop);
shop.pop(); //Remove item from last position. 
shop.pop()
console.log(shop);

/* --------------------------- */

/* Splice(): add element at certain Index 
Format : .splice(StartingIndex,DeleteCount, NewItems)
*/

shop.splice(2, 0,'kuki', 'Kunti');
console.log(shop);
shop.splice(6,8,'kuki2', 'Kunti2');
console.log(shop);

console.log();


let numb1 = [1, 2, 3, 4, 5, 6, 7, 9, 10];
let numb2 = [11, 22, 33, 44, 55];
let numb3 = numb1.concat(numb2)
console.log(numb3);
numb1.splice(10, 0, 77, 66, 77, 88)
console.log(numb1);

var numb4 = numb1.concat(numb3)
console.log(numb4);

numb4.shift() // DELETE FIRST ELEMENT
console.log(numb4);


console.log(numb4.indexOf(5));
console.log(numb4.lastIndexOf(5));
console.log(numb4.sort());
console.log(numb4.reverse());

console.log("-----EXE-3.2-----");

var shoppingList1 = [];
shoppingList1[0] = "Milk"
shoppingList1[1] = "Bread"
shoppingList1[2] = "Apple"
console.log(shoppingList1);

shoppingList1.splice(1, 1, "Banana", "Eggs");
console.log(shoppingList1);

shoppingList1.splice(1, 1, "Bread", "Butter")
console.log(shoppingList1);

shoppingList1.splice(1, 3, "Banana", "Eggs");
console.log(shoppingList1);

var removed = shoppingList1.pop()
console.log(removed);


var removed = shoppingList1.pop()
console.log(removed);

shoppingList1.push("Eggs")

console.log(shoppingList1.sort());

shoppingList1.push("Banana")
shoppingList1.pop()
console.log(shoppingList1);

console.log(shoppingList1.indexOf("Milk"));
console.log(shoppingList1.indexOf("Banana"));

shoppingList1.splice(1,0,"Carrots","Lettuce")
console.log(shoppingList1);

var newShoppingList = ["Juice", "Pop"];
var shoppingList = shoppingList1.concat(newShoppingList,newShoppingList)
console.log(shoppingList);

console.log(shoppingList.lastIndexOf("Pop"));

console.clear();
console.log("--------======---------");
console.log("/* JS ASSIGNMENT 2 */")

console.log("Q1");
var input = [1, 2, 3, 4, 5, 1, 2, 3];
var target = 1;
var position = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === target) {
    position.push(i);
  }
}
  console.log(position);

//===================================

var input = [1, 2, 3, 4, 5, 1, 2, 3];
var target = 8;
var position = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === target) {
    position.push(i)
  }
}
console.log(position);
console.log(position.length > 0 ? position : -1);

console.log("-----Q2------");

let line = 5;
for (let i = line; i >= 1; i--){

}



var inputs = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let value of inputs) {
  sum += value;
}

let avg = sum / inputs.length
console.log(`Average marks of the class = ${sum}`);


var items = [250, 645, 300, 900, 50];
for (let i = 0; i < items.length; i++) {
  let offer = items[i] / 10;
  items[i] -= offer 
}
console.log(items);