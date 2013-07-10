var fs = require('fs'),
path = require('path');
exports.index = function(req, res) {
  var publicDir = path.resolve(__dirname + '/..');
  console.log(publicDir);
	fs.readFile(publicDir + '/public/manage.html', 'utf8', function(err, text){
    res.send(text);
  });
};