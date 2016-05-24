'use strict'

app.directive('pieChart', function(ClientFactory) {
    return {
        restrict: 'E',
        templateUrl: 'js/chart/pieChart.html',
        controller: 'homeCtrl',
        link: function($scope, el, attr) {

            ClientFactory.getClientHoldings(6).then(function(holdings) {
                $scope.data2 = holdings.map(function(holding) {
                    return { asset: holding.security.assetClass, value: holding.weight }
                })

                $scope.options2 = {
                    chart: {
                        type: 'pieChart',
                        height: 500,
                        x: function(d) {
                            return d.asset; },
                        y: function(d) {
                            return d.value },
                        showLabels: true,
                        duration: 500,
                        labelThreshold: 0.01,
                        labelSunbeamLayout: true,
                        legend: {
                            margin: {
                                top: 5,
                                right: 35,
                                bottom: 5,
                                left: 0
                            }
                        }
                    }
                };

            })


        }
    };
});