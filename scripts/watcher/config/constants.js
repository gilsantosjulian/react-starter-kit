const path = require('path');

exports.PUBLIC_VIEWS_FOLDER_PATH = path.resolve(__dirname, '../../../src/components/pages/public');
exports.PUBLIC_VIEWS_CONFIG_FILE_PATH = path.resolve(__dirname, '../../../src/config/routes/publicViews.json');
exports.PUBLIC_VIEWS_ADDITIONAL_CONFIG_FILE_PATH = path.resolve(__dirname, '../../../src/components/pages/public/config');

exports.PRIVATE_VIEWS_FOLDER_PATH = path.resolve(__dirname, '../../../src/components/pages/private');
exports.PRIVATE_VIEWS_CONFIG_FILE_PATH = path.resolve(__dirname, '../../../src/config/routes/privateViews.json');
exports.PRIVATE_VIEWS_ADDITIONAL_CONFIG_FILE_PATH = path.resolve(__dirname, '../../../src/components/pages/private/config');

exports.FILES_AND_FOLDERS_EXCLUDED = ['notfound', 'config', 'splash'];