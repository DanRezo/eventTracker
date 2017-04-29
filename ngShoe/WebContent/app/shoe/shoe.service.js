angular.module('shoeModule')
.factory('shoeService', function($http, $filter)  {

	var service = {};

	var BASE_URL = 'http://localhost:8080/ShoeMinderRest/api';

	service.index = function() {
		return $http({
			method : 'GET',
			url : BASE_URL + '/shoes'
		})
	};

	service.create = function(shoe) {
		return $http({
			method : 'POST',
			url : BASE_URL + '/shoes',
			headers : {
				'Content-Type' : 'application/json'
			},
			data : shoe
		})
	};

	service.update = function(shoe) {
		return $http({
			method : 'PUT',
			url : BASE_URL + '/shoes/' +id,
			headers : {
				'Content-Type' : 'application/json'
			},
			data : shoe
		})
		
	};

	service.destroy = function(id) {
		return $http({
			method : 'DELETE',
			url : BASE_URL + '/shoes/' +id
		})
	};

	return service;

})