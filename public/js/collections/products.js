define([
  'jquery',
  'underscore',
  'backbone',
  'models/product'
], function($, _, Backbone, dictModel){
  var ProductCollection = Backbone.Collection.extend({
    model: dictModel,
    url: "products",
    initialize: function(){

    },
    parse : function(data) {
      // 'data' contains the raw JSON object
      // console.log(data);
      return data;
    }

  });

  return new ProductCollection;
});
