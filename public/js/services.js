var app = angular.module('wmtek.services', []);

app.config(function($routeProvider) {
    $routeProvider.when('/services', {
        templateUrl: 'public/views/templates/services.tpl.html',
        controller: 'servicesController'
    })
});

app.controller('servicesController', function($scope) {
    $scope.message = 'services'
});
