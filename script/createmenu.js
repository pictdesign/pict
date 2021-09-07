export class CreateMenu {
  
  generateMenu() {
    const menuItem = `<div class="menu-button">
      <span class="menu-button__lines"></span>
      </div>
      <div class="menu-button__overlay"></div>
      <header class="header menu-button__line_transition">
      <nav class="navigation">
        <a href="https://pict.design" class="navigation__link">
          <img src="images/logo.svg" alt="Логотип Pict.design" class="logo">
        </a>
        <a href="/about" class="navigation__link">О нас</a>
        <div class="navigation__info">
          <a href="https://instagram.com/pict.agency" class="navigation__link svg-link" target="blank_">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" x="0" y="0" viewBox="0 0 30.2 30.2" xml:space="preserve">
              <path id="instagram" fill="gray" class="st0" d="M21.9.1H8.2C3.7.1.1 3.7.1 8.2V22c0 4.5 3.6 8.1 8.1 8.1H22c4.5 0 8.1-3.6 8.1-8.1V8.2c0-4.4-3.7-8.1-8.2-8.1zM28.3 22c0 3.5-2.9 6.4-6.4 6.4H8.2c-3.5 0-6.4-2.9-6.4-6.4V8.2c0-3.5 2.9-6.4 6.4-6.4H22c3.5 0 6.4 2.9 6.4 6.4L28.3 22z"></path>
              <path id="instagram" fill="gray" class="st0" d="M15.1 6.9c-4.5 0-8.2 3.7-8.2 8.2s3.7 8.2 8.2 8.2 8.2-3.7 8.2-8.2-3.7-8.2-8.2-8.2zm0 14.7c-3.6 0-6.4-2.9-6.4-6.4 0-3.6 2.9-6.4 6.4-6.4 3.6 0 6.4 2.9 6.4 6.4 0 3.5-2.9 6.4-6.4 6.4zM23.5 4C22.1 4 21 5.1 21 6.4c0 1.3 1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4-1-2.4-2.3-2.4zm0 3.1c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7.4 0 .7.3.7.7-.1.4-.4.7-.7.7z"></path>
            </svg>
          </a>
          <a class="svg-link data-tooltip" data-tooltip="скачать презентацию" href="img/pict_pres.pdf" download="">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" x="0px" y="0px" viewBox="0 0 20 20" xml:space="preserve" title="Скачать презентацию">
                <path id="facebook" fill="gray" d="M10.42 8.818c0-.472-.35-.74-.823-.74H8.166v1.471h1.431c.473 0 .823-.268.823-.731m-4.024 4.579V6.535h3.437c1.543 0 2.386 1.04 2.386 2.284 0 1.235-.843 2.274-2.386 2.274H8.166v2.305h-1.77zM11.67 12.498c0-.525.441-.968.965-.968a.98.98 0 01.968.968.979.979 0 01-.968.967.978.978 0 01-.965-.967"></path>
                <path id="facebook" fill="gray" d="M14.133 0H5a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V5.868L14.133 0zm.1 1.656l3.778 3.779h-3.778V1.656zM15 18.9H5c-2.15 0-3.9-1.75-3.9-3.9V5c0-2.15 1.75-3.9 3.9-3.9h8.133v4.435a1 1 0 001 1H18.9V15c0 2.15-1.75 3.9-3.9 3.9z"></path>
            </svg>
          </a>
        </div>
        <ul class="navigation__menu">
          <li class="navigation__item"><a href="https://pict.design/#projects" class="navigation__link navigation__link_active projects">Все проекты</a></li>
          <li class="navigation__item"><a href="https://pict.design/#style" class="navigation__link style">Фирменный стиль</a></li>
          <li class="navigation__item"><a href="https://pict.design/#presentation" class="navigation__link presentation">Презентации</a></li>
          <li class="navigation__item"><a href="https://pict.design/#polygraphy" class="navigation__link polygraphy">Полиграфия</a></li>
          <li class="navigation__item"><a href="https://pict.design/#web" class="navigation__link web">Веб-дизайн</a></li>
          <li class="navigation__item"><a href="https://pict.design/#graphics" class="navigation__link graphics">Графика</a></li>
        </ul>
      </nav> 
      <article class="company">
        <p class="company__item">ИП Вохмянина М.А.</p>
        <p class="company__item">ИНН 501006590538</p>
        <p class="company__item">ОГРНИП 316435000087993</p>
        <a href="mailto:ask@pict.design" class="navigation__link navigation__link_place_company">ask@pict.design</a>
        <a href="tel:+7 995 317 50 25" class="navigation__link navigation__link_place_company">+7 995 317 50 25</a>
      </article>
      </header>`;
    const body = document.querySelector('.page');
    const element = body.insertAdjacentHTML('afterbegin', menuItem);
    return element;
  }
}
  