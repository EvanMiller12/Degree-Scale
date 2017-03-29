var $ = require('jquery');

var parse = {
  BASE_API_URL: '',
  setup: function(config){
    // console.log('config', config);
    if (config.BASE_API_URL){
      this.BASE_API_URL = config.BASE_API_URL;
    }

    $.ajaxSetup({
      beforeSend: function(xhr){
        xhr.setRequestHeader('X-Parse-Application-Id', 'tiygvl');
        xhr.setRequestHeader('X-Parse-REST-API-Key', 'somevalue');

        if (config.sessionId){
          xhr.setRequestHeader('X-Parse-Session-Token', config.sessionId);
        }
      }
    });
  },
  deinitialize: function(){
    $.ajaxSetup({
      beforeSend: function(xhr){
        xhr.setRequestHeader('X-Parse-Application-Id', null);
        xhr.setRequestHeader('X-Parse-REST-API-Key', null);
        xhr.setRequestHeader('X-Parse-Session-Token', null);
      }
    });
  }
};

module.exports = parse;
