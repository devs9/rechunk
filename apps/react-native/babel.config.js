module.exports = {
  presets: [['module:@react-native/babel-preset']],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          '@': './src',
        },
      },
    ],
    ['@crherman7/rechunk-babel-plugin'],
  ],
};
