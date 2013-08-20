define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/category_item_template.html'
], function($, _, Backbone, categoryItemTemplate){
  var View = Backbone.View.extend({
    tagName: "div",
    // Cache the template function for a single item.
    template: _.template(categoryItemTemplate),

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
          category: view.model
       }));
      return view;
    }
  });
  return View;
});
