(function ($) {
  "user strict";

  $(document).ready(function () {
    // preloader
    $("#preloader").delay(300).animate({
      "opacity": "0"
    }, 500, function () {
      $("#preloader").css("display", "none");
    });

    // nice select
    $('select:not(.ignore)').niceSelect();

    // counter up
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });

    // scroll-to-top
    var ScrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {
      if ($(this).scrollTop() < 500) {
        ScrollTop.removeClass("active");
      } else {
        ScrollTop.addClass("active");
      }
    });

    //cart toggle Class
    $('.cart-toggle').on('click', function () {
      $('.cart-menu').toggleClass('show');
    });

    // Input Increase
    var minVal = 1, maxVal = 20;
    $(".increaseQty").on('click', function () {
      var $parentElm = $(this).parents(".qtySelector");
      $(this).addClass("clicked");
      setTimeout(function () {
        $(".clicked").removeClass("clicked");
      }, 100);
      var value = $parentElm.find(".qtyValue").val();
      if (value < maxVal) {
        value++;
      }
      $parentElm.find(".qtyValue").val(value);
    });

    $(".decreaseQty").on('click', function () {
      var $parentElm = $(this).parents(".qtySelector");
      $(this).addClass("clicked");
      setTimeout(function () {
        $(".clicked").removeClass("clicked");
      }, 100);
      var value = $parentElm.find(".qtyValue").val();
      if (value > 1) {
        value--;
      }
      $parentElm.find(".qtyValue").val(value);
    });

    // scrollTop
    var fixed_top = $("#header-section");
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        fixed_top.addClass("animated fadeInDown header-fixed");
      }
      else {
        fixed_top.removeClass("animated fadeInDown header-fixed");
      }
    });

    // navbar-click
    $(".navbar li a").on("click", function () {
      var element = $(this).parent("li");
      if (element.hasClass("show")) {
        element.removeClass("show");
        element.find("li").removeClass("show");
      }
      else {
        element.addClass("show");
        element.siblings("li").removeClass("show");
        element.siblings("li").find("li").removeClass("show");
      }
    });

    // testimonials-carousel
    $('.testimonials-carousel').slick({
      infinite: true,
      autoplay: false,
      focusOnSelect: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: "<button type='button' class='slick-prev pull-left btn-icon'></button>",
      nextArrow: "<button type='button' class='slick-next pull-right btn-icon'></button>",
      dots: false,
      dotsClass: 'section-dots',
      customPaging: function (slider, i) {
        var slideNumber = (i + 1),
          totalSlides = slider.slideCount;
        return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
      }
    });

    // project-carousel
    $('.project-carousel').slick({
      infinite: true,
      autoplay: true,
      focusOnSelect: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      prevArrow: "<button type='button' class='slick-prev pull-left btn-icon'></button>",
      nextArrow: "<button type='button' class='slick-next pull-right btn-icon'></button>",
      dots: false,
      dotsClass: 'section-dots',
      customPaging: function (slider, i) {
        var slideNumber = (i + 1),
          totalSlides = slider.slideCount;
        return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
      }
    });

    // worked-offer-carousel
    $('.worked-carousel').slick({
      infinite: true,
      autoplay: true,
      focusOnSelect: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      dotsClass: 'section-dots',
      customPaging: function (slider, i) {
        var slideNumber = (i + 1),
          totalSlides = slider.slideCount;
        return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
      },
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });

    // professional-carousel
    $('.professional-carousel').slick({
      infinite: true,
      autoplay: false,
      focusOnSelect: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: "<button type='button' class='slick-prev pull-left btn-icon'></button>",
      nextArrow: "<button type='button' class='slick-next pull-right btn-icon'></button>",
      dots: false,
      dotsClass: 'section-dots',
      customPaging: function (slider, i) {
        var slideNumber = (i + 1),
          totalSlides = slider.slideCount;
        return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
      },
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 577,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 390,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // wow Animation
    wow = new WOW(
      {
        animateClass: 'animated',
        offset: 100,
      }
    );
    wow.init();

  });

  var parallaxContainer = document.getElementsByClassName("main-content")[0];

  parallaxContainer.addEventListener("mousemove", function (event) {
    var x = event.clientX;
    var y = event.clientY;

    var parallaxContent = this.getElementsByClassName("item");
    for (var i = 0; i < parallaxContent.length; i++) {
      var xVal = parallaxContent[i].getAttribute("item-x");
      var yVal = parallaxContent[i].getAttribute("item-y");
      parallaxContent[i].style.transform = "translate(" + (x / xVal) + "%, " + (y / yVal) + "%)";
    }
  });


})(jQuery);

// script.js
const imagen1 = document.getElementById('imagen1');
const imagen2 = document.getElementById('imagen2');

imagen1.addEventListener('mouseenter', () => {
  imagen1.style.display = 'none';
  imagen2.style.display = 'block';
});

imagen2.addEventListener('mouseleave', () => {
  imagen2.style.display = 'none';
  imagen1.style.display = 'block';
});
