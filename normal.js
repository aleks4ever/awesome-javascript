const merge = [...new Set(a.concat(b))];
const isEmptyObject = obj => Object.keys(obj).length === 0;
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;