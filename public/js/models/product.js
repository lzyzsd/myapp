define([
  'underscore',
  'backbone'
], function(_, Backbone) {

  //put interesting things in the model, even validation
  var Product = Backbone.Model.extend({
    initialize: function(){
    },
    url : function() {
      var base = 'products';
      if (this.isNew()) return base;
      return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
    }
  });

  return Product;
});