const apmRootPath = path.join(repositoryRootPath, 'apm');
const merge = [...new Set(a.concat(b))];
const arrayContains = (arr, element) => arr.includes(element);
const resultingPromises = urls.map((url) => makHttpRequest(url));
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};