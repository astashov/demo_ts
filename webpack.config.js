module.exports = {
  entry: './src/main.ts',
  output: {
    path: './dist',
    filename: '[name].js',
    libraryTarget: "commonjs2"
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    loaders: [
      {test: /\.tsx?$/, loader: 'ts-loader'}
    ]
  },
  devtool: "source-map"
};
