const merge = (a, b) => a.concat(b);
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const merge = [...new Set(a.concat(b))];
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const toggleBool = () => (bool = !bool);
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");