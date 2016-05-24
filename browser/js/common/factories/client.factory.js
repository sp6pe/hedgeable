'use strict';

// For the purposes of this exercise - I assumed the client was logged in on the front-end, and ID 6 for hard-coded


app.factory("ClientFactory", function($http) {
	var ClientFactory = {};



	//get basic information about a client 
	ClientFactory.getClientBasicInfo = function(clientId) {
		return $http.get('/api/client/6')
			.then(function(client) {
				return client.data.response;
			})
	};

	//get all holding information about a client 
	ClientFactory.getClientHoldings = function(clientId) {
		return $http.get('/api/client/'+6+'/holdings')
			.then(function(client) {
				return client.data.response;
			})
	};

	//get all performance information about a client 
	ClientFactory.getClientPerformance = function(clientId, startDate, endDate) {
		return $http.get('/api/client/'+clientId+'/performance', {params:{"startDate": startDate, "endDate": endDate}})
			.then(function(client) {
				return client.data.response;
			})
	};

    //get all information about the client 
	ClientFactory.getClientAll = function(clientId) {
		return $http.get('/api/client/'+ clientId +'/all')
			.then(function(client) {
				return client.data.response;
			})
	};


	return ClientFactory;
});