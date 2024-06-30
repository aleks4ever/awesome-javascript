const buildOutputPath = path.join(repositoryRootPath, 'out');
const executableName = getExecutableName(channel, appName);
const symbolsPath = path.join(buildOutputPath, 'symbols');