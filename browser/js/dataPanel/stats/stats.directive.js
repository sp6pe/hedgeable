'use strict'

app.directive('stats', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/dataPanel/stats/stats.html',
        controller:'homeCtrl'

    };
});