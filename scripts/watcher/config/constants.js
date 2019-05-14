const path = require('path');

exports.PUBLIC_VIEWS_FOLDER_PATH = path.resolve(__dirname, '../../../src/views/public');
exports.PUBLIC_VIEWS_CONFIG_FILE_PATH = path.resolve(__dirname, '../../../src/config/publicViews.json');
exports.PUBLIC_VIEWS_ADDITIONAL_CONFIG_FILE_PATH = path.resolve(__dirname, '../../../src/views/public/config');

exports.PRIVATE_VIEWS_FOLDER_PATH = path.resolve(__dirname, '../../../src/views/private');
exports.PRIVATE_VIEWS_CONFIG_FILE_PATH = path.resolve(__dirname, '../../../src/config/privateViews.json');
exports.PRIVATE_VIEWS_ADDITIONAL_CONFIG_FILE_PATH = path.resolve(__dirname, '../../../src/views/private/config');

exports.FILES_AND_FOLDERS_EXCLUDED = ['notfound', 'config'];