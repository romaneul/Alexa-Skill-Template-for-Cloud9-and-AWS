var Alexa = require('alexa-sdk');

var handlers = {
  'LaunchRequest': function() {
    console.log('launch request');
    this.emit(":tell", 'Hello World');
  },
  'Unhandled': function() {
    console.log('unhandled');
    this.emit(":tell", 'Unhandled!');
  },
};

exports.handler = function(event, context, callback) {
 
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
