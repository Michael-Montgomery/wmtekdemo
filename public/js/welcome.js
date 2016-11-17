var app = angular.module('wmtek.welcome', ['testimony.svc']);

app.config(function($routeProvider) {
    $routeProvider.when('/welcome', {
        templateUrl: 'templates/welcome.tpl.html',
        controller: 'welcomeController'
    })
});

app.controller('welcomeController', function($scope, testimonyFuncs) {
    $('#tri-div-one').mouseover(function() {
        $('#tri-div-one').css('width', '80%');
        $('#tri-div-one h2').css('width', '50%');
        $('#tri-div-one span').fadeIn();
        $('#tri-div-one p, #tri-div-one button').fadeIn('slow');
        $('#tri-div-two, #tri-div-three').css('width', '9%');
        $('#tri-div-two p, #tri-div-three p, #tri-div-two button, #tri-div-three button').fadeOut();
    });
    $('#tri-div-one').mouseleave(function() {
        $('#tri-div-one h2').css('width', '40px');
        $('#tri-div-one span').fadeOut();
    })
    $('#tri-div-two').mouseover(function() {
        $('#tri-div-two').css('width', '80%');
        $('#tri-div-two h2').css('width', '50%');
        $('#tri-div-two span').fadeIn();
        $('#tri-div-two p, #tri-div-two button').fadeIn('slow');
        $('#tri-div-one, #tri-div-three').css('width', '9%');
        $('#tri-div-three p, #tri-div-one p, #tri-div-three button, #tri-div-one button').fadeOut();
    });
    $('#tri-div-two').mouseleave(function() {
        $('#tri-div-two h2').css('width', '40px');
        $('#tri-div-two span').fadeOut();
    })
    $('#tri-div-three').mouseover(function() {
        $('#tri-div-three').css('width', '80%');
        $('#tri-div-three h2').css('width', '50%');
        $('#tri-div-three span').fadeIn();
        $('#tri-div-three p, #tri-div-three button').fadeIn('slow');
        $('#tri-div-two, #tri-div-one').css('width', '9%');
        $('#tri-div-two p, #tri-div-one p, #tri-div-two button, #tri-div-one button').fadeOut();

    });
    $('#tri-div-three').mouseleave(function() {
        $('#tri-div-three h2').css('width', '40px');
        $('#tri-div-three span').fadeOut();
    })
    $('.tri-wrapper').mouseleave(function() {
        $('.tri-div').css('width', '33%');
        $('.tri-div p, .tri-div button').fadeOut();
    });
    setInterval(function() {
        var holder = testimonyFuncs.returnNextReview();
        $('.testimony, .testimony-author').fadeOut('slow');

        setTimeout(function () {
            $('.testimony').html(holder.testimony);
            $('#testimony-author').html(holder.author);
            $('.testimony, .testimony-author').fadeIn('slow');
        }, 1000)

    }, 10000);

    $('#tri-div-one').click(function() {
        window.location.assign('#/company');
    });
    $('#tri-div-two').click(function() {
        window.location.assign('#/ourwork');
    });
    $('#tri-div-three').click(function() {
        window.location.assign('#/sitestacker')
    });


});