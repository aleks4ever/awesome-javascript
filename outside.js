const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const currentDate = () => new Date().toLocaleDateString('en-US');
const merge = (a, b) => a.concat(b);