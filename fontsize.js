const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const isEmptyObject = obj => Object.keys(obj).length === 0;
console.log("0 || 1 = "+(0 || 1));