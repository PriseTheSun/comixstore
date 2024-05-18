$(document).ready(function () {
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});

$(document).on("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    perPage: 1,
    autoplay: true,
    pauseOnHover: true,
    arrows: true,
    pagination: false,
    loop: true,
  }).mount();
});

$("#busca_quadrinho").on("input", function () {
  if ($(this).val().length > 0) {
    $("#card_de_busca").removeClass("is-hidden");
  } else {
    $("#card_de_busca").addClass("is-hidden");
  }
});
