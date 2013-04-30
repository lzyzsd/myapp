var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var productSchema = mongoose.Schema({
    name: String,
    url: String,
    title: String,
    description: String
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;