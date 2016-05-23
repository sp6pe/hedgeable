 'use strict'

//instantiate angular app 
 var app = angular.module('hedgeable', ['ui.router']);

 app.config(function ($urlRouterProvider, $locationProvider,$httpProvider) {
    // This turns off hashbang urls (/#about) and changes it to something normal (/about)
    $locationProvider.html5Mode(true);

    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.useXDomain = true;
    // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
    $urlRouterProvider.otherwise('/');

 
});

