var app = angular.module('wmtek.company', []);

app.config(function($routeProvider) {
    $routeProvider.when('/company', {
        templateUrl: 'templates/company.tpl.html',
        controller: 'companyController'
    })
});

app.controller('companyController', function($scope) {
    $scope.message = 'company'
});
