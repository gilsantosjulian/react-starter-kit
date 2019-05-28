const { FILES_AND_FOLDERS_EXCLUDED } = require('../config/constants');
const { createFile } = require('./additionalConfigFileCreator');
const { upperCamelCaseToSlugCase } = require('./upperCamelCaseToSlugCase');

exports.createContent = (viewFileNames, viewsFolderPath) => {
  const viewFileNamesFiltered = filterViewFileNames(viewFileNames);
  return buildContentOfViewConfigFile(viewFileNamesFiltered, viewsFolderPath);
};

const filterViewFileNames = (viewFileNames) => {
  return viewFileNames.filter((viewFileName) => {
    const viewFileNameSplitted = viewFileName.split('.');

    if (!FILES_AND_FOLDERS_EXCLUDED.includes(viewFileNameSplitted[0].toLowerCase()))
      return viewFileName;
  });
};

const buildContentOfViewConfigFile = (viewFileNames, viewsFolderPath) => {
  return viewFileNames.map(viewFileName => {
    const viewFileNameSplitted = viewFileName.split('.');
    createFile(viewFileNameSplitted[0], viewsFolderPath);
    return {
      name: viewFileNameSplitted[0],
      path: viewFileNameSplitted[0].toLowerCase() === 'home' ? '/' : `/${upperCamelCaseToSlugCase(viewFileNameSplitted[0])}`,
      extension: viewFileNameSplitted.pop(),
    };
  });
};