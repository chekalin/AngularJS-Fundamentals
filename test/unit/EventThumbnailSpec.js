'use strict';

describe('eventThumbnail', function () {
    var el;
    beforeEach(module('eventsApp'));
    beforeEach(module('templates/directives/eventThumbnail.html'));
    beforeEach(inject(function ($compile, $rootScope) {
        var scope = $rootScope;
        scope.event = {
            name: 'Event Name',
            date: '223',
            time: '334',
            location: {
                address: '1234',
                city: 'ajshdgfk',
                province: 'afds'
            }
        }

        el = angular.element('<event-thumbnail event="event" />');
        $compile(el)(scope);
        scope.$digest();
    }));


    it('should bind the data', function () {
        expect(el.text()).toContain('Event Name');
    });
});