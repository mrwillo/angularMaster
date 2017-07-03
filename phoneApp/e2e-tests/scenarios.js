describe("phone app", function(){
	describe("phoneList", function(){
		beforeEach(function(){
			browser.get("index.html");
		});
		it("should filter the phones list as per user search", function(){
			var phoneList = element.all(by.repeater('phone in $ctrl.phones'));
			var query = element(by.model('$ctrl.query'));
			
			expect(phoneList.count()).toBe(20);
			
			query.sendKeys("Nexus");
			expect(phoneList.count()).toBe(1);
			
			query.clear();
			query.sendKeys("motorola");
			expect(phoneList.count()).toBe(8);
		})
		it("should be possible to control phones order via drop down order box", function(){
			var query = element(by.model('$ctrl.query'));
			var orderSelect = element(by.model('$ctrl.orderProp'));
			var nameOption = orderSelect.element(by.css('option[value="name"]'));
			var phonesNameCol = element.all(by.repeater("phone in $ctrl.phones").column("phone.name"));
			
			var getNames = function(){
				return phonesNameCol.map(function(el){
					return el.getText();
				})
			}
			
			query.sendKeys("tablet");
			expect(getNames()).toEqual([
				'Motorola XOOM\u2122 with Wi-Fi',
				'MOTOROLA XOOM\u2122'
			]);
			nameOption.click();
			expect(getNames()).toEqual([
				'MOTOROLA XOOM\u2122',
				'Motorola XOOM\u2122 with Wi-Fi'
			])
		})
		it("should render a phone specific link", function(){
			var query = element(by.model("$ctrl.query"));
			query.sendKeys("nexus");
			
			element.all(by.css('.phones li a')).first().click();
			expect(browser.getLocationAbsUrl()).toBe("/phones/nexus-s");
		})
		it('should redirect index.html to index.html#!/phones', function(){
			browser.get("index.html");
			expect(browser.getLocationAbsUrl()).toBe("/phones");
		})
	})
})