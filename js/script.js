// Seleção
const imgCarrosel = document.querySelector('.main-news')
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const btnsCarousel = document.querySelectorAll('.btn-carousel');

const news = [
    {img:'https://i0.wp.com/viciados.net/wp-content/uploads/2022/11/Naruto-Shippuden-Boruto-2023.webp', category:'anime', title:'Top 10 animes mais asistido', author:'Eduardo souza', totalComments: 20, id:1},
    {img:'https://s2.glbimg.com/8i45kDFdGGycvikrJ6Ew_t87zZo=/0x0:1024x572/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/t/q/Q3lwNDREeJkBs6XSHVIQ/attack.jpg', category:'review', title:'Teste 2', author:'Eduardo souza', totalComments: 20, id:2},
    {img:'https://image.api.playstation.com/vulcan/img/cfn/11307Xv0hRtrEfI1d3U5sooTOMfEP7ZN3xCekypTL0vWCL3wW4yfYLnqXhguZioi5NJoSvcFWO1NMfY_1nA5GtdTlXcCSpfI.png', category:'manga', title:'Teste 3', author:'Eduardo souza', totalComments: 20, id:3},
    {img:'https://s.aficionados.com.br/imagens/saitama-na-lua-aficionados.jpg', category:'jogos', title:'Teste 4', author:'Eduardo souza', totalComments: 20, id:4}
];


// Funções
const toggleMouse = () =>{
    btnsCarousel.forEach((el)=>{
        el.classList.toggle('hide');
    });
};


// Eventos
imgCarrosel.addEventListener('mouseover', ()=>{
    toggleMouse();
});
imgCarrosel.addEventListener("mouseout", ()=>{
    toggleMouse();
});




var cont = 0;
var img = document.querySelector('.main-news img');
modificar(0);

btnPrev.addEventListener('click', ()=>{
    if(cont > 0)
        cont--;
    modificar(cont);
});
function prox() {
    if(cont == news.length - 1)
        cont = 0;
    else
        cont++;
    modificar(cont);
}
function modificar(cont) {
    let newMain = document.querySelector(".main-news");

    newMain.querySelector("img").setAttribute('src', news[cont].img);
    newMain.querySelector(".category").innerText = news[cont].category;
    newMain.querySelector(".title").innerText = news[cont].title;
    newMain.querySelector(".author").innerText = "Por "+ news[cont].author;
    newMain.querySelector(".totalComments").innerText = news[cont].totalComments + " Comentários";
    newMain.querySelector('.link-post').setAttribute('href', `categoria/${news[cont].category}/post.html?id=${news[cont].id}`)
}

btnNext.addEventListener('click', prox);
setInterval(prox, 7000);