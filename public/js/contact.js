var app = angular.module('wmtek.contact', []);

app.config(function($routeProvider) {
    $routeProvider.when('/contact', {
        templateUrl: 'templates/contact.tpl.html',
        controller: 'contactController'
    })
});

app.controller('contactController', function($scope) {
    $scope.message = 'contact'
});
