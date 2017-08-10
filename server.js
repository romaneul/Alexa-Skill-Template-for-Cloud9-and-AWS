var AWS = require("aws-sdk");
AWS.config.region = 'eu-west-1';
var Module = require('module');
var originalRequire = Module.prototype.require;
Module.prototype.require = function() {
    if (arguments[0] === 'aws-sdk') {
        return AWS;
    }
    else {
        return originalRequire.apply(this, arguments);
    }
};
var express = require('express');
var skill = require("./skill/index");
var app = express();
var bodyParser = require('body-parser');

// Connecting middleware
app.use(bodyParser.json());


// Routes
app.get('/', function(req, res) {
    res.json({response: "Your skill endpoint is up and running."});
});

app.post('/', function(req, res) {
    console.log("######################## Request from Alexa ########################");
    console.log(req.body);
    console.log("####################################################################");
    skill.handler(req.body, context(res));
});

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    console.log('Skill endpoint started');
});

// Create Lambda context
function context(res) {
    var context = {
        "clientContext": {
            "env": {}
        }
    };
    context.done = function(error, result) {
        console.log('context.done');
        console.log(error);
        console.log(result);
        res.json(result);
        //process.exit();
    };
    context.succeed = function(result) {
        console.log('context.succeed');
        console.log(result);
        res.json(result);
        //process.exit();
    };
    context.fail = function(error) {
        console.log('context.fail');
        console.log(error);
        //process.exit();
    };

    return context;
}
