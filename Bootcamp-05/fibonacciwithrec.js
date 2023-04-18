/* ------------------------
 Fibonacci with Recursion
 -------------------------- */
let num = prompt('Enter a number');
let ans = 0,
  a = 0,
  b = 1;
function fibonacci(x) {
  if (x > 0) {
    console.log(a);
    ans = a + b;
    a = b;
    b = ans;
    fibonacci(x - 1);
  }
}

fibonacci(num);
