'use strict';

describe('calendarHelper', function () {
    beforeEach(module('eventsApp'));

    it('should return January when 0 is passed', inject(function (calendarHelper) {
        expect(calendarHelper.getMonthName(0)).toBe('January');
    }));
});