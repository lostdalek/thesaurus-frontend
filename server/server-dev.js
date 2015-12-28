var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./../webpack.config.dev.js');

var app = express();
var compiler = webpack(config);
var port = process.env.PORT || 3000;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
    hash: false,
    version: false,
    chunks: false,
    children: false
  }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  if (req.url.slice(-3) === "css") {
    res.type("css");
    res.sendFile(path.join(__dirname, '../assets', 'main.css'));
  } else {
    res.sendFile(path.join(__dirname, '../src', 'index-dev.html'));
  }
});

app.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + port);
});
