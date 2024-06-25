const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const flattenedArray = arr => [].concat(...arr);
const buildOutputPath = path.join(repositoryRootPath, 'out');