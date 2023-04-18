/* ------------------------
 Filter Odd Numbers, Square them and Sum all squared values
 -------------------------- */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ans = 0,
  result = 0;

let oddNum = numbers.filter((val) => {
  if (val % 2 != 0) {
    return val;
  }
});

let square = oddNum.map((value) => {
  result = value ** 2;
  return result;
});

let sum = square.map((value) => {
  ans += value;
  return ans;
});

console.log(`Odd Numbers: ${oddNum}`);
console.log(`Square of Odd Numbers: ${square}`);
console.log(`Sum of Squared Odd Numbers: ${sum[sum.length - 1]}`);
