const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // Add this line

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    clean: true,
    assetModuleFilename: 'assets/[name].[ext]',
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    // TODO: false
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      /* Images Loader */
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      },
      /* Style Sheet Loader*/
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      /* NodeJS Loader*/
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(gltf|glb|bin|json)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/models/[name][ext]', // Ensure your models go to assets/models
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.scss', '.json', '.gltf'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'threeJs starter',
      favicon: './src/assets/favicon.ico',
      filename: 'index.html',
      template: 'public/template.html',
    }),
    // ADDED FOR LOADING TEXTURES
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/assets', to: 'assets' }, // Copy public/assets to dist/assets
        { from: 'src/assets/models', to: 'assets/models' }, // Copy GLTF models and associated files
      ],
    }),
  ],
};
