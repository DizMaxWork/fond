$(document).ready(function (){
    $(".bars").on("click",function(){
        $(".mobile-menu").fadeIn(); 
        $(this).hide();
        $(".mobile-menu__close").show();
    });
    $(".mobile-menu__close").on("click", function(){
        $(".mobile-menu").fadeOut();
        $(this).hide();
        $(".bars").show();
    });

    $(".slick").slick({
        slidesToShow:10,
        infinite: false,
        focusOnSelect: true,
        nextArrow: "<div class='arrow-2'></div>",
        prevArrow: "<div class='arrow-1'></div>",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow:8,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:6,
                } 
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:4,
                } 
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow:3,
                } 
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow:2,
                } 
            }
        ]
    })


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

// $('.slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
//     $('.slick').find('.slick-current').find('label').trigger('click');
// });