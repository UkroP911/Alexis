
function mobileNav() {
    let btn = $('.mobile-nav-btn');
    btn.click(function () {
        $('.header__nav').slideToggle();
    });
}
mobileNav();
$(window).resize(function () {
    let viewport = $(window).outerWidth();
    if(viewport <= 992){
        console.log(viewport);
        $('.header__nav').hide();
    } else {
        $('.header__nav').show();
    }
});