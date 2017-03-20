var $ = require('jquery');
var Backbone = require('backbone');

var User = require('./user').User;
var ParseModel = require('./parse').ParseModel;
var UserDegree = require('./user_degree').UserDegree;
var UserDegreeCollection = require('./user_degree').UserDegreeCollection;

var Profile = ParseModel.extend({
  defaults: function() {
    return {
      degrees: new UserDegreeCollection(),
      tempDegree: new UserDegree()
    }
  },
  urlRoot: 'https://hip-puppies.herokuapp.com/classes/Profile'
});

// var ProfileCollection = ParseCollection.extend({
//   model: Profile,
//   baseUrl:'https://tiny-parse-server.herokuapp.com/classes/Profile'
// });

module.exports = {
  Profile,
}
