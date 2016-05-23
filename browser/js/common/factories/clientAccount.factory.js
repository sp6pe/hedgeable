'use strict';



app.factory("ClientAccountFactory", function($http) {
	var ClientAccountFactory = {};



	//get account information about a client 
	ClientAccountFactory.getAccountInfo = function(clientId) {
		return $http.get('/api/client/' + clientId + '/account')
			.then(function(account) {
				return account.data.response;
			})
	};

	//get an account for the client
	ClientAccountFactory.getAnAccount = function(accountId) {
		return $http.get('/api/client/6/account/' + accountId)
			.then(function(client) {
				return client.data.response;
			})
	};

	//get all performance information about a client 
	ClientAccountFactory.getAccountHolding = function(accountId) {
		return $http.get('/api/client/6/' + accountId + '/holdings')
			.then(function(client) {
				return client.data.response;
			})
	};

	//get all performance information about a client 
	ClientAccountFactory.getAccountHolding = function(accountId) {
		return $http.get('/api/client/6/' + accountId + '/performance')
			.then(function(client) {
				return client.data.response;
			})
	};


	return ClientAccountFactory;
});


