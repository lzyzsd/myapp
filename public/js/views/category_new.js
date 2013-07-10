// Filename: views/home/main
define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'text!templates/category_new.html',
  'bootstrap'
], function($, _, Backbone, Router, categoryTemplate){
  var View = Backbone.View.extend({
    el: $("#page"),

    events: {
      'click #save_category': 'create'
    },

    initialize: function() {
      // $("#save_product").addClass("disabled");
    },

    create: function() {
      if($("#categoryName").val().trim() === '') {
        return false;
      }
      var self = this;
      var msg = this.model.isNew() ? 'Successfully created!' : 'Saved!';

      this.model.save({ name: this.$('#categoryName').val() }, {
          success: function(model, resp) {
            Router.listCategory();
          },
          error: function() {
              alert("An error occurred");
          }
      });

      return false;
    },

    render: function(){
      this.el.html(categoryTemplate);
    }
  });
  return View;
});
