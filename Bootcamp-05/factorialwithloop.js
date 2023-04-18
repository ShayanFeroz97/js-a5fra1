/* ------------------------
 Factorial with Loop
 -------------------------- */
let num = prompt('Enter a number');

function factorial(x) {
  let ans = 1;
  for (let i = 1; i <= x; i++) {
    ans *= i;
  }
  return ans;
}

console.log(`${num}! = ${factorial(num)}`);
