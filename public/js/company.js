var app = angular.module('wmtek.company', []);

app.config(function($routeProvider) {
    $routeProvider.when('/company', {
        templateUrl: 'public/views/templates/company.tpl.html',
        controller: 'companyController'
    })
});

app.controller('companyController', function($scope) {
    $scope.message = 'company'
});
