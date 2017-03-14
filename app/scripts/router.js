var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var HomeContainer = require('./components/home.jsx').HomeContainer;
var LoginContainer = require('./components/login.jsx').LoginContainer;
var ProfileCreateEditContainer = require('./components/create_edit.jsx').ProfileCreateEditContainer;
var ProfileDetailContainer = require('./components/profile_detail.jsx').ProfileDetailContainer;
var ReviewCreateEditContainer = require('./components/review_create_edit.jsx').ReviewCreateEditContainer;

var parse = require('./parse.js');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'auth/': 'auth',
    'profile/create/': 'profileCreateEdit',
    'profile/:id/edit/': 'profileCreateEdit',
    'profile/': 'profileDetail',
    'review/': 'reviewCreateEdit',
  },
  initialize: function(){
    parse.setup({
      BASE_API_URL: 'https://hip-puppies.herokuapp.com'
    });
  },
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
  reviewCreateEdit: function(id){
    ReactDOM.render(
      React.createElement(ReviewCreateEditContainer, {id: id}),
      document.getElementById('app')
    )
  },
});


var appRouter = new AppRouter();

module.exports = appRouter;
