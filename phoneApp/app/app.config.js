/**
 * Created by willo on 7/3/17.
 */
angular.module("phoneApp").config(['$locationProvider', '$routeProvider',function($locationProvider, $routeProvider){
	$locationProvider.hashPrefix("!");
	$routeProvider.
		when("/phones",{
			template: '<phone-list></phone-list>'
		}).
		when("/phones/:phoneId", {
			template: '<phone-detail></phone-detail>'
		}).
		otherwise("/phones")
}])
