var Category = require('../models/index').Category;
/*
 * GET home page.
 */

exports.index = function(req, res){
  Category.find({}, function(err, categories) {
    if(err) {
      // res.send({status: 'error'});
    }else {
      res.render('index', { title: 'Express', categories: categories });
    }
  });
};