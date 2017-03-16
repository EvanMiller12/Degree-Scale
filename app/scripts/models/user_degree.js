var Backbone = require('backbone');

var UserDegree = Backbone.Model.extend({

});

var UserDegreeCollection = Backbone.Collection.extend({
  model: UserDegree,
});

module.exports = {
  UserDegree,
  UserDegreeCollection
}
