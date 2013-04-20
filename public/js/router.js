// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'models/product',
  'collections/products'
], function($, _, Backbone, Product, ProductList){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'newProduct': "newProduct",
      'manageProducts' : 'listProducts',
      'product/:id': "productDetail",
      // Default
      '*actions': 'listProducts'
      
    },

    newProduct: function(){
      require(['views/product_new'], function (NewProductView) {
        new NewProductView({model:new Product()}).render();
      });
    },
    
    showManage: function() {
      $("#page").unbind();
      this.navigate("manageProducts", true);
    },

    listProducts: function() {
      $("#page").unbind();
      require(['views/product_list'], function (ListView) {
        new ListView().render();
      });
    },
    
    start: function() {
      Backbone.history.start();
      return this;
    },

    productDetail: function(id) {
      $("#page").unbind();
      require(['views/product_detail'], function (ProductDetailView) {
        this.product = ProductList.get(id);
        var productDetailView = new ProductDetailView({model:this.product});
        productDetailView.render();
      });
    }
  });
  
  return new AppRouter();
});
