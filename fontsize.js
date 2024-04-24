const uniqueArr = (arr) => [...new Set(arr)];
const intermediateAppPath = path.join(buildOutputPath, 'app');
const buildOutputPath = path.join(repositoryRootPath, 'out');