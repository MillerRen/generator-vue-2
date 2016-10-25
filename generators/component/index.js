'use strict';
var path = require('path');
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

    this.argument('namespace', {
      type: String,
      required: true,
      description: 'Generator namespace'
    });
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('component.vue'),
      this.destinationPath('./src/components/' + this.namespace + '.vue'),
      {
        namespace: this.namespace
      }
    );
  }
});
