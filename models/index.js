var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/test');

require('./product.js');
require('./user.js');
require('./category.js');

exports.Product = mongoose.model('Product');
exports.User =  mongoose.model('User');
exports.Category = mongoose.model('Category');