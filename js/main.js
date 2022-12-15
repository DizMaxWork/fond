$(document).ready(function (){
  $(".bars").on("click",function(){
      $(".mobile-menu").fadeIn();
      //$(this).hide();
      $(".mobile-menu__close").show();
  });
  $(".mobile-menu__close").on("click", function(){
      $(".mobile-menu").fadeOut();
      //$(this).hide();
     // $(".bars").show();
  });

/*  $('.center').slick({
      centerPadding: '60px',
      slidesToShow: 2,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
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
    });*/

  $('.wrapper-base-church-slider').slick({
      dots: false,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: false,
      variableWidth: false,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
              }
          },
      ]
  });


});
(function($) {
  $(function() {
    $("ul.tabs__caption").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.tabs")
        .find("div.tabs__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
})(jQuery);
$(document).ready(function() {
  $('.acc-container .acc:nth-child(1) .acc-head').addClass('active');
  $('.acc-container .acc:nth-child(1) .acc-content').slideDown();
  $('.acc-head').on('click', function() {
      if($(this).hasClass('active')) {
        $(this).siblings('.acc-content').slideUp();
        $(this).removeClass('active');
      }
      else {
        $('.acc-content').slideUp();
        $('.acc-head').removeClass('active');
        $(this).siblings('.acc-content').slideToggle();
        $(this).toggleClass('active');
      }
  });
  });
// $('.slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
//     $('.slick').find('.slick-current').find('label').trigger('click');
// });
