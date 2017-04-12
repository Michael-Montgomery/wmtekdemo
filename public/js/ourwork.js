var app = angular.module('wmtek.ourwork', []);

app.config(function($routeProvider) {
    $routeProvider.when('/ourwork', {
        templateUrl: 'public/views/templates/ourwork.tpl.html',
        controller: 'ourworkController'
    })
});

app.controller('ourworkController', function($scope) {
    $scope.message = 'our work'
});
