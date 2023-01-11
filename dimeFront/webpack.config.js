module.exports = {
  entry: [__dirname + '/public/assets/scss/style.scss'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        type: 'asset/css',
        generator: {
          filename: 'style.css',
        },
        use: ['sass-loader'],
      },
    ],
  },
};
