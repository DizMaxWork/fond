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

    /*$('.wrapper-base-church-slider').slick({
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
    });*/


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


// drag autoslider start


$(".bcs-template").click(function (e) {
    if($('.wrapper-base-church-slider').hasClass('active')){
        e.preventDefault();
    }
});

const slider = document.querySelector('.wrapper-base-church-slider');
let isDown = false;
let startX;
let scrollLeft = 0;

setTimeout('pageScroll()', 1000);


slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    cancelMomentumTracking();
});


slider.addEventListener('mouseover', () => {
    slider.classList.add('focus');
});


slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
    slider.classList.remove('focus');
    setTimeout('pageScroll()', 500);
});


slider.addEventListener('mouseup', () => {
    isDown = false;
    setTimeout(function(){
        slider.classList.remove('active')
    }, 100);

    beginMomentumTracking();
});


slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    var prevScrollLeft = slider.scrollLeft;
    slider.scrollLeft = scrollLeft - walk;
    velX = slider.scrollLeft - prevScrollLeft;
});

// Momentum

let velX = 0;
let momentumID;

slider.addEventListener('wheel', (e) => {
    cancelMomentumTracking();
});

function beginMomentumTracking(){
    cancelMomentumTracking();
    momentumID = requestAnimationFrame(momentumLoop);
}
function cancelMomentumTracking(){
    cancelAnimationFrame(momentumID);
}
function momentumLoop(){
    slider.scrollLeft += velX;
    velX *= 0.95;
    if (Math.abs(velX) > 0.5){
        momentumID = requestAnimationFrame(momentumLoop);
    }
}

let my_time;
let count = 0;

function pageScroll() {
    // If condition to set repeat
    if (count < 2 && !$('.wrapper-base-church-slider').hasClass('focus')) {
        var objDiv = document.querySelector('.wrapper-base-church-slider');
        objDiv.scrollLeft = objDiv.scrollLeft + 1;
        if (objDiv.scrollLeft == (objDiv.scrollWidth - 61)) {
            setTimeout(function() {
                objDiv.scrollLeft = 0;
                count++;
            }, 1200);
        }
        //set scrolling time start
        my_time = setTimeout('pageScroll()', 15);
        //set scrolling time end
    }
}


// drag autoslider end


// grag hrams in works

$(document).ready(function() {
    $('.scrollbar').mousedown(function (event) {
        $(this)
            .data('down', true)
            .data('x', event.clientX)
            .data('scrollLeft', this.scrollLeft)
            .addClass("dragging");

        return false;
    }).mouseup(function (event) {
        $(this)
            .data('down', false)
            .removeClass("dragging");
    }).mousemove(function (event) {
        if ($(this).data('down') == true) {
            this.scrollLeft = $(this).data('scrollLeft') + $(this).data('x') - event.clientX;
        }
    });
    $(window).mouseout(function (event) {
        if ($('.team-form-data').data('down')) {
            try {
                if (event.originalTarget.nodeName == 'BODY' || event.originalTarget.nodeName == 'HTML') {
                    $('.team-form-data').data('down', false);
                }
            } catch (e) {}
        }
    });
});


