describe('Try Protractor', function() {

	describe('index', function() {
		it('should display the title', function() {
			browser.get('/');
			expect(browser.getTitle()).toBe('Try Protractor');
		});
	});

});