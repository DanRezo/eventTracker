angular.module('appModule',['todoModule','staticModule', 'ngRoute'])
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
	.when('/todo', {
		template: '<todo-list>Loading todo list...</todo-list>'
	})
});