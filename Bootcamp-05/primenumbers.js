/* -------------------
 Find Prime Numbers
 --------------------- */
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.filter((val) => {
  if (val === 1) {
    return console.log(
      `${val}: is neither a prime number nor a composite numbber`
    );
  }
  for (var i = 2; i <= Math.sqrt(val); i++) {
    if (val % i === 0) {
      return console.log(`${val}: is a composite number`);
    }
  }
  return console.log(`${val}: is  a prime number`);
});
