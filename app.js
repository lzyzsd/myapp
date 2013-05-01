    // "mongoose-pagination": "*"
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , product = require('./routes/product')
  , sign = require('./routes/sign')
  , admin = require('./routes/admin')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', product.list);
app.get('/users', user.list);
// app.get('/products.html', product.list_html);
app.get('/products', product.list);
app.get('/products/test', product.test);
app.get('/products/:id', product.get);
app.post('/products', product.save);
app.put('/products/:id', product.edit);

app.get('/products.json', product.json_list);
app.post('/products.json', product.json_save);

app.get('/signin', sign.showLogin);
app.post('/signin', sign.signin);
app.get('/admin', admin.index);

app.get('/fileupload', function(req, res) {
  res.render('fileupload');
});
app.post('/fileupload', function(req, res) {
  console.log(req.body);
  console.log(req.files);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
