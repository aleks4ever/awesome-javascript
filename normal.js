const fullName = name || 'buddy';
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));