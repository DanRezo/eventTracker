angular.module('shoeModule')
.factory('shoeService', function($http, $filter)  {

	var service = {};

	var BASE_URL = 'http://localhost:8080/ShoeMinderREST/api/shoes/';

	service.index = function() {
		return $http({
			method : 'GET',
			url : BASE_URL 
		})
	};

	service.create = function(shoe) {
		return $http({
			method : 'POST',
			url : BASE_URL,
			headers : {
				'Content-Type' : 'application/json'
			},
			data : shoe
		})
	};

	service.update = function(shoe) {
		return $http({
			method : 'PUT',
			url : BASE_URL + id ,
			headers : {
				'Content-Type' : 'application/json'
			},
			data : shoe
		})
		
	};

	service.destroy = function(id) {
		return $http({
			method : 'DELETE',
			url : BASE_URL + id
		})
	};

	return service;

})