function slick() {
  $('.first-screen').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    adaptiveHeight: true
  });
  $('.project__slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    arrows: false,
    fade: true,
    asNavFor: '.project__slider-nav'
  });
  $('.project__slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.project__slider-for',
    dots: false,
    arrows: false,
    focusOnSelect: true
  });
  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    let slideno = $(this).data('slide');
    $('.project__slider-nav').slick('.project__slider-for', slideno - 1);
  });
}

