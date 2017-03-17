
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
});

var degrees = new DegreeCollection();

$.get('2012.earnings.10_yrs_after_entry.median')

  console.log(program)


module.exports = {
  Degree,
  DegreeCollection
}
