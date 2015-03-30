describe('Try Protractor', function() {

	describe('index', function() {
		it('should display the title', function() {
			browser.get('http://www.angularjs.org');
			expect(browser.getTitle()).toBe('AngularJS — Superheroic JavaScript MVW Framework');
		});
	});

});