//---------------------{ COMPONENTES JS PURO}---------------------
const createHeader = () =>{

  const conteinerHeader = document.querySelector('.container-header');
  const logoName = "anime logo-2 invert_edited_edited_edited.webp";



  const header = document.createElement('header');

  const container = document.createElement('div');
  container.classList.add('conteiner' ,'navbar');

  const logo = document.createElement('div');
  logo.classList.add('logo-navbar');

  logo.innerHTML = `
      <a href="index.html">
          <img src="imgs/${logoName}" alt="Logo do Site">
      </a>
  `
  container.appendChild(logo);



  const nav = document.createElement('nav');
  nav.classList.add("menu-navbar");
  const ul = document.createElement('ul');
  ul.innerHTML = `
  <li><a href="/index.html">HOME</a></li>
  <li><a href="">ANIMES</a></li>
  <li><a href="">MANGÁS</a></li>
  <li><a href="">GAMES</a></li>
  <li><a href="">CONTATOS</a></li>
  <li><a href="/painelAdm.html">PANIEL ADM</a></li>
  `
  nav.appendChild(ul);
  container.appendChild(nav);


  const divSearch = document.createElement('div');
  divSearch.classList.add('menu-search');
  const formSearch = document.createElement('form');
  formSearch.innerHTML = `
  <input type="search" id="search" name="search" placeholder="Buscar" autocomplete="off">
  <button type="submit">
    <i class="bi bi-search"></i>
  </button>
  `
  divSearch.appendChild(formSearch);
  container.appendChild(divSearch);



  const iconsSocial = ['bi bi-instagram', 'bi bi-facebook', 'bi bi-twitter', 'bi bi-tiktok'];

const containerListIcons = document.createElement('div');
containerListIcons.classList.add('menu-social-login');

iconsSocial.forEach((icon) => {
  const iconElement = document.createElement('div');
  iconElement.classList.add('icone-social');
  iconElement.innerHTML = `
    <a href="">
      <i class="${icon}"></i>
    </a>
  `;
  containerListIcons.appendChild(iconElement);
});

container.appendChild(containerListIcons);

header.appendChild(container);
conteinerHeader.appendChild(header);
}
createHeader();
