const isEven = (num) => num % 2 === 0;
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));