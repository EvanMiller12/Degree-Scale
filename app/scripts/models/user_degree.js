var $ = require('jquery');
var Backbone = require('backbone');

var ParseModel = require('./parse').ParseModel;
var ParseCollection = require('./parse').ParseCollection;

var UserDegree = ParseModel.extend({
  urlRoot: 'https://hip-puppies.herokuapp.com/classes/Degrees'
});

var UserDegreeCollection = ParseCollection.extend({
  model: UserDegree,
  url: 'https://hip-puppies.herokuapp.com/classes/Degrees'
});

module.exports = {
  UserDegree,
  UserDegreeCollection
};
