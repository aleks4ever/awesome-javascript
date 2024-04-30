const fullName = name || 'buddy';
const channel = getChannel(computedAppVersion);
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;