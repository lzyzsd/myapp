var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    role: String,
});

var User = mongoose.model('User', userSchema);