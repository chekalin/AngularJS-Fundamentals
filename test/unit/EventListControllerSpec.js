'use strict';

describe('EventListController', function () {
    var scope, $controllerConstructor, mockEventData;

    beforeEach(module('eventsApp'));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        mockEventData = sinon.stub({getAllEvents: function () {}})
        $controllerConstructor = $controller;
    }));

    it('should set the scope events to the result of eventData.getAllEvents', function () {
        var mockEvents = {};
        mockEventData.getAllEvents.returns(mockEvents);

        var ctrl = $controllerConstructor('EventListController', {$scope: scope, $location: {},
            eventData: mockEventData});

        expect(scope.events).toBe(mockEvents);
    });

});