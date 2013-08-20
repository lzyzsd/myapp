define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/product_item_template.html'
], function($, _, Backbone, productItemTemplate){
  var View = Backbone.View.extend({
    tagName: "div",
    // Cache the template function for a single item.
    template: _.template(productItemTemplate),

    events: {
      "click .btn-danger"      : "delete"
    },

    delete: function(e) {
      $(this.el).remove();
      this.model.destroy();
    },

    initialize: function(options) {
      _.bindAll(this, "render");
    },

    render: function(){
      var view = this;
      $(view.el).html(view.template({
          product: view.model
       }));
      return view;
    }
  });
  return View;
});
