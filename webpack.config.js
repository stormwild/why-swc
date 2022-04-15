import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const config = {
  mode: 'development',
  output: {
    path: path.resolve('./public/js'),
    clean: true,
  },
  entry: {
    path: path.resolve('./src'),
  },
  devServer: {
    static: './public',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          // `.swcrc` in the root can be used to configure swc
          loader: 'swc-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.scss/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      inject: true,
      filename: path.resolve('./public/index.html'),
      template: path.resolve('./index.html'),
    }),
  ],
  experiments: {
    topLevelAwait: true,
  },
};

export default config;
