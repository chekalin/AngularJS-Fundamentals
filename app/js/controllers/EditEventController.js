'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData, $location) {

        $scope.event = {};

        $scope.saveEvent = function(event, newEventForm) {
            if (newEventForm.$valid) {
                eventData.save(event).then(
                    function(response) { console.log('success', response)},
                    function(response) { console.log('failure', response)}
                );
            }
        };

        $scope.cancelEdit = function() {
            $location.url('/events');
        };

    }
);