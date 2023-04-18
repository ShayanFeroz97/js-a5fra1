/* ------------------------
 Find Target using Find Method
 -------------------------- */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = parseInt(prompt('Enter number to find'));
isFound = false;
let result = numbers.find(function (val) {
  if (val == target) {
    return (isFound = true);
  }
});

if (isFound == true) {
  console.log(`Target '${target}' found`);
} else {
  console.log(`Target '${target}' not found`);
}
