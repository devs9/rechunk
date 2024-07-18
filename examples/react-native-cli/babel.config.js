const path = require('path');
const pak = require('../../package.json');

module.exports = {
  presets: [
    [
    'module:@react-native/babel-preset',
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
