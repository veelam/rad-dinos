/***** MAIN SECTION - SWIPERJS ANIMATIONS *****/

var scene = document.getElementById("hero__scene");
var parallaxInstance = new Parallax(scene);

var keys = [
  "Ankylosaurus",
  "Brachiosaurus",
  "Deinonychus",
  "Hypsilophodon",
  "Iguanodon",
  "Pteranodon",
  "Spinosaurus",
  "Pachycephalosaurus"
];

// INITIALIZE SWIPER
var slider = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 150,
  centeredSlides: true,
  pagination: {
    el: ".dinosaur-links",
    clickable: true,
    renderBullet: function(index, className) {
      return '<div class="' + className + '">' + keys[index] + "</div>";
    }
  }
});

slider.on("slideChange", function() {
  gsap.to(".slide-title span", 0.5, {
    x: 0
  });
  gsap.to(".slide-subtitle span", 0.5, {
    x: 0
  });
  gsap.to(".slide-detail span", 0.5, {
    x: 0
  });
  gsap.to(".slide-detail-facts div", 0.5, {
    x: 0
  });
  gsap.to(".swiper-slide-active", 0.5, {
    scale: 0.85
  });
  gsap.to(".swiper-slide .slide-img", 0.5, {
    rotation: 20
  });
});

slider.on("slideChangeTransitionEnd", function() {
  gsap.to(".swiper-slide .slide-img", 0.5, {
    rotation: 10
  });
  gsap.to(".slide-text span", 0.2, {
    x: 0,
    delay: 0.1
  });
  gsap.to(".slide-text span", 0, {
    x: "100px"
  });
  gsap.to(".slide-title span", 0.2, {
    x: 0
  });
  gsap.to(".slide-title span", 0, {
    x: "100px"
  });
  gsap.to(".slide-detail span", 0.2, {
    x: 0
  });

  gsap.to(".slide-detail-facts div", 0.2, {
    x: 0
  });

  gsap.to(".swiper-slide-active", 0.5, {
    scale: 1,
    ease: Power4.easeOut
  });

  gsap.to(".swiper-slide-active .slide-text", 0, {
    autoAlpha: 1
  });
  gsap.to(".swiper-slide-active .slide-title", 0, {
    autoAlpha: 1
  });

  gsap.to(".swiper-slide-next .slide-text", 0, {
    autoAlpha: 0
  });
  gsap.to(".swiper-slide-prev .slide-text", 0, {
    autoAlpha: 0
  });

  gsap.to(".swiper-slide-next .slide-title", 0, {
    autoAlpha: 0
  });
  gsap.to(".swiper-slide-prev .slide-title", 0, {
    autoAlpha: 0
  });
});

gsap.to(".swiper-slide-next .slide-text", 0, {
  autoAlpha: 0
});
gsap.to(".swiper-slide-prev .slide-text", 0, {
  autoAlpha: 0
});

gsap.to(".swiper-slide-next .slide-title", 0, {
  autoAlpha: 0
});
gsap.to(".swiper-slide-prev .slide-title", 0, {
  autoAlpha: 0
});

gsap.to(".swiper-slide", 0, {
  scale: 0.85
});

gsap.to(".swiper-slide-active", 0, {
  scale: 1
});

/***** BACK TO TOP BUTTON *****/
var $backToTop = $(".back-to-top");
$backToTop.hide();

$(window).on('scroll', function() {
  if ($(this).scrollTop() > 600) {
    $backToTop.fadeIn();
  } else {
    $backToTop.fadeOut();
  }
});

$backToTop.on('click', function(e) {
  $("html, body").animate({scrollTop: 0}, 300);
});