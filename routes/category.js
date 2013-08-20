var Category = require('../models/index').Category;
exports.json_list = function(req, res) {
  Category.find({}, function(err, categories) {
    if(err) {
      res.send({status: 'error'});
    }else {
      res.send(categories);
    }
  });
}

exports.json_save = function(req, res) {
  var category = new Category({
    name: req.body.name
  });

  category.save(function(err, cate) {
    if(err) {

    }else {
      res.send({status: 'success', category: cate});
    }
  });
}

exports.json_delete = function(req, res) {
  console.log(req.params['id']);
  Category.remove({_id: req.params['id']}, function(error) {
    if(error) {
      console.log('delete error', error);
    }else {
      console.log('delete success');
    }
  });
}