var $ = require('jquery');
var Backbone = require('backbone');

var parse = require('../parse_setup');
var ParseModel = require('./parse').ParseModel;
var UserDegreeCollection = require('./user_degree').UserDegreeCollection;

var User = ParseModel.extend({
  urlRoot: function(){
    return parse.BASE_API_URL + '/users';
  }
}, {
  login: function(creds, callback){
    var url = parse.BASE_API_URL + '/login?' + $.param(creds);
    $.get(url).then(data => {
      var newUser = new User(data);
      User.store(newUser);
      callback(newUser);
    });
  },
  signup: function(creds, callback){
    var newUser = new User(creds);
    newUser.save().then(() => {
      User.store(newUser);
      callback(newUser);
    });
  },
  logout: function() {
    var url = parse.BASE_API_URL + '/logout?'
    $.post(url).then(event=>{
      console.log('user logout complete');
    })
  },
  store: function(user){
    localStorage.setItem('user', JSON.stringify(user.toJSON()));
  },
  current: function(){

    var user = localStorage.getItem('user');
    if(!user){
     return false;
    }

    var currentUser = new User(JSON.parse(user));

   if(!currentUser.get('sessionToken')){
     return false;
    }
    return currentUser;
  },
});

module.exports = {
  User
}
