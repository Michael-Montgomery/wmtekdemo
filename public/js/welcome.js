var app = angular.module('wmtek.welcome', []);

app.config(function($routeProvider) {
    $routeProvider.when('/welcome', {
        templateUrl: 'templates/welcome.tpl.html',
        controller: 'welcomeController'
    })
});

app.controller('welcomeController', function($scope) {
    $scope.message = 'welcome'
});