exports.showLogin = function (req, res) {
  // req.session._loginReferer = req.headers.referer;
  console.log('show login page');
  res.render('sign/signin');
};

exports.signin = function(req, res) {
	var username = req.body.username.trim();
	var password = req.body.password.trim();
	if(username === 'admin' && password === 'adminlzy') {
		console.log('signin successfully!')
		req.session.isAdmin = true;

		res.render('manage.html')
	}
}