(function ($) {
  "use strict";
  // /*========== Responsive Menu  ==========*/
  $(".header__area-main-menu").meanmenu({
    meanMenuContainer: ".responsive-menu",
    meanScreenWidth: "991",
    meanMenuOpen: "<span></span><span></span><span></span>",
    meanMenuClose: '<i class="flaticon-close"></i>',
  });
  // /*==========  wow  ==========*/
  new WOW().init();
  /*========== menu-bar sticky  ==========*/
  $(window).on("scroll", function () {
    var scrollDown = $(window).scrollTop();
    if (scrollDown < 135) {
      $(".header__area").removeClass("header__area-sticky-menu");
    } else {
      $(".header__area").addClass("header__area-sticky-menu");
    }
  });
  /*==========  Team Slider  ==========*/
  var swiper = new Swiper(".team-slider", {
    slidesPerView: 1,
    loop: true,
    speed: 600,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChangeTransitionStart: function () {
        var activeIndex = this.realIndex;
        var teamMembersInfo = document.querySelectorAll(
          ".team__area-left-content"
        );
        teamMembersInfo.forEach(function (member, index) {
          if (index === activeIndex) {
            member.classList.add("active");
          } else {
            member.classList.remove("active");
          }
        });
      },
    },
  });

  /*==========  counterUp  ==========*/
  var counter = $(".counter");
  counter.counterUp({
    time: 2500,
    delay: 100,
  });
  /*==========  Search  =========*/
  $(".header__area-search-icon.open").on("click", function () {
    $(".header__area-search-box").fadeIn().addClass("active");
  });
  $(".header__area-search-box").on("click", function () {
    $(this).fadeIn().removeClass("active");
  });
  $(".header__area-search-box-icon").on("click", function () {
    $(".header__area-search-box").fadeOut().removeClass("active");
  });
  $(".header__area-search-box form").on("click", function (e) {
    e.stopPropagation();
  });
  /*==========  img-popup  ==========*/
  $(".img-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  /*==========  video-popup  ==========*/
  $(".video-popup").magnificPopup({
    type: "iframe",
  });
  /*==========  background  ==========*/
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });
  /*========== scroll to top  ==========*/
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 200) {
      $(".scroll-top").fadeIn(200);
    } else {
      $(".scroll-top").fadeOut(200);
    }
  });
  $(".scroll-top").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  /*==========  theme loader  ==========*/
  $(window).on("load", function () {
    $(".theme-loader").fadeOut(500);
  });
  /*========== FAQ  ==========*/
  $(".faq__area-collapse-item-card-header").click(function () {
    if (
      $(this)
        .next(".faq__area-collapse-item-card-header-content")
        .hasClass("active")
    ) {
      $(this)
        .next(".faq__area-collapse-item-card-header-content")
        .removeClass("active")
        .slideUp();
      $(this)
        .children("i")
        .removeClass("flaticon-remove")
        .addClass("flaticon-plus");
    } else {
      $(
        ".faq__area-collapse-item-card .faq__area-collapse-item-card-header-content"
      )
        .removeClass("active")
        .slideUp();
      $(".faq__area-collapse-item-card .faq__area-collapse-item-card-header i")
        .removeClass("flaticon-remove")
        .addClass("flaticon-plus");
      $(this)
        .next(".faq__area-collapse-item-card-header-content")
        .addClass("active")
        .slideDown();
      $(this)
        .children("i")
        .removeClass("flaticon-plus")
        .addClass("flaticon-remove");
    }
  });
  /*========== Progress Bar  ==========*/
  $("svg.circle-progress").each(function (index, value) {
    $(this).find($("circle.complete")).removeAttr("style");
  });
  $(window)
    .on("scroll", function () {
      $("svg.circle-progress").each(function (index, value) {
        if (
          $(window).scrollTop() >
            $(this).offset().top - $(window).height() * 0.75 &&
          $(window).scrollTop() <
            $(this).offset().top + $(this).height() - $(window).height() * 0.25
        ) {
          var percent = $(this).parent(".beorx-progress").data("counter");
          var radius = $(this).find($("circle.complete")).attr("r");
          var circumference = 2 * Math.PI * radius;
          var strokeDashOffset =
            circumference - (percent * circumference) / 100;
          $(this).find($("circle.complete")).animate(
            {
              "stroke-dashoffset": strokeDashOffset,
            },
            1250
          );
        }
      });
    })
    .trigger("scroll");
  $(".beorx-progress").each(function () {
    $(this).append(
      '<span class="counter">' +
        $(this).data("counter") +
        "<small>%</small></span>"
    );
  });
})(jQuery);

var swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 30,
  freeMode: true, // Habilita a navegação livre entre os cards
  freeModeSticky: true, // Centraliza o card mais próximo ao soltar a navegação
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    540: {
      slidesPerView: "auto",
      slidesPerGroup: 1,
      spaceBetween: 60,
    },
  },
});

var campaignSwiper = new Swiper(".campaignSwiper-container", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  freeMode: true, // Habilita a navegação livre entre os cards
  freeModeSticky: true, // Centraliza o card mais próximo ao soltar a navegação
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

var swiper = new Swiper(".caseSwiper-container", {
  slidesPerView: 1,
  spaceBetween: 0,
  freeMode: false, // Habilita a navegação livre entre os cards
  freeModeSticky: false, // Centraliza o card mais próximo ao soltar a navegação
  navigation: {
    nextEl: ".swiper-button-next-vid",
    prevEl: ".swiper-button-prev-vid",
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});
