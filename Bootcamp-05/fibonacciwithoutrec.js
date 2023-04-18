//Fibonacci without using Recursion
varfibonacci = (num) => {
  (letx = 1), (y = 0), temp;
  while (num >= 0) {
    temp = x;
    x = x + y;
    y = temp;
    num--;
  }
  returny;
};
console.log(fibonacci(20));
