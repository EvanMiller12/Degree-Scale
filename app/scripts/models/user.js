var $ = require('jquery');
var Backbone = require('backbone');

var parse = require('../parse');

var User = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: function(){
    return parse.BASE_API_URL + '/users';
  }
}, {
  login: function(creds, callback){
    var url = parse.BASE_API_URL + '/login?' + $.param(creds);
    $.get(url).then(data => {
      var newUser = new User(creds);
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
  store: function(user){
    localStorage.setItem('user', JSON.stringify(user.toJSON()));
  },
  current: function(){
    var user = localStorage.getItem('user');

    // if no user in local storage, bail
    if(!user){
     return false;
    }

    var currentUser = new User(JSON.parse(user));

   // If we don't have a token, bail
   if(!currentUser.get('sessionToken')){
     return false;
    }
    return currentUser;
  }
});

module.exports = {
  User
}
