console.log( "A" - "B" + 2);
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const getRandomBoolean = () => Math.random() >= 0.5;