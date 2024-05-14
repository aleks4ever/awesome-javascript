const randomBoolean = () => Math.random() >= 0.5;
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;