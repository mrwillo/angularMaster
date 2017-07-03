/**
 * Created by willo on 7/3/17.
 */
angular.module("phoneDetail").component("phoneDetail", {
	template: "TBD: details page here {{$ctrl.phoneId}}",
	controller: ['$routeParams', function PhoneDetailController($routeParams) {
		var compScope = this;
		compScope.phoneId = $routeParams.phoneId;
	}
	]
})
