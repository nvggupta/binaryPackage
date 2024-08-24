const { binarySearch } = require('./index');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;

const result = binarySearch(arr, target);
console.log(`Target found at index: ${result}`); // Should print: Target found at index: 6
