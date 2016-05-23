
app.controller('homeCtrl',function($scope, ClientFactory) {



	ClientFactory.getBasicInfo().then(function(client){
		console.log(client);
		$scope.clientInfo = client;

	})





});