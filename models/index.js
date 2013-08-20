var mongoose = require('mongoose');
// mongoose.connect('mongodb://bruce:243161193@ds057877.mongolab.com:57877/shop');
mongoose.connect('mongodb://127.0.0.1:27017/test');

require('./product.js');
require('./user.js');
require('./category.js');

exports.Product = mongoose.model('Product');
exports.User =  mongoose.model('User');
exports.Category = mongoose.model('Category');