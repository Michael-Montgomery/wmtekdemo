var app = angular.module('wmtek', [
    'ngRoute',
    'wmtek.welcome',
    'wmtek.sitestacker',
    'wmtek.company',
    'wmtek.services',
    'wmtek.ourwork',
    'wmtek.blog',
    'wmtek.contact'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        redirectTo: '/welcome'
    }).otherwise({
        redirectTo: '/welcome'
    })
});