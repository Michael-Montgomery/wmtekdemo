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
    }, 500);
    $('#contact-list li:first-child').mouseover(function() {
        $('#contact-list li:first-child').html('3690 N. US1 Fort Pierce, FL, 32960');
    }).hide().fadeIn().mouseout(function() {
        $('#contact-list li:first-child').html('<i class="fa fa-map-marker" aria-hidden="true"></i>')
    });
    $('#contact-list li:nth-child(2)').mouseover(function() {
        $('#contact-list li:nth-child(2)').html('(772)567-9824')
    }).mouseout(function() {
        $('#contact-list li:nth-child(2)').html('<i class="fa fa-phone" aria-hidden="true"></i>')
    });
    $('#contact-list li:last-child').mouseover(function() {
        $('#contact-list li:last-child').html('info@wmtek.com')
    }).mouseout(function() {
        $('#contact-list li:last-child').html('<i class="fa fa-envelope-o" aria-hidden="true"></i>')
    })
})