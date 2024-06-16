const appName = getAppName(channel);
const resultingPromises = urls.map((url) => makHttpRequest(url));