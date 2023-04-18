const arr = [
  ['shayan', 'feroz', '25'],
  ['hamza', 'saeed', '23'],
  ['ali', 'khan', '20'],
];
for (let i = 0; i < arr.length; i++) {
  arr[i] = { name: arr[i] };
}
console.log(arr);
