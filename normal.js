const timeFromDate = date => date.toTimeString().slice(0, 8);
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);