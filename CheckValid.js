const apmRootPath = path.join(repositoryRootPath, 'apm');
var regexp  = new RegExp('{{([^}]+)}}', 'g');
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');