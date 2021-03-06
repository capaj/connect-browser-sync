var express = require('express');
var http = require('http');
var routes = require('./routes');
var app = express();

app.set('views', __dirname);
app.set('view engine', 'ejs');
app.use(express.logger('dev'));

if (app.get('env') == 'development') {
  var browserSync = require('browser-sync');
  var bs = browserSync.init([], { debugInfo: false });
  app.use(require('connect-browser-sync')(bs));
}

app.use(app.router);

app.get('/', routes.index);

http.createServer(app).listen(3000, function() {
  console.log('Listening...');
});
