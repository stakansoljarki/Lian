$(document).ready(function() {
    $('.menu-btn').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('menu-btn--active');
        $('.header__navigation').toggleClass('header__navigation--active')
        $('body').toggleClass('menu-open')
    });
});
