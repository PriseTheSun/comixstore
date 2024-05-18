$(document).ready(function () {
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

});

$(document).on('DOMContentLoaded', function () {
    new Splide('.splide', {
      type: 'slide',
      perPage: 1,
      autoplay: true,
      pauseOnHover: true,
      arrows: true,
      pagination: false,
    }).mount();
  });

