define([
  'jquery',
  'underscore',
  'backbone',
  'collections/products',
  'models/product',
  'text!templates/product_detail.html'
], function($, _, Backbone, wordCollection, Product, ProductListTemplate){
  var ProductDetailView = Backbone.View.extend({
    el: $("#page"),

    // Cache the template function for a single item.
    template: _.template(ProductListTemplate),

    events: {
    },

    initialize: function() {
    },

    render: function(){ 
      $(this.el).html(this.template({
        product: this.model,
        _: _
      }));
    }
  });
  
  return ProductDetailView;
});