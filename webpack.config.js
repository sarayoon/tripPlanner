module.exports = {
  mode: 'development',
  entry: './src/index.js', // root of our dependency tree, where we start reading
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
};
