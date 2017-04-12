var app = angular.module('wmtek.sitestacker', []);

app.config(function($routeProvider) {
    $routeProvider.when('/sitestacker', {
        templateUrl: 'public/views/templates/sitestacker.tpl.html',
        controller: 'sitestackerController'
    })
});

app.controller('sitestackerController', function($scope) {
    $scope.message = 'sitestacker'
});
