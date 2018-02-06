$(function() {
    $('a.scroll[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
});

$(document).on('ready', function() {
    var navbar = $('.navbar');
    var navHeight = navbar.height();

    $(window).scroll(function() {
        if ($(this).scrollTop() >= navHeight) {
            navbar.addClass('navbar-color');
        } else {
            navbar.removeClass('navbar-color');
        }
    });
    $("html").niceScroll({
        scrollspeed: 51,
        mousescrollstep: 45,
    });

    $('#lightgallery').lightGallery();
});

$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.toTop').fadeIn();
        } else {
            $('.toTop').fadeOut();
        }
    });

    $('.toTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});
new WOW().init();