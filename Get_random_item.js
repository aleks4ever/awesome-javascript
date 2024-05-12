const appName = getAppName(channel);
var DELIM_SIZE = 4;
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;