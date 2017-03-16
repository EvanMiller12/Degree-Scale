var Backbone = require('backbone');

var DegreeReview = Backbone.Model.extend({

});

var DegreeReviewCollection = Backbone.Collection.extend({
  model: DegreeReview,
});

module.exports = {
  DegreeReview,
  DegreeReviewCollection
}
