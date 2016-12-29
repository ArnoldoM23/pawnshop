const autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname+'/src/',
    publicPath: '/src/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test:   /\.css$/,
      loader: "style-loader!css-loader!postcss-loader"
    }]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
