define([
  'jquery',
  'underscore',
  'backbone',
  '../models/category'
], function($, _, Backbone, categoryModel){
  var CategoryCollection = Backbone.Collection.extend({
    model: categoryModel,
    url: "categories.json",
    initialize: function(){

    },
    parse : function(data) {
      // 'data' contains the raw JSON object
      // console.log(data);
      return data;
    }

  });

  return new CategoryCollection;
});
