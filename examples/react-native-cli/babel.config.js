const path = require('path');
const pak = require('../../package.json');

module.exports = {
  presets: [
    [
    'module:@react-native/babel-preset',
      /*
      * the enableBabelRuntime: false has been added for correct work of rechunk.
      * but we are working on a solution so that this option does not need to be added to the project.
      * */
      {
        "enableBabelRuntime": false,
      }
    ]
  ],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          [pak.name]: path.join(__dirname, '../..', pak.source),
          '@': './src',
        },
      },
    ],
    [path.resolve('../../dist/babel')],
  ],
};
