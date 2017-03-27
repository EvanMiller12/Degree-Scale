var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var HomeContainer = require('./components/home.jsx').HomeContainer;
var LoginContainer = require('./components/login.jsx').LoginContainer;
var ProfileCreateEditContainer = require('./components/create_edit.jsx').ProfileCreateEditContainer;
var ProfileDetailContainer = require('./components/profile_detail.jsx').ProfileDetailContainer;
var DegreeResultsContainer = require('./components/degree_results.jsx').DegreeResultsContainer;
var HowItWorksContainer = require('./components/how_it_works.jsx').HowItWorksContainer;
var ReviewCreateEditContainer = require('./components/review_create_edit.jsx').ReviewCreateEditContainer;
var ReviewResultsContainer = require('./components/review_results.jsx').ReviewResultsContainer;

var User = require('./models/user').User;

var parse = require('./parse_setup.js');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'auth/': 'auth',
    'profile/create/': 'profileCreateEdit',
    'profile/edit/:id/': 'profileCreateEdit',
    'profile/:id/': 'profileDetail',
    'degree/': 'degreeResults',
    'howitworks/': 'howItWorks',
    'review/': 'reviewResults',
    'review/create/': 'reviewCreateEdit',
    'review/edit/:id/': 'reviewCreateEdit',
    'logout/': 'logout',

  },
  initialize: function(){
    var user = User.current();
    if(user) {
      parse.setup({
        sessionId: user.get('sessionToken'),
        BASE_API_URL: 'https://hip-puppies.herokuapp.com'
      })
    } else {
      parse.setup({
        BASE_API_URL: 'https://hip-puppies.herokuapp.com'
      });
    }
  },

  // execute: function(callback, args, name) {
  //   var user = User.current();
  //
  //   if(!user && name != 'index') {
  //     this.navigate('auth/', { trigger: true });
  //     return false;
  //   }
  //
  //   return Backbone.Router.prototype.execute.apply(this, arguments);
  // },

  index: function(){
    ReactDOM.render(
      React.createElement(HomeContainer),
      document.getElementById('app')
    );
  },
  auth: function(){
    ReactDOM.render(
      React.createElement(LoginContainer),
      document.getElementById('app')
    );
  },
  profileCreateEdit: function(id){
    ReactDOM.render(
      React.createElement(ProfileCreateEditContainer, {id: id}),
      document.getElementById('app')
    )
  },
  profileDetail: function(id){
    ReactDOM.render(
     React.createElement(ProfileDetailContainer, {id: id}),
     document.getElementById('app')
    )
  },
  degreeResults: function(){
    ReactDOM.render(
      React.createElement(DegreeResultsContainer),
      document.getElementById('app')
    );
  },
  howItWorks: function(){
    ReactDOM.render(
      React.createElement(HowItWorksContainer),
      document.getElementById('app')
    );
  },
  reviewResults: function(){
    ReactDOM.render(
      React.createElement(ReviewResultsContainer),
      document.getElementById('app')
    );
  },
  reviewCreateEdit: function(id){
    ReactDOM.render(
      React.createElement(ReviewCreateEditContainer, {id: id}),
      document.getElementById('app')
    )
  }
});


var appRouter = new AppRouter();

module.exports = appRouter;
