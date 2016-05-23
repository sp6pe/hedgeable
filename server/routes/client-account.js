'use strict';
var router = require('express').Router();
module.exports = router;
var rp = require('request-promise');

var baseClientUrl = 'https://api.hedgeable.com/client/';
var token = 'hedgeable-api-demo';
var userToken = '827856da-807d-42b2-96b5-557ea447a7f4';

router.param('accountId',function(req,res,next,id){
		req.account = id;
		next();
});

//Get all accounts
router.get('/', function(req, res, next) {

	rp({uri: baseClientUrl + req.client + '/account', qs: { token: token, usertoken: userToken}})
    .then(function (response) {
        res.send(response);
    })
     .then(null, next);

});

//Get an account accounts
router.get('/:accountId', function(req, res, next) {

	rp({uri: baseClientUrl + req.client + '/account/' + req.account, qs: { token: token, usertoken: userToken}})
    .then(function (response) {
        res.send(response);
    })
     .then(null, next);

});

router.get('/:accountId/holdings', function(req, res, next) {

	rp({uri: baseClientUrl + req.client + '/account/' + req.account + '/holdings', qs: { token: token, usertoken: userToken}})
    .then(function (response) {
        res.send(response);
    })
     .then(null, next);

});


router.get('/:accountId/performance', function(req, res, next) {

	rp({uri: baseClientUrl + req.client + '/account/' + req.account + '/performance', qs: { token: token, usertoken: userToken}})
    .then(function (response) {
        res.send(response);
    })
     .then(null, next);

});


// router.get('/:accountId/transactions', function(req, res, next) {

// 	rp({uri: baseClientUrl + req.client + '/account/' + req.account + '/transactions', qs: { token: token, usertoken: userToken}})
//     .then(function (response) {
//         res.send(response);
//     })
//      .then(null, next);

// });












