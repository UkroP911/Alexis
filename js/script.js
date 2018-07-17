
function mobileNav() {
    let btn = $('.mobile-nav-btn');
    btn.click(function () {
        $('.header__nav').slideToggle();
        $('body').toggleClass('fixed')
    });
}
mobileNav();
$(window).resize(function () {
    let viewport = $(window).width();
    if(viewport <= 992){
        $('.header__nav').hide();
    } else {
        $('.header__nav').show();
    }
});

function popupOpen() {
    $('.popup').addClass('p-open');
    $('body').addClass('fixed');
}
function popupClose() {
    $('.popup').removeClass('p-open');
    $('body').removeClass('fixed')
}

$('.js-open-video').click(popupOpen);
$('.js-close-video').click(popupClose);
$('.js-overlay').click(popupClose);