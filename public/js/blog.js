var app = angular.module('wmtek.blog', []);

app.config(function($routeProvider) {
    $routeProvider.when('/blog', {
        templateUrl: 'public/views/templates/blog.tpl.html',
        controller: 'blogController'
    })
});

app.controller('blogController', function($scope) {
    $scope.message = 'blog'
});
