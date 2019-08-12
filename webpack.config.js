const path = require('path');

module.exports = {
  entry: './homeworks/week18/hw2/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './homeworks/week18/hw2/dist'),
  },
  mode: 'production',
};
