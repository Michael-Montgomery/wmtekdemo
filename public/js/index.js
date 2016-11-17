var app = angular.module('wmtek', [
    'ngRoute',
    'wmtek.welcome',
    'wmtek.sitestacker',
    'wmtek.company',
    'wmtek.services',
    'wmtek.ourwork',
    'wmtek.blog',
    'wmtek.contact',
    //services
    'testimony.svc'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        redirectTo: '/welcome'
    }).otherwise({
        redirectTo: '/welcome'
    })
});

app.controller('mainCtrl', function($scope) {
    $('.universal-header').hide();
    setTimeout(function() {
        $('.universal-header').slideDown('slow');
    }, 500)
})