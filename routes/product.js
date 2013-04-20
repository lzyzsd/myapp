exports.get = function(req, res) {
	var id = req.params['id'];
	res.json({
		id: id,
		url: "images/image_1.jpg",
		name: "image_1.jpg",
		address: {
			street: '5.Ave'
		}
	});
}

/*
 * GET images listing.
 */

exports.list = function(req, res) {
	var images = [];
	var sizeMap = {
		1: {width: 200, height: 283}
	}
	for(var i=1; i<= 10; i++) {
		images.push({
			id: i, 
			url: "images/image_" + i + ".jpg",
			name: "image_" + i + ".jpg",
			address: {
				street: i + '5.Ave'
			}
		});
	}
	res.json(images)
};

exports.edit = function(req, res) {
	var id = req.params['id'];
	console.log(id + " edited");
	res.json({
		status: 'success'
	});
}

exports.save = function(req, res) {
	console.log(req.body);
	console.log(" saved");
	res.json({
		status: 'success'
	});
}

exports.test = function(req, res) {
	var data = {
		user: {
			name: 'name',
			title: 'title'
		},
		detail: {
			description: 'description'
		}
	};
	console.log(data);

	res.json(data);
}