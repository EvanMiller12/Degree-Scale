var $ = require('jquery');
var Backbone = require('backbone');

// var User = require('./user').User;
var ParseModel = require('./parse').ParseModel;
var ParseCollection = require('./parse').ParseCollection;
// var UserDegree = require('./user_degree').UserDegree;
var UserDegreeCollection = require('./user_degree').UserDegreeCollection;

var Profile = ParseModel.extend({
  defaults: function() {
    return {
      degrees: new UserDegreeCollection()
    };
  },
  urlRoot: 'https://hip-puppies.herokuapp.com/classes/Profile'
});

var ProfileCollection = ParseCollection.extend({
  model: Profile,
  baseUrl: 'https://hip-puppies.herokuapp.com/classes/Profile'
});

module.exports = {
  Profile,
  ProfileCollection
};
