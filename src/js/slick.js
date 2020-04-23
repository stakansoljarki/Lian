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
  $('.portfolio-container').slick({
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    speed: 1500,
    slidesToShow: 1,
    adaptiveHeight: true
  });
  $('.portfolio-image__for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    arrows: false,
    fade: true,
    asNavFor: '.portfolio-image__nav'
  });
  $('.portfolio-image__nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.portfolio-image__for',
    dots: false,
    arrows: false,
    // centerMode: true,
    centerPadding: '30px',
    focusOnSelect: true
  });

  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.portfolio-image__nav').slick('.portfolio-image__for', slideno - 1);
  });
}

