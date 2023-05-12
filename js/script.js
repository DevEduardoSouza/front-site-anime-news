let imgCarrosel = document.querySelector('.main-news')

var btn_ant = document.querySelector("#ant");
var btn_prox = document.querySelector("#prox");

imgCarrosel.addEventListener('mouseover', ()=>{
    btn_prox.style.display = 'block';
    btn_ant.style.display = 'block';
});

imgCarrosel.addEventListener("mouseout", ()=>{
    btn_prox.style.display = 'none';
    btn_ant.style.display = 'none';
});

let newsSlider = [
    {img:'https://i0.wp.com/viciados.net/wp-content/uploads/2022/11/Naruto-Shippuden-Boruto-2023.webp', category:'TESTE', title:'Top 10 animes mais asistido', author:'Eduardo souza', totalComments: 20},
    {img:'https://s2.glbimg.com/8i45kDFdGGycvikrJ6Ew_t87zZo=/0x0:1024x572/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/t/q/Q3lwNDREeJkBs6XSHVIQ/attack.jpg', category:'TESTE', title:'Teste 2', author:'Eduardo souza', totalComments: 20},
    {img:'https://image.api.playstation.com/vulcan/img/cfn/11307Xv0hRtrEfI1d3U5sooTOMfEP7ZN3xCekypTL0vWCL3wW4yfYLnqXhguZioi5NJoSvcFWO1NMfY_1nA5GtdTlXcCSpfI.png', category:'TESTE', title:'Teste 3', author:'Eduardo souza', totalComments: 20},
    {img:'https://s.aficionados.com.br/imagens/saitama-na-lua-aficionados.jpg', category:'TESTE', title:'Teste 4', author:'Eduardo souza', totalComments: 20}
]

console.log(newsSlider[0].title);

var cont = 0;
var img = document.querySelector('.main-news img');
modificar(0);

btn_ant.addEventListener('click', ()=>{
    if(cont > 0)
        cont--;
    modificar(cont);
});
function prox() {
    if(cont == newsSlider.length - 1)
        cont = 0;
    else
        cont++;
    modificar(cont);
}
function modificar(cont) {
    let newMain = document.querySelector(".main-news");

    newMain.querySelector("img").setAttribute('src', newsSlider[cont].img);
    newMain.querySelector(".category").innerHTML = newsSlider[cont].category;
    newMain.querySelector(".title").innerHTML = newsSlider[cont].title;
    newMain.querySelector(".author").innerHTML = "Por "+ newsSlider[cont].author;
    newMain.querySelector(".totalComments").innerHTML = newsSlider[cont].totalComments + " Comentários";
}

btn_prox.addEventListener('click', prox);
setInterval(prox, 7000);