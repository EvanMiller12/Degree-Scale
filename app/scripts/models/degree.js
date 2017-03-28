var $ = require('jquery');
var Backbone = require('backbone');

var Degree = Backbone.Model.extend({
  idAttribute: 'objectId',

});

// var degreeCollection = new DegreeCollection();
// degreeCollection.urlSetter(2, 'agriculture');
// this.state.collection = degreeCollection.fetch();

var DegreeCollection = Backbone.Collection.extend({
  model: Degree,
  url: function(){
    return 'https://localhost:3000/v1/schools/'
  },
  parse: function(data){
    return data.results;
  },
  urlSetter: function(degree, major) {
    this.url = 'https://localhost:3000/v1/schools/' + degree + '/' + major ;
    return this;
  },
  average: function() {
    var earnings = this.map(function(degree){
      return degree.get('2012.earnings.10_yrs_after_entry.median');
    });
    var average = earnings.reduce(function(a, b){
      return a + b;
    }, 0) / earnings.length;
    return average;
  }
});

// var degrees = new DegreeCollection();
// var degreeData = degrees.urlSetter(1, 'computer')
// degreeData.fetch().done(function(response){
//   console.log(degreeData.average())
//   return degreeData.average();
// });

// var componentData = average.then(function(data){
//   return data.results
// })


module.exports = {
  Degree,
  DegreeCollection
}
