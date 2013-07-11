var mongoose = require('mongoose');
var productSchema = mongoose.Schema({
    name: String,
    url: String,
    title: String,
    category: String,
    description: String
});

var Product = mongoose.model('Product', productSchema);