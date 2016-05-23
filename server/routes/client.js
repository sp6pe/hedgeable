'use strict';
var router = require('express').Router();
module.exports = router;
var rp = require('request-promise');

var baseClientUrl = 'https://api.hedgeable.com/client/';
var token = 'hedgeable-api-demo';
var userToken = '827856da-807d-42b2-96b5-557ea447a7f4';




router.param('clientId',function(req,res,next,id){
		req.client = id;
		next();
});

//Get basic client information 
router.get('/:clientId', function(req, res, next) {

	rp({uri: baseClientUrl + req.client, qs: { token: token, usertoken: userToken}})
    .then(function (response) {
        res.send(response);
    })
     .then(null, next);

});

//Get client holdings 
router.get('/:clientId/holdings', function(req, res, next) {

	rp({uri: baseClientUrl + req.client + '/holdings', qs: { token: token, usertoken: userToken}})
    .then(function (response) {
        res.send(response);
    })
     .then(null, next);

});

//Get client performance 
router.get('/:clientId/performance', function(req, res, next) {

	rp({uri: baseClientUrl + req.client + '/performance', qs: { token: token, usertoken: userToken}})
    .then(function (response) {
        res.send(response);
    })
     .then(null, next);

});

//Get all client data 
router.get('/:clientId/all', function(req, res, next) {

	rp({uri: baseClientUrl + req.client + '/getlinformation', qs: { token: token, usertoken: userToken}})
    .then(function (response) {
        res.send(response);
    })
     .then(null, next);

});

router.use('/:clientId/account', require('./client-account'));
