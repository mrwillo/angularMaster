/**
 * Created by willo on 7/3/17.
 */
angular.module("core").filter("checkmark", function(){
	return function(input){
		return input ? '\u2713' : '\u2718';
	}
})
