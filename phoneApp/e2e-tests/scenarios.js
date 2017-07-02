describe("phone app", function(){
	describe("phoneList", function(){
		beforeEach(function(){
			browser.get("index.html");
		});
		it("should filter the phones list as per user search", function(){
			var phoneList = element.all(by.repeater('phone in $ctrl.phones'));
			var query = element(by.model('$ctrl.query'));
			
			expect(phoneList.count()).toBe(3);
			
			query.sendKeys("Nexus");
			expect(phoneList.count()).toBe(1);
			
			query.clear();
			query.sendKeys("motorola");
			expect(phoneList.count()).toBe(2);
		})
	})
})