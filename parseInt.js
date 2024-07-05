const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const removeDuplicates = (arr) => [...new Set(arr)];
const merge = Object.assign({}, obj1, obj2);