var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var HomeContainer = require('./components/home.jsx').HomeContainer;
var LoginContainer = require('./components/login.jsx').LoginContainer;
var ProfileCreateEditContainer = require('./components/create_edit.jsx').ProfileCreateEditContainer;
var ProfileDetailContainer = require('./components/profile_detail.jsx').ProfileDetailContainer;
var DegreeSelectContainer = require('./components/degree_select.jsx').DegreeSelectContainer;
var DegreeDetailContainer = require('./components/degree_detail.jsx').DegreeDetailContainer;
var HowItWorksContainer = require('./components/how_it_works.jsx').HowItWorksContainer;
var ReviewCreateEditContainer = require('./components/review_create_edit.jsx').ReviewCreateEditContainer;

var parse = require('./parse.js');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'auth/': 'auth',
    'profile/create/': 'profileCreateEdit',
    'profile/:id/edit/': 'profileCreateEdit',
    'profile/:id/': 'profileDetail',
    'degree/': 'degreeSelect',
    'degree/detail/': 'degreeDetail',
    'howitworks/': 'howItWorks',
    'review/create/': 'reviewCreateEdit',
    'review/:id/edit/': 'reviewCreateEdit',

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
  degreeSelect: function(){
    ReactDOM.render(
      React.createElement(DegreeSelectContainer),
      document.getElementById('app')
    );
  },
  degreeDetail: function(){
    ReactDOM.render(
      React.createElement(DegreeDetailContainer),
      document.getElementById('app')
    );
  },
  howItWorks: function(){
    ReactDOM.render(
      React.createElement(HowItWorksContainer),
      document.getElementById('app')
    );
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
