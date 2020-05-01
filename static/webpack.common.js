const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/Main.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname+'build/',
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
				test: /\.(png|gif|svg)$/,
				loader: 'url-loader',
			},
      {
        test: /\.txt$/i,
        use: 'raw-loader',
      },
    ],
  },
};