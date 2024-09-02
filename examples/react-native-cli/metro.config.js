const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const workspace = path.resolve(__dirname, '../..');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resetCache: true,
  watchFolders: [workspace],
  resolver: {
    nodeModulesPaths: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(workspace, 'node_modules'),
    ]
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
