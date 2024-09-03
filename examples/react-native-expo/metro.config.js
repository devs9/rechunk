const {getDefaultConfig} = require('expo/metro-config');
const path = require('path');

const workspace = path.resolve(__dirname, '../..');
const config = getDefaultConfig(__dirname);

config.watchFolders = [workspace];
config.resolver.disableHierarchicalLookup = true;
config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'),
  path.resolve(workspace, 'node_modules'),
];

module.exports = config;
