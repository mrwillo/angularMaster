/**
 * Created by willo on 7/2/17.
 */
describe('PhoneListController', function(){
	beforeEach(module('phoneList'));
	
	it('show create a `phones` module with 3 phones', inject(function($componentController){
		var ctrl = $componentController('phoneList');
		expect(ctrl.phones.length).toBe(3);
	}));
});
