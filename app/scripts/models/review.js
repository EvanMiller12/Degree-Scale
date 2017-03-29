var $ = require('jquery');
var Backbone = require('backbone');
var moment = require('moment');

var User = require('./user').User;
var ParseModel = require('./parse').ParseModel;
var ParseCollection = require('./parse').ParseCollection;

var Review = ParseModel.extend({
  urlRoot: 'https://hip-puppies.herokuapp.com/classes/Reviews',

  initialize: function(){
    this.isNew() ? this.set('timestamp', moment().format('ll')) : this.set('timestamp', this.get('timestamp'));
  }
});

var ReviewCollection = ParseCollection.extend({
  model: Review,
  baseUrl: 'https://hip-puppies.herokuapp.com/classes/Reviews',
  comparator: -'timestamp'
});

module.exports = {
  Review,
  ReviewCollection
};
