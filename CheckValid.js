console.log(1 +  "2" + "2");
var pattern = {};
const stringReverse = str => str.split("").reverse().join("");
const flattenedArray = arr => [].concat(...arr);
const toggleBool = () => (bool = !bool);
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));