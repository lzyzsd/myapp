require('mongoose-pagination');
var Category = require('../models/index').Category;

var Product = require('../models/index').Product
, fs = require('fs')
, formidable = require("formidable")
, util = require('util');

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
	var category = req.query['category'];
  var options = {};
  if(category) {
    options['category'] = category;
  }
  Category.find({}, function(err, categories) {
    if(err) {
    }else {
      Product
        .find(options)
        .paginate(page, 12, function(err, docs, total) {
          if(err) {
            res.json({
              status: 'error'
            });
          }else {
            var data = {products: docs, total: total, currentPage: page, totalPage: Math.ceil(total/12), category: category, categories: categories};
            res.render("index", data);
          }
        });
    }
  });
};

exports.json_list = function(req, res) {
	Product.find(
		{}
		,function(err, products) {
			if(err) {

			}else {
				res.json(products);
			}
		}
	);
}

exports.edit = function(req, res) {
	var id = req.params['id'];
	console.log(id + " edited");
	res.json({
		status: 'success'
	});
}

exports.save = function(req, res) {
	var product = new Product({
    category: req.body.category,
    url: 'upload/' + req.body.imageName,
    title: req.body.title,
    description: req.body.description
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

exports.json_save = function(req, res) {
  var product = new Product({
    category: req.body.category,
    url: 'upload/' + req.body.imageName,
    title: req.body.title,
    description: req.body.description
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

exports.json_delete = function(req, res) {
  Product.remove({_id: req.params['id']}, function(error) {
    if(error) {
      console.log('delete error ', error);
    }else {
      console.log('delete success');
    }
  });
}

exports.upload = function(req, res) {
  // var form = new formidable.IncomingForm();
  // console.log(form);
  // // console.log(req);
  // form.parse(req, function(err, fields, files) {
  //   res.writeHead(200, {'content-type': 'text/plain'});
  //   console.log('received upload:\n\n');
  //   console.log(util.inspect({fields: fields, files: files}));
  //   res.end('<textarea data-type=\"application/json\">{\"ok\": true, \"message\": \"Thanks so much\"}</textarea>');
  // });
	// console.log(util.inspect(req));
  var tmpPath = req.files.upload.path;
  var fileName = req.files.upload.name;
  targetPath = 'public/upload/' + fileName;
  fs.rename(tmpPath, targetPath, function(err) {
    if (err) throw err;
    fs.unlink(tmpPath, function() {
        if (err) throw err;
    });
    res.json({status: 'success', name: fileName});
    // res.end(JSON.stringify({status: 'success', url: '/public/upload/'+fileName}));
    // res.end('<textarea data-type=\"application/json\">{status: \"success\"}</textarea>')
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