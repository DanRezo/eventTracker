angular.module('appModule',['shoeModule','ngRoute'])
.config(function($routeProvider){
	$routeProvider
	.when('/', {
		template: '<home>Loading home...</home>'
	})
	.when('/about', {
		template: '<about>Loading about...</about>'
	})
	.when('/contact', {
		template: '<contact>Loading Contact...</contact>'
	})
	.when('/shoes', {
		template: '<shoe-list>Loading your shoes...</shoe-list>'
	})
});