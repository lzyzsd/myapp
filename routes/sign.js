var User = require('../models/index').User;

exports.showLogin = function (req, res) {
  // req.session._loginReferer = req.headers.referer;
  console.log('show login page');
  res.render('sign/signin');
};

exports.signin = function(req, res) {
	var username = req.body.username.trim();
	var password = req.body.password.trim();
  User.findOne({username: username, password: password}, function(err, user) {
    if(err) {
      console.log('error while finding user');
    }else {
      if(user.role === 'admin')
        res.render('index')
    }
  });
}