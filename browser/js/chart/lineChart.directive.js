'use strict'

app.directive('lineChart', function(ClientFactory) {
    return {
        restrict: 'E',
        templateUrl: 'js/chart/lineChart.html',
        controller: 'homeCtrl',
        link: function($scope, el, attr) {
            ClientFactory.getClientPerformance(6, "2006-02-07", "2016-05-23")
                .then(function(performance) {
                    $scope.data = [{key:'Portfolio'}]

                    $scope.data[0].values = performance.balances.map(function(el){
                    	var format = d3.time.format("%Y-%m-%d");
                        return {date: format.parse(el.date), balance: el.value}

                    })

     
                    $scope.options = {
                        chart: {
                            type: 'lineChart',
                            height: 450,
                            margin: {
                                top: 20,
                                right: 40,
                                bottom: 40,
                                left: 75
                            },
                            x: function(d) {
                                 return d.date; },
                            y: function(d) {
                                return d.balance; },
                            useInteractiveGuideline: true,
                            dispatch: {
                                stateChange: function(e) { console.log("stateChange"); },
                                changeState: function(e) { console.log("changeState"); },
                                tooltipShow: function(e) { console.log("tooltipShow"); },
                                tooltipHide: function(e) { console.log("tooltipHide"); }
                            },
                            xAxis: {
                                tickFormat: function(d) {
                         
									 return d3.time.format('%x')(new Date(d))
                                }
                            },
                            yAxis: {
                                tickFormat: function(d) {
                                	//console.log(d);
                                    return d3.format(",.2r")(d);
                                },
                                axisLabelDistance: -10
                            },
                            

                            callback: function(chart) {
                                console.log("!!! lineChart callback !!!");
                            }
                        },
                        title: {
                            enable: true,
                            text: 'Portfolio Performance'
                        }

                    };

})
        }
    };

});