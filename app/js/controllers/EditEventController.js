'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope) {
        $scope.saveEvent = function(event, newEventForm) {
            console.log(newEventForm);
            window.alert(event.name);
        };
        $scope.cancelEdit = function() {
            window.location = "EventDetails.html"
        };

    }
);