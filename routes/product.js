require('mongoose-pagination');
var Product = require('../models/product');

exports.get = function(req, res) {
	var id = req.params['id'];
	Product.find({id: 1}, function(error, pro) {
		if(error) {

		}else {

		}
	})
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
	var page = req.query['page']*1 || 1;
	var category = req.query['category'] || 'all';
	console.log(req.query);
	console.log("page=" + page + " category=" + category);

	Product
		.find({category: (category==='all' ? null : category)})
		.paginate(page, 3, function(err, docs, total) {
			if(err) {
				res.json({
					status: 'error'
				});
			}else {
				var data = {products: docs, total: total, currentPage: page, totalPage: Math.ceil(total/3), category: category};
				console.log(data);
				res.render("index", data);
			}
		});
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
	var product = new Product({
		id: 1,
		name: 'product1',
		url: 'images/image_1.jpg',
		title: 'title1',
		description: 'description1'
	});

	product.save(function(error, pro) {
		if(error) {
			res.json({
				status: 'error'
			});
		}else {
			res.json({
				status: 'success',
				product: pro
			});
		}
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