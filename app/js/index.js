function initSlider(){
  $('.center.slider').slick({
    dots: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right"></i></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
};
