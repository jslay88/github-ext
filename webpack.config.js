const path = require('path');

module.exports = {
  entry: './src/content.ts',
  output: {
    filename: 'content.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd', // Ensure compatibility with browsers
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'production',
};
