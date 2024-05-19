$(document).ready(function () {
  AOS.init();
  mudaTab(0);
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

function mobileMenuCollapse() {
  $(".navbar-burger").toggleClass("is-active");
  $(".navbar-menu").toggleClass("is-active");
}

function fechaCardDeBusca() {
  $("#card_de_busca").addClass("is-hidden");
  $(".navbar-burger").toggleClass("is-active");
  $(".navbar-menu").toggleClass("is-active");
  $("#busca_quadrinho").val("");
}

function mostraDrop() {
  $(".has-dropdown").toggleClass("is-active");
}

function mudaTab(index) {
  $(".font-tab").removeClass("active");
  $(".tab-content").hide();
  $('.font-tab[data-index="' + index + '"]').addClass("active");
  $('.tab-content[data-index="' + index + '"]').fadeIn();
}

$("#tabs_controlers .font-tab").on("click", function () {
  const index = $(this).data("index");
  mudaTab(index);
});

const livros = [
  new LivroTemplate(
    "O diário de Anne Frank em quadrinho",
    "Ari Folman",
    "Record",
    "https://m.media-amazon.com/images/I/51oynX0zWPL._SY445_SX342_.jpg",
    "https://amzn.to/3WHBl7r"
  ),
  new LivroTemplate(
    "Avatar: A lenda de Aang: Uma história em quadrinhos",
    "Nickelodeon",
    "Planeta",
    "https://m.media-amazon.com/images/I/81RIyIUJIKL._SY342_.jpg",
    "https://amzn.to/3Ke4cIR"
  ),
  new LivroTemplate(
    "1984 (Edição em quadrinhos)",
    "George Orwell",
    "Quadrinhos na Cia",
    "https://m.media-amazon.com/images/I/41nZx9bO1UL._SY445_SX342_.jpg",
    "https://amzn.to/4bDFk9T"
  ),
  new LivroTemplate(
    "GUERRA CIVIL - MARVEL: Uma História Do Universo Marvel",
    "STUART MOORE",
    " Novo Século",
    "https://m.media-amazon.com/images/I/71FTAkJQLrL._SY342_.jpg",
    "https://amzn.to/3QT9JZb"
  ),
  new LivroTemplate(
    "A Morte do Capitão América",
    "Larry Hama",
    "Novo Século",
    "https://m.media-amazon.com/images/I/910ux6HEIDL._SY342_.jpg",
    "https://amzn.to/4c1ybQv"
  ),
  new LivroTemplate(
    "Homem De Ferro - Vírus",
    "Alex Irvine",
    "Novo Século",
    "https://m.media-amazon.com/images/I/61YtqjNkmoL._SY342_.jpg",
    "https://amzn.to/4bo9fTg"
  ),

  new LivroTemplate(
    "O mundo de Sofia em quadrinhos (vol. 1): Uma história da filosofia",
    "Jostein Gaarder",
    "Seguinte",
    "https://m.media-amazon.com/images/I/81P1tzKwNoL._SY342_.jpg",
    "https://amzn.to/4bDFPkh"
  ),
  new LivroTemplate(
    "Palestina",
    "Joe Sacco",
    "Veneta",
    "https://m.media-amazon.com/images/I/A1slu-GV5aS._SY342_.jpg",
    "https://amzn.to/3V6eCR9"
  ),
  new LivroTemplate(
    "O Abismo do Esquecimento",
    "Rodrigo Terrasa",
    "Devir Livraria",
    "https://m.media-amazon.com/images/I/81Vj3Wh2pWL._SX445_.jpg",
    "https://amzn.to/3V3N3YQ"
  ),
  new LivroTemplate(
    "Batman & Superman",
    "Joshua Williamson",
    "Panini",
    "https://m.media-amazon.com/images/I/91oPtJzydaL._SY342_.jpg",
    "https://amzn.to/4arhWKY"
  ),
  new LivroTemplate(
    "Venom/Homem-Aranha: Corporação Venom",
    "Slott Dan",
    "Panini",
    "https://m.media-amazon.com/images/I/814JTClfuoL._SY342_.jpg",
    "https://amzn.to/3UPtHoQ"
  ),
];

const gerenciador = new FiltragemLivros(livros);

$("#busca_quadrinho").on("keyup", function () {
  const termo = $(this).val();
  const filtrados = gerenciador.filtrarPorTitulo(termo);
  exibeCards(filtrados);
});

$("#busca_quadrinho").on("input", function () {
  const $cardDeBusca = $("#card_de_busca");
  if (this.value.length > 0) {
    $cardDeBusca.removeClass("is-hidden");
  } else {
    $cardDeBusca.addClass("is-hidden");
  }
});

function exibeCards(filtrados) {
  const $cardContent = $("#card-content");
  $cardContent.empty();

  if (filtrados.length > 0) {
    const cardItems = filtrados.map(
      (livro) => `
      <div id="card-item">
        <div class="card-image"><img src="${livro.imageUrl}" alt="${livro.nome}"></div>
        <div class="card-title"><a href="${livro.linkUrl}">${livro.nome}</a></div>
      </div>
    `
    );
    $cardContent.append(cardItems);
  }
}

function montaUmTemplateDeCard(
  imagemLink,
  usuarioAvatar,
  title,
  subtitle,
  content,
  datetime
) {
  return `
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img src="${imagemLink}" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left is-hidden">
            <figure class="image is-48x48">
              <img src="${usuarioAvatar}" alt="Placeholder image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">${title}</p>
            <p class="subtitle is-6">${subtitle}</p>
          </div>
        </div>

        <div class="content">
          ${content}
          <br />
          <time datetime="${datetime}">${new Date(
    datetime
  ).toLocaleString()}</time>
        </div>
      </div>
    </div>
  `;
}


const montaSessaoTab1 = [
  {
    imagemLink: "https://bulma.io/assets/images/placeholders/1280x960.png",
    usuarioAvatar: "https://bulma.io/assets/images/placeholders/96x96.png",
    title: "Jane Doe",
    subtitle: "@ComicRider1",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>',
    datetime: "2016-1-2T23:09:00",
  },
  {
    imagemLink: "https://bulma.io/assets/images/placeholders/1280x960.png",
    usuarioAvatar: "https://bulma.io/assets/images/placeholders/96x96.png",
    title: "Jane Doe",
    subtitle: "@ComicRider2",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>',
    datetime: "2016-1-2T23:09:00",
  },
  {
    imagemLink: "https://bulma.io/assets/images/placeholders/1280x960.png",
    usuarioAvatar: "https://bulma.io/assets/images/placeholders/96x96.png",
    title: "Jane Doe",
    subtitle: "@ComicRider3",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>',
    datetime: "2016-1-2T23:09:00",
  },
  {
    imagemLink: "https://bulma.io/assets/images/placeholders/1280x960.png",
    usuarioAvatar: "https://bulma.io/assets/images/placeholders/96x96.png",
    title: "Jane Doe",
    subtitle: "@ComicRider4",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>',
    datetime: "2016-1-2T23:09:00",
  },

];

const montaSessaoTab2 = [
  {
    imagemLink: "https://bulma.io/assets/images/placeholders/1280x960.png",
    usuarioAvatar: "https://bulma.io/assets/images/placeholders/96x96.png",
    title: "Alex Johnson",
    subtitle: "@ComicRider2",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>',
    datetime: "2016-1-3T23:09:00",
  },
 
];

const montaSessaoTab3 = [
  {
    imagemLink: "https://bulma.io/assets/images/placeholders/1280x960.png",
    usuarioAvatar: "https://bulma.io/assets/images/placeholders/96x96.png",
    title: "Emily Clark",
    subtitle: "@ComicRider3",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>',
    datetime: "2016-1-4T23:09:00",
  },
 
];

const tabData = [montaSessaoTab1, montaSessaoTab2, montaSessaoTab3];

$(document).ready(function () {
  $(".tab-content").each(function (index) {
    const tabContent = $(this);
    const cardData = tabData[index];

    tabContent.find(".column").each(function (columnIndex) {
      if (columnIndex < cardData.length) {
        const cardHtml = montaUmTemplateDeCard(
          cardData[columnIndex].imagemLink,
          cardData[columnIndex].usuarioAvatar,
          cardData[columnIndex].title,
          cardData[columnIndex].subtitle,
          cardData[columnIndex].content,
          cardData[columnIndex].datetime
        );
        $(this).html(cardHtml);
      }
    });
  });
});
