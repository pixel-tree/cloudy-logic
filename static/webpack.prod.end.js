const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source map',
  entry: {
    end: './src/End.js',
  },
  output: {
    path: __dirname+'/end',
    filename: '[name].bundle.js',
  },
});
