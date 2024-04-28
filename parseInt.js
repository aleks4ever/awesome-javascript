const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const results = await Promise.all(resultingPromises);
console.log(1 +  -"1" + "2");
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const merge = (a, b) => a.concat(b);