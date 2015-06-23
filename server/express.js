/*jshint node:true*/
'use strict';
var projectName = require('../package').name;
var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
var aToB = require('atob');
var Logger = require('./tools/Logger');
var logger = new Logger({service: 'express'});

var server = express();
var configuration = require('./config');
var config = configuration[process.env.ENV || 'development'];


server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json({limit: '5mb'}));
server.use(_allowCrossDomain);
server.use(compression({threshold: 512}));


//ROUTES---------------------------------------------------------------------------

//server.post('/your/route/here', function(req, res, next) {
//    expressService.someMethod(req.body, res.send.bind(res), next);
//});


//serve the angular app
// serve all asset files from necessary directories
var pathToApp = __dirname.substr(0, __dirname.length - 6);
var indexRoot;
if (process.env.ENV !== 'development') {
    pathToApp += 'dist';
    indexRoot = pathToApp;
    server.use('/src', express.static(pathToApp + '/src'));
    server.use('/css', express.static(pathToApp + '/css'));
    server.use('/styles', express.static(pathToApp + '/css/styles'));
    server.use('/content', express.static(pathToApp + '/content'));
    server.use('/vendor', express.static(pathToApp + '/vendor'));
}
else {
    pathToApp += '.tmp';
    indexRoot = pathToApp;
    server.use('/lib', express.static(pathToApp + '/lib'));
    server.use('/src', express.static(pathToApp + '/src'));
    server.use('/content', express.static(pathToApp + '/content'));
    server.use('/styles', express.static(pathToApp + '/styles'));
    server.use('/vendor', express.static(pathToApp + '/vendor'));
}


// serve index.html for all remaining routes, in order to leave routing up to angular
server.get('/*', function(req, res, next) {
    res.sendFile('index.html', {root: indexRoot});
});

/*-------------LISTEN--------------------------*/
server.listen(config.port);
logger.log(' ❲' + projectName + '❳ ❲' + config.port + '❳ ❲' + (process.env.ENV || 'no env set') + '❳');


/*------------Helpers----------------*/

function _allowCrossDomain(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    next();
}

function _handleResponse(e, result, success, error) {
    if (e && error) error(e);
    if (!e && success) success(result);
}
