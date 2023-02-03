// const math = require("math");

// const arr = [1, 2, 3, 4, 5, 6, 30, 8]
// arr.sort()
// // const temp = math.max(...arr)
// console.log(arr);

// const arr = [1, 3, 5, 6, 7, 7, 5, 4, 3, 1]
// function createPhoneNumber(numbers) {
//   let format = "xxx xxx-xxxx";

//   numbers.forEach((items) => {
//     format = format.replace("x", items);
//   });

//   return format;
// }
// console.log(createPhoneNumber(arr))

// function createPhoneNumber(numbers) {
//     console.log( `(${numbers.slice(0, 3).join("")}) ${numbers
//         .slice(3, 6)
//         .join("")}-${numbers.slice(6).join("")}`);
// }
// createPhoneNumber(arr);
let start = Date.now();
let arr1 = [
  1, 4, 6, 3, 9, 8, 8, 8, 8, 8, 0, 1, 1, 1, 10, 10, 10, 10, 11, 11, 11,
];
const arr = Array.from(new Set(arr1)).sort(function (a, b) {
  return a - b;
});
const check = (arr) => {
  const a = Math.max(arr);
  arr.pop(a);
};
for (let a = 0; a <= 1; a++) {
  check(arr); 
}
const thirdmax = Math.max(...arr);
console.log(thirdmax);
// const fun = (arr, num) => {
//   const minNum = Array.from(new Set(arr)).sort((a, b) => {
//     return a - b;
//   })[num - 1];
//   return minNum;
// };
// console.log(fun(arr1, 5));

let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");
