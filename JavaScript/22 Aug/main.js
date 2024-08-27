console.log('Hello');

// let sent = "This is an example!";


// const new1 = sent.split(' ');
// const reverseWord = new1.map((word) => {
//   word.split('').reverse().join('')
// });

// const reverseSentence = reverseWord.reverse().join(' ');
// console.log(reverseSentence);

// const input = "This is an example!";
// const words = input.split(" "); // Split into words
// const reversedWords = words.map(word => word.split("").reverse().join("")); // Reverse each word
// const reversedSentence = reversedWords.join(" "); // Reverse the order of words and join
// console.log(reversedSentence); // Output: "sihT si na !elpmaxe"

// const num = 9119;
// function squares(num) {
//   const each = num.toString().split('');
//   const square = each.map(function (i) {
//     Math.pow(parseInt(i), 2);
//   });
//   const rst = parseInt(square.join(''));
//   return rst
// }
// // let join = square.toString().join('')
// console.log(rst);

// function squareDigits(num) {
//   const digits = num.toString().split('');
//   const squaredDigits = digits.map(digit => Math.pow(parseInt(digit), 2));
//   const result = parseInt(squaredDigits.join(''));
//   return result;
// }


// ----------------------------------------
function digitalRoot(n) {
  if (n < 10) {
      return n
  }
  return digitalRoot(('' + n).split('').reduce((acc,c) => parseInt(acc) + parseInt(c), 0))
}