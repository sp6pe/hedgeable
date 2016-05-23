app.controller('homeCtrl', function($scope, ClientFactory, ClientAccountFactory) {



    // ClientFactory.getClientBasicInfo().then(function(client){
    // 	console.log(client);
    // 	$scope.clientInfo = client;

    // })

    // ClientFactory.getClientPerformance(6,"2016-01-07","2016-02-07").then(function(client){
    // 		console.log(client);
    // 		$scope.clientInfo = client;

    // 	})

    ClientFactory.getClientAll(6).then(function(allInfo) {

        $scope.hedgedPercentage = formatPercentage(allInfo.hedgedPercentage);
        $scope.latestBalance = formatDollar(allInfo.latestBalance);
        var stats = formatStats(allInfo.balances.stats)
        $scope.stats = stats;
    })	
});

function formatDollar(num) {
	if(num){
		var formatted = num.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    	return '$' + formatted;

		}
   }

function formatPercentage(num) {
	if(num){
		var formatted = (num).toFixed(1) + '%';
		return formatted;
	}

}

function formatStats(obj) {

    for (key in obj) {
        if (typeof obj[key] === 'number') {
        	obj[key] = formatPercentage(obj[key] * 100);	
        }
    }
    return obj;
}

function accountName(arr) {
    var namesArr = [];

    arr.forEach(function(el) {
        namesArr.push(el.name)
    })
    return namesArr;
}