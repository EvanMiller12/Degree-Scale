var $ = require('jquery');
var Backbone = require('backbone');


var parse = require('../parse_setup').parse;

var ParseModel = Backbone.Model.extend({
  idAttribute: 'objectId',
  save: function(key, val, options){
    delete this.attributes.createdAt;
    delete this.attributes.updatedAt;

    return Backbone.Model.prototype.save.apply(this, arguments);
  },

  setPointer: function(field, parseClass, objectId){
    var pointerObject = {
      '__type': 'Pointer',
      'className': parseClass,
      'objectId': objectId
    };

    this.set(field, pointerObject);

    return this;
  }
});

var ParseCollection = Backbone.Collection.extend({
  whereClause: {},
  parseWhere: function(field, value, objectId){
    // If an objectId is passed in then we are building a pointer where
    if (objectId){
      value = {
        className: value,
        objectId: objectId,
        '__type': 'Pointer'
      };
    }

    this.whereClause[field] = value;

    return this;
  },
  url: function(){
    var url = this.baseUrl;

    if (Object.keys(this.whereClause).length > 0){
      url += '?where=' + JSON.stringify(this.whereClause);
      this.whereClause = {};
    }
    return url;
  },
  parse: function(data){
    return data.results;
  }
});

var ParseFile = ParseModel.extend({
  urlRoot: function(){
    return 'https://hip-puppies.herokuapp.com/files/' + this.get('name');
  }
});

module.exports = {
  ParseModel,
  ParseCollection,
  ParseFile
};
