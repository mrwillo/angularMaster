/**
 * Created by willo on 7/2/17.
 */
angular.module("phoneList").component("phoneList", {
	templateUrl: 'phone-list/phone-list.template.html',
	controller: ['$http',
		function PhoneListController($http) {
			var comModel = this;
			$http.get("phones/phones.json").then(function(res){
				comModel.phones = res.data;
			});
			comModel.orderProp = "age";
		}
	]
});
