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

function mobileMenuCollapse() {
  $(".navbar-burger").toggleClass("is-active");
  $(".navbar-menu").toggleClass("is-active");
}

function fechaCardDeBusca(){
  $("#card_de_busca").addClass("is-hidden");
  $(".navbar-burger").toggleClass("is-active");
  $(".navbar-menu").toggleClass("is-active");
  $("#busca_quadrinho").val('');
}

function mostraDrop(){
  $(".has-dropdown").toggleClass("is-active");
}