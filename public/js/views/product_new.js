// Filename: views/home/main
define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'text!templates/product_new.html',
  '../collections/categories',
  'jqueryUpload',
  'bootstrap'
], function($, _, Backbone, Router, productTemplate, categories){
  var View = Backbone.View.extend({
    el: $("#page"),

    events: {
      'click #save_product': 'create',
      'click #upload_button': 'upload',
      'change #upload': 'fileSelected'
    },

    initialize: function() {
      // $("#save_product").addClass("disabled");
    },

    create: function() {
      if($("#save_product").attr('class').indexOf('disabled') !== -1) {
        return false;
      }
      var self = this;
      var msg = this.model.isNew() ? 'Successfully created!' : 'Saved!';

      this.model.save({ title: this.$('#productTitle').val(), imageName: this.$('#imageName').val(), description: this.$('#productDescription').val() }, {
          success: function(model, resp) {
            Router.showManage();
          },
          error: function() {
              alert("An error occurred");
          }
      });

      return false;
    },

    getCategories: function() {
      ele = this.el
      categories.fetch({
        success: function(model, response, options) {
          if(response.status !== 'error') {
            var cat = $('#category', ele);
             console.log(cat, ele);
            _.each(response, function(c) {
              if(c.name) {
                cat[0].add(new Option(c.name, c._id));
              }
            });
          }
        }
      });
    },

    render: function(){
      this.el.html(productTemplate);
      this.getCategories();
    },

    upload: function(e) {
      if($('#upload_button').attr('class').indexOf('disabled') !== -1) {
        return false;
      }
      $("#upload_button").button("loading");
      var form = $("#upload_form").addClass("loading");
      $.ajax(
        form.prop("action"),
        {
          files: form.find(":file"),
          iframe: true,
          dataType: "json"
        }
      ).always(function() {
        form.removeClass("loading");
      }).done(function(data) {
        if(data.status === 'success') {
          $("#save_product").removeClass("disabled");
          $("#upload_button").button('reset');
          var fileName = data.name;
          $("#uploaded_image").attr('background-image', '/public/upload/'+fileName);
          $("#imageName").val(fileName);
        }
      });
    },

    fileSelected: function(e) {
      $("#upload_button").removeClass('disabled');
    }
  });
  return View;
});
