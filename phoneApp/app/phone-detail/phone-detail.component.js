/**
 * Created by willo on 7/3/17.
 */
angular.module("phoneDetail").component("phoneDetail", {
	templateUrl: "phone-detail/phone-detail.template.html",
	controller: ['$http', '$routeParams', function PhoneDetailController($http, $routeParams) {
		var compScope = this;
		compScope.phoneId = $routeParams.phoneId;
		$http.get("phones/"+compScope.phoneId+".json").then(function(res){
			compScope.phone = res.data;
		})
	}]
})
