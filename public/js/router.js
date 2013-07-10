// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'models/product',
  'collections/products',
  'models/category'
], function($, _, Backbone, Product, ProductList, Category){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'newProduct': "newProduct",
      'manageProducts' : 'listProducts',
      'product/:id': "productDetail",
      'newCategory': "newCategory",
      'listCategory': 'listCategory',
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

    newCategory: function() {
      require(['views/category_new'], function(NewCategoryView) {
        new NewCategoryView({model: new Category()}).render();
      });
    },

    listCategory: function() {
      require(['views/category_list'], function(ListCategoryView) {
        new ListCategoryView().render();
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
