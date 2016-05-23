'use strict'

app.directive('balance', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/dataPanel/balance/balance.html',
     	controller : 'homeCtrl'
    };
});