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

const livros = [
  new Livro("O diário de Anne Frank em quadrinho", "Ari Folman", "Record", "https://m.media-amazon.com/images/I/51oynX0zWPL._SY445_SX342_.jpg", "https://amzn.to/3WHBl7r"),
  new Livro("Avatar: A lenda de Aang: Uma história em quadrinhos", "Nickelodeon", "Planeta", "https://m.media-amazon.com/images/I/81RIyIUJIKL._SY342_.jpg", "https://amzn.to/3Ke4cIR"),
  new Livro("1984 (Edição em quadrinhos)", "George Orwell", "Quadrinhos na Cia", "https://m.media-amazon.com/images/I/41nZx9bO1UL._SY445_SX342_.jpg","https://amzn.to/4bDFk9T"),
  new Livro("GUERRA CIVIL - MARVEL: Uma História Do Universo Marvel", "STUART MOORE", "Novo Século", "https://m.media-amazon.com/images/I/71FTAkJQLrL._SY342_.jpg", "https://amzn.to/3QT9JZb"),
  new Livro("A Morte do Capitão América", "Larry Hama", "Novo Século", "https://m.media-amazon.com/images/I/910ux6HEIDL._SY342_.jpg", "https://amzn.to/4c1ybQv"),
  new Livro("Homem De Ferro - Vírus", "Alex Irvine", "Novo Século", "https://m.media-amazon.com/images/I/61YtqjNkmoL._SY342_.jpg","https://amzn.to/4bo9fTg"),
  new Livro("O mundo de Sofia em quadrinhos (vol. 1): Uma história da filosofia", "Jostein Gaarder", "Seguinte", "https://m.media-amazon.com/images/I/81P1tzKwNoL._SY342_.jpg", "https://amzn.to/4bDFPkh"),
  new Livro("Palestina", "Joe Sacco", "Veneta", "https://m.media-amazon.com/images/I/A1slu-GV5aS._SY342_.jpg", "https://amzn.to/3V6eCR9"),
  new Livro("O Abismo do Esquecimento", "Rodrigo Terrasa", "Devir Livraria", "https://m.media-amazon.com/images/I/81Vj3Wh2pWL._SX445_.jpg", "https://amzn.to/3V3N3YQ"),
  new Livro("Batman & Superman", "Joshua Williamson", "Panini", "https://m.media-amazon.com/images/I/91oPtJzydaL._SY342_.jpg", "https://amzn.to/4arhWKY"),
  new Livro("Venom/Homem-Aranha: Corporação Venom", "Slott Dan", "Panini", "https://m.media-amazon.com/images/I/814JTClfuoL._SY342_.jpg", "https://amzn.to/3UPtHoQ")
];

const gerenciador = new GerenciadorLivros(livros);

$('#busca_quadrinho').on('keyup', function() {
  const termo = $(this).val();
  const filtrados = gerenciador.filtrarPorTitulo(termo);
  exibeCards(filtrados);
});

function exibeCards(filtrados) {
  const $cardContent = $('#card-content');
  $cardContent.empty();

  if (filtrados.length > 0) {
    filtrados.forEach((livro) => {
      const $cardDiv = $('<div>', { id: 'card-item' });

      const $cardTitle = $('<div>', { class: 'card-title' }).html(`<a href="${livro.linkUrl}">${livro.nome}</a>`);
      const $cardImage = $('<div>', { class: 'card-image' }).html(`<img src="${livro.imageUrl}" alt="${livro.nome}">`);

      $cardDiv.append($cardTitle, $cardImage);
      $cardContent.append($cardDiv);
    });
  }
}






