$(document).ready(function() {
    $('.menu-btn').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('menu-btn_active');
        $('.header-navigation').toggleClass('header-navigation__active')
        $('body').toggleClass('menu-open')
    });
});
