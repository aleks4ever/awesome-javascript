const symbolsPath = path.join(buildOutputPath, 'symbols');
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const maxNumber = arr => Math.max(...arr);
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;