const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);