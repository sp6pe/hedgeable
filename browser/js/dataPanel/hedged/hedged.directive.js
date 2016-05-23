'use strict'

app.directive('hedged', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/dataPanel/hedged/hedged.html',
        controller:'homeCtrl'
    };
});