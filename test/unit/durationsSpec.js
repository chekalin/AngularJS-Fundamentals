'use strict';

describe('durations', function() {
    beforeEach(module('eventsApp'));

    it('should return "Half Hour" when 1 is passed', inject(function(durationsFilter) {
        expect(durationsFilter(1)).toEqual('Half Hour');
        expect(durationsFilter(2)).toEqual('One Hour');
        expect(durationsFilter(3)).toEqual('Half Day');
        expect(durationsFilter(4)).toEqual('Full Day');
    }))
});