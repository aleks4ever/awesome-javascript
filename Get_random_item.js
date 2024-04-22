const allResults = await Promise.all(items.map(async (item) => {}));
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const merge = (a, b) => a.concat(b);
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const toggleBool = () => (bool = !bool);