// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'collections/products'
], function($, _, Backbone, Router, Products){
  var initialize = function(){
    Products.fetch({
      success: function(){
        //HACK?:initialize the router after the initial fetch (guarantees that collection items are available for everyone downstream)
        Router.start();
      }
    });
  }

  return {
    initialize: initialize
  };
});
