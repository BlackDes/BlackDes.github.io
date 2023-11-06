document.addEventListener("DOMContentLoaded", function () {
  var videos = document.querySelectorAll(".video-swiper");

  videos.forEach(function (video) {
      video.addEventListener("play", function () {
          videos.forEach(function (otherVideo) {
              if (otherVideo !== video && !otherVideo.paused) {
                  otherVideo.pause();
              }
          });
      });
  });
});

const sliderSwiper = new Swiper(".card-slider", {
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const contactsSwiper = new Swiper(".card-contacts", {
  slidesPerView: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const gallerySwiper = new Swiper(".card-gallery", {
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
