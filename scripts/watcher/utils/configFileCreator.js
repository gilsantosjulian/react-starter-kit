const fs = require('fs-extra');

const { createContent } = require('./contentCreatorOfViewConfigFile');

exports.createFile = (viewsFolderPath, viewsConfigFilePath, viewsAdditionalConfigFilePath) => async () => {
    const viewFileNames = await getFileNamesByPath(viewsFolderPath);
    await removeUnusedAdditionalConfigFiles(viewFileNames, viewsAdditionalConfigFilePath);
    const viewsConfigFileContent = createContent(viewFileNames, viewsFolderPath);
    const viewsConfigFileContentFormatted = JSON.stringify(viewsConfigFileContent, null, 2);
    await createJsonFile(viewsConfigFilePath, viewsConfigFileContentFormatted);
};

const getFileNamesByPath = (path) => {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (error, files) => {
      if (error) return reject(error);

      resolve(files);
    });
  });
};

const createJsonFile = (filePath, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (error) => {
      if (error) return reject(error);

      resolve(true);
    });
  });
};

const removeUnusedAdditionalConfigFiles = async (viewFileNames, viewsAdditionalConfigFilePath) => {
  const additionalConfigFileNames = await getFileNamesByPath(viewsAdditionalConfigFilePath);
  const additionalConfigFileNamesFiltered = getAdditionalConfigFileNamesFiltered(additionalConfigFileNames, viewFileNames);

  additionalConfigFileNamesFiltered.forEach((additionalConfigFileName) => fs.remove(`${viewsAdditionalConfigFilePath}/${additionalConfigFileName.split('.').shift()}.ts`))
};

const getAdditionalConfigFileNamesFiltered = (additionalConfigFileNames, viewFileNames) => {
  return additionalConfigFileNames.filter((additionalConfigFileName) => {
    additionalConfigFileName = `${additionalConfigFileName.slice(0, 1).toUpperCase()}${additionalConfigFileName.slice(1)}x`
    if (!viewFileNames.includes(additionalConfigFileName))
      return additionalConfigFileName;
  });
}