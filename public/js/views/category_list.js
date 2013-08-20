define([
  'jquery',
  'underscore',
  'backbone',
  'collections/categories',
  'views/category_item_view',
  'text!templates/category_list.html'
], function($, _, Backbone, categoryCollection, CategoryItemView, categoryListTemplate){
  var View = Backbone.View.extend({
    el: $("#page"),

    // Cache the template function for a single item.
    template: _.template(categoryListTemplate),

    events: {
      "click #create_word"      : "create"
    },

    create: function() {
      // alert("hey there" + this.collection.get("cat").get("type"));
    },

    initialize: function() {
      //some defaults to start with
      this.collection = categoryCollection;
      _.bindAll(this, "render");
      _.bindAll(this, "fetchAndRender");
      this.collection.bind('change', this.fetchAndRender);
      this.collection.bind('add', this.fetchAndRender);
      this.collection.bind('remove', this.fetchAndRender);
    },

    fetchAndRender: function(){
      // alert("fetch and render");
      categoryCollection.fetch({success: function(){this.render();}})
    },

    render: function(){
      var view = this;
      $(view.el).html("loading...");

      this.collection.fetch()
      .done(function(data){
        $(view.el).html('');
        _.each(view.collection.models, function(model) {
          var itemEl = new CategoryItemView({model: model}).render().el;
          $(view.el).append(itemEl);
        });
      });
    }

  });
  return View;
});
