const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const fs = require('fs');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});


app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.get('/', function (req, res) {
  let mainInfo = JSON.parse(fs.readFileSync(path.join(__dirname, 'json', 'web', 'main.json')));
  return res.json(mainInfo);
});

app.listen(process.env.PORT || 8080);



// // include dependencies
// var express = require('express');
// var proxy = require('http-proxy-middleware');
//
// // proxy middleware options
// var options = {
//   target: 'http://www.example.org', // target host
//   changeOrigin: true, // needed for virtual hosted sites
//   ws: true, // proxy websockets
//   pathRewrite: {
//     '^/api/old-path': '/api/new-path', // rewrite path
//     '^/api/remove/path': '/path' // remove base path
//   },
//   router: {
//     // when request.headers.host == 'dev.localhost:3000',
//     // override target 'http://www.example.org' to 'http://localhost:8000'
//     'dev.localhost:3000': 'http://localhost:8000'
//   }
// };
//
// // create the proxy (without context)
// var exampleProxy = proxy(options);
//
// // mount `exampleProxy` in web server
// var app = express();
// app.use('/api', exampleProxy);
// app.listen(3000);