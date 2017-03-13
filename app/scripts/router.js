var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var HomeContainer = require('./components/home.jsx').HomeContainer;
var LoginContainer = require('./components/login.jsx').LoginContainer;
var CreateEditContainer = require('./components/create_edit.jsx').CreateEditContainer;
var ProfileDetailContainer = require('./components/profiile_detail.jsx').ProfileDetailContainer;

var parse = require('./parse.js');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'auth/': 'auth',
    'profile/:id/edit/': 'profileCreateEdit',
    'profile/create/': 'profileCreateEdit',
    'profile/:id/': 'profileDetail',
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
      React.createElement(CreateEditContainer, {id: id}),
      document.getElementById('app')
    )
  },
  profileDetail: function(id){
    ReactDOM.render(
     React.createElement(ProfileDetailContainer, {id: id}),
     document.getElementById('app')
    )
  }
});


var appRouter = new AppRouter();

module.exports = appRouter;
