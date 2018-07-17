
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
    $('body').removeClass('fixed')
});