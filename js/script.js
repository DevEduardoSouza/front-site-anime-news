//---------------------{ Seleção }---------------------
const imgCarrosel = document.querySelector('.main-news')
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const btnsCarousel = document.querySelectorAll('.btn-carousel');
const newLatestContainer = document.querySelector('.content_latest_news');

const news = [
    {img:'https://i0.wp.com/viciados.net/wp-content/uploads/2022/11/Naruto-Shippuden-Boruto-2023.webp', category:'anime', title:'Top 10 animes mais asistido', author:'Eduardo souza', totalComments: 20, id:1},
    {img:'https://s2.glbimg.com/8i45kDFdGGycvikrJ6Ew_t87zZo=/0x0:1024x572/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/t/q/Q3lwNDREeJkBs6XSHVIQ/attack.jpg', category:'review', title:'Teste 2', author:'Eduardo souza', totalComments: 20, id:2},
    {img:'https://image.api.playstation.com/vulcan/img/cfn/11307Xv0hRtrEfI1d3U5sooTOMfEP7ZN3xCekypTL0vWCL3wW4yfYLnqXhguZioi5NJoSvcFWO1NMfY_1nA5GtdTlXcCSpfI.png', category:'manga', title:'Teste 3', author:'Eduardo souza', totalComments: 20, id:3},
    {img:'https://s.aficionados.com.br/imagens/saitama-na-lua-aficionados.jpg', category:'jogos', title:'Teste 4', author:'Eduardo souza', totalComments: 20, id:4}
];

const latestNews = [
    {img:'https://s.aficionados.com.br/imagens/saitama-na-lua-aficionados.jpg',descriptionNews:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis est dolores provident odit nostrum. Deserunt corporis molestiae deleniti, amet minus earum minima ipsum modi architecto quod illum tempore voluptas? Exercitationem.' , category:'manga', title:'Teste 3', author:'Eduardo souza', totalComments: 20, totalViews:50, date:'10/10/2010', id:10},
    {img:'https://i0.wp.com/viciados.net/wp-content/uploads/2022/11/Naruto-Shippuden-Boruto-2023.webp',descriptionNews:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis est dolores provident odit nostrum. Deserunt corporis molestiae deleniti, amet minus earum minima ipsum modi architecto quod illum tempore voluptas? Exercitationem.' , category:'anime', title:'Teste 3', author:'Eduardo souza', totalComments: 20, totalViews:50, date:'10/10/2010', id:11},
    {img:'https://i0.wp.com/viciados.net/wp-content/uploads/2022/11/Naruto-Shippuden-Boruto-2023.webp',descriptionNews:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis est dolores provident odit nostrum. Deserunt corporis molestiae deleniti, amet minus earum minima ipsum modi architecto quod illum tempore voluptas? Exercitationem.' , category:'jogos', title:'Teste 3', author:'Eduardo souza', totalComments: 20, totalViews:50, date:'10/10/2010', id:12},
    {img:'https://i0.wp.com/viciados.net/wp-content/uploads/2022/11/Naruto-Shippuden-Boruto-2023.webp',descriptionNews:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis est dolores provident odit nostrum. Deserunt corporis molestiae deleniti, amet minus earum minima ipsum modi architecto quod illum tempore voluptas? Exercitationem.' , category:'review', title:'Teste 3', author:'Eduardo souza', totalComments: 20, totalViews:50, date:'10/10/2010', id:13},
    {img:'https://i0.wp.com/viciados.net/wp-content/uploads/2022/11/Naruto-Shippuden-Boruto-2023.webp',descriptionNews:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis est dolores provident odit nostrum. Deserunt corporis molestiae deleniti, amet minus earum minima ipsum modi architecto quod illum tempore voluptas? Exercitationem.' , category:'manga', title:'Teste 3', author:'Eduardo souza', totalComments: 20, totalViews:50, date:'10/10/2010', id:14},
];




//---------------------{ Funções }---------------------
const toggleMouse = () =>{
    btnsCarousel.forEach((el)=>{
        el.classList.toggle('hide');
    });
};

// Criar uma noticia
const createNews = (news) => {
    const divNews = document.createElement('div');
    divNews.classList.add('new');
    divNews.classList.add('info_latest_news');

    const categoryNews = document.createElement('span');
    categoryNews.classList.add('category');
    categoryNews.classList.add('category-latest-news');
    categoryNews.innerText = `${news.category}`.toUpperCase();
    divNews.appendChild(categoryNews);

    const imgNews = document.createElement('img');
    imgNews.classList.add('img-post');
    imgNews.setAttribute('src', `${news.img}`);
    imgNews.setAttribute('alt', `Foto: ${news.title}`);
    divNews.appendChild(imgNews);

    const titleNews = document.createElement('span');
    titleNews.classList.add('title');
    titleNews.innerText = `${news.title}`;
    divNews.appendChild(titleNews);

    const descriptionNews = document.createElement('span');
    descriptionNews.classList.add('preview-description');
    descriptionNews.innerText = `${news.descriptionNews}`;
    divNews.appendChild(descriptionNews);

    const btnReadMore = document.createElement('form');
    btnReadMore.innerHTML = `
        <button type="submit" class="btn-read-more news-btn">
        Ler mais
        </button>
    `;
    divNews.appendChild(btnReadMore)
    
    const divInfoPost = document.createElement('div');
    divInfoPost.classList.add('infos-post');

    
    const authorNews = document.createElement('span');
    authorNews.classList.add('author');
    authorNews.innerHTML = `
        <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt=${news.author}>
        <span>${news.author}</span>
    `;
    divInfoPost.appendChild(authorNews);

    
    
    const divStatisticPostNews = document.createElement('div');
    divStatisticPostNews.classList.add('statistic-post');
    divStatisticPostNews.innerHTML = `
    <span class="total-comments">
        <i class="fa fa-comment" aria-hidden="true"></i>
        <span class="value">${news.totalComments}</span>
    </span>
    <span class="total-views">
        <i class="fa fa-eye" aria-hidden="true"></i>
        <span class="value">${news.totalViews}</span>
    </span>
    <span class="post-date">
        <i class="fa fa-calendar" aria-hidden="true"></i>
        <span class="value">${news.date}</span>
    </span>
    `; 
    divInfoPost.appendChild(divStatisticPostNews);
    
   
    
   
    divNews.appendChild(divInfoPost);
    newLatestContainer.appendChild(divNews);
};

// 
latestNews.map((news)=>{
    createNews(news);
})


//---------------------{ Eventos }---------------------
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