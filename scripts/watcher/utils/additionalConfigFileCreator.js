const fs = require('fs-extra');

const { upperCamelCaseToLowerCamelCase } = require('./upperCamelCaseToLowerCamelCase');

exports.createFile = (fileName, viewsFolderPath) => {
  const fileNameInLowerCamelCase = upperCamelCaseToLowerCamelCase(fileName);
  const path = `${viewsFolderPath}/config/${fileNameInLowerCamelCase}.ts`;
  const content = `export default {};`

  if (!fs.pathExistsSync(path))
    createFile(path, content);
};

const createFile = (filePath, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (error) => {
      if (error) return reject(error);

      resolve(true);
    });
  });
};