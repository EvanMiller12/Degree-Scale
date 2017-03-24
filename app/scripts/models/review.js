var $ = require('jquery');
var Backbone = require('backbone');

var User = require('./user').User;
var ParseModel = require('./parse').ParseModel;
var ParseCollection = require('./parse').ParseCollection;

var Review = ParseModel.extend({

});

var ReviewCollection = ParseCollection.extend({
  model: Review,
  baseUrl: 'https://hip-puppies.herokuapp.com/classes/Reviews/'
});

module.exports = {
  Review,
  ReviewCollection
}
