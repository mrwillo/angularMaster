/**
 * Created by willo on 7/5/17.
 */
angular.module("todoApp").config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider){
	$locationProvider.hashPrefix("!");
	$routeProvider.when("/todos",{
		template:"<todo-list></todo-list>"
	}).otherwise("/todos");
}])