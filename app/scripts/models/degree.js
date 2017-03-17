
var Backbone = require('backbone');

var Degree = Backbone.Model.extend({
  idAttribute: 'objectId',

});

var DegreeCollection = Backbone.Collection.extend({
  model: Degree,
  url: function(){
    return 'https://www.localhost:3000'
  },
  parse: function(data){
    return data.results;
  }
  average: function(){
    
  }
});


module.exports = {
  Degree,
  DegreeCollection
}
