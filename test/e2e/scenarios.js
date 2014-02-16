'use strict';

describe('event registration app', function() {
    it('should automatically redirect to /events as the default route', function() {
        browser.get('#/');
        expect(browser.getCurrentUrl()).toContain('/events');
    });

    describe('events', function() {
        beforeEach(function() {
            browser.get('/events');
        });

        it('should render the events page', function() {
            expect(element(by.id('eventsHeader')).getText()).toContain('Events');
            var eventName = element(
                by.repeater('event in events').
                    row(0).
                    column('name'));
            expect(eventName.getText()).toContain('Angular Boot Camp');
        })

    });
});