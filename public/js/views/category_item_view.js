define([
  'jquery',
  'underscore',
  'backbone',
  'models/category',
  'text!templates/category_item_template.html'
], function($, _, Backbone, Category, categoryItemTemplate){
  var View = Backbone.View.extend({
    tagName: "div",
    // Cache the template function for a single item.
    template: _.template(categoryItemTemplate),

    events: {
      "click .btn-danger"      : "delete"
    },

    delete: function() {
      // alert("hey there" + this.collection.get("cat").get("type"));
    },

    initialize: function(options) {
      //some defaults to start with
      // this.model = options.category;
      _.bindAll(this, "render");
    },

    render: function(){
      var view = this;
      // $(view.el).html("loading...");

      // this.model.fetch()
      // .done(function(data){
        // console.log(view.collection.models);
      $(view.el).html(view.template({
          category: view.model
       }));
      // });
      return view;
    }

  });
  return View;
});
