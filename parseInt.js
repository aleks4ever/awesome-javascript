var arr3 = "jones".split('');
const uniqueArray = arr => [...new Set(arr)];
const currentDate = () => new Date().toLocaleDateString('en-US');