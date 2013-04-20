define([
  'jquery',
  'underscore',
  'backbone',
  'collections/products',
  'text!templates/product_list.html'
], function($, _, Backbone, productCollection, productListTemplate){
  var View = Backbone.View.extend({
    el: $("#page"),

    // Cache the template function for a single item.
    template: _.template(productListTemplate),

    events: {
      "click #create_word"      : "create"
    },

    create: function() {
      alert("hey there" + this.collection.get("cat").get("type"));
    },

    initialize: function() {
      //some defaults to start with
      this.collection = productCollection;
      _.bindAll(this, "render");
      _.bindAll(this, "fetchAndRender");
      this.collection.bind('change', this.fetchAndRender);
      this.collection.bind('add', this.fetchAndRender);
      this.collection.bind('remove', this.fetchAndRender);
    },
    
    fetchAndRender: function(){ 
      alert("fetch and render");
      productCollection.fetch({success: function(){this.render();}})
    },
    
    render: function(){ 
      
      var view = this;
      $(view.el).html("loading...");  

      this.collection.fetch()
      .done(function(data){
        // console.log(view.collection.models);
        $(view.el).html(view.template({
            products: view.collection.models,
            _: _
         }));    
      });
	  }

  });
  return View;
});
