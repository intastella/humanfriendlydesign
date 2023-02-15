module.exports = [
  {
    mode: 'development',
    entry: {
      global: './src/js/global.js',
      loading: './src/js/loading.js',
      home: './src/js/home.js',
      work: './src/js/work.js'
    },
    output: {
      filename: '[name].js',
      path: __dirname + './js'
    }
  },
  {
    mode: 'production',
    entry: {
      global: './src/js/global.js',
      loading: './src/js/loading.js',
      home: './src/js/home.js',
      work: './src/js/work.js'
    },
    output: {
      filename: '[name].min.js',
      path: __dirname + './js'
    }
  }
];