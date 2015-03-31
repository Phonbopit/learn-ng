describe('Try Protractor', function() {

	beforeEach(function() {
		browser.get('http://localhost:5555/');
	});

	describe('index', function() {
		it('should display the title', function() {
			expect(browser.getTitle()).toBe('Try Protractor');
		});

		it('should display greeting message', function() {
			var message = $('div.main');

			expect(message.getText()).toBe('Hello World');
		});
	});

});