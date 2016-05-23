'use strict';
var router = require('express').Router();
module.exports = router;
var rp = require('request-promise');

var baseClientUrl = 'https://api.hedgeable.com/client/';
var token = 'hedgeable-api-demo';
var userToken = '827856da-807d-42b2-96b5-557ea447a7f4';
var clientId = '6';
var baseAccountUrl = 'https://api.hedgeable.com/client/' +  clientId + '/account';



