'use strict';




app.factory("ClientFactory", function($http) {
	var ClientFactory = {};


	//get information about the client 
	ClientFactory.getBasicInfo = function() {
		return $http.get('/api/client/')
			.then(function(client) {
				return client.data.response;
			})
	};

	

	return ClientFactory;
});