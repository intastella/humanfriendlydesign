module.exports = [
  {
    mode: 'development',
    entry: './src/js/hfd.js',
    output: {
      filename: 'hfd.js',
      library: 'hfd',
      libraryTarget: 'var',
      path: __dirname + './js'
    }
  },
  {
    mode: 'production',
    entry: './src/js/hfd.js',
    output: {
      filename: 'hfd.min.js',
      library: 'hfd',
      libraryTarget: 'var',
      path: __dirname + './js'
    }
  }
];