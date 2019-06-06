const path = require('path');
const src_dir = path.join(__dirname, '/client/src');
const dist_dir = path.join(__dirname, '/public/dist');

module.exports = {
  mode: 'production',
  entry: [
    `${src_dir}/index.jsx`,
  ],
  module: {
    rules: [{
        test: [/\.jsx?/],
        include: src_dir,
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015'],
        }
      }
    ]
  },
  output: {
    filename: 'proxyBundle.js',
    path: dist_dir,
  },
};