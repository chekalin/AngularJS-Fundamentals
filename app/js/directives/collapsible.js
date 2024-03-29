eventsApp.directive('collapsible', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div><h4 class="well-title" ng-click="toggleVisibility()">{{title}}</h4><div ng-transclude ng-show="visible"></div></div>',
        transclude: true,
        scope: {
            title: '@'
        },
        controller: function($scope) {
            $scope.visible = false;
            $scope.toggleVisibility = function() {
                $scope.visible = !$scope.visible;
            }
        }
    }
});