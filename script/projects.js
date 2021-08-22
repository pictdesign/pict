

/*объявляем контейнер для карточек*/
const elementsList = document.querySelector('.content__list');

/*создание карточки*/
const createCard = (title, link, previewImage) => {
  const elementTemplate = document.querySelector('#item-template');
  const card = elementTemplate.content.firstElementChild.cloneNode(true);
  const cardLink = card.querySelector('.content__link');
  const cardImage = card.querySelector('.content__image');
  cardLink.textContent = title;
  cardLink.setAttribute("href", link);
  cardImage.setAttribute("src", previewImage);
  return card;
};

function addCard(container, cardElement) {
  container.prepend(cardElement);
}

projects.forEach(function (element) {
  addCard(elementsList, createCard(element.title, element.link, element.previewImage));
});

function deleteCards() {
  while (elementsList.firstChild) {
    elementsList.removeChild(elementsList.firstChild);
  }
}

/*объявляем кнопки проектов*/
const projectsButton = document.querySelector('.projects');
const presentationButton = document.querySelector('.presentation');
const styleButton = document.querySelector('.style');
const webButton = document.querySelector('.web');
const polygraphyButton = document.querySelector('.polygraphy');
const graphicsButton = document.querySelector('.graphics');

/*фильтр карточки по типу*/
function projectsCheck(itemType, buttonType) {
  deleteCards();
  const activeLink = document.querySelector('.navigation__link_active');
  activeLink.classList.remove('navigation__link_active');
  buttonType.classList.add('navigation__link_active');
  projects.forEach(function(element) {
    const check = element.type.some(i => i === itemType);
    if (check === true) {
      addCard(elementsList, createCard(element.title, element.link, element.previewImage));
    }
  })
  menuToggle();
}

/*слушатели кликов по проектам*/
projectsButton.addEventListener('click', () => projectsCheck('project', projectsButton));
presentationButton.addEventListener('click', () => projectsCheck('presentation', presentationButton));
styleButton.addEventListener('click', () => projectsCheck('style', styleButton));
webButton.addEventListener('click', () => projectsCheck('web', webButton));
polygraphyButton.addEventListener('click', () => projectsCheck('polygraphy', polygraphyButton));
graphicsButton.addEventListener('click', () => projectsCheck('graphics', graphicsButton));




