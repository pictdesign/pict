import { projects } from "./projects.js";
import { Card } from "./card.js";
import { CreateMenu } from "./createmenu.js";
import { Project } from "./Project.js";

/*настройки попап*/
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');
const escCode = 'Escape';
const body = document.querySelector('.page');

function openPopup() {
  popup.classList.add('popup_is-opened');
  closeButton.addEventListener('click', closePopup);
  document.addEventListener('keydown', closeByEsc);
  document.addEventListener('mousedown', closeByClick);
  body.classList.add('page_overflow_hidden');
}

function closePopup() {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeByEsc);
  document.removeEventListener('mousedown', closeByClick);
  body.classList.remove('page_overflow_hidden');
}

function closeByEsc(evt) {
  if (evt.key === escCode) {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup); 
  }
} 

function closeByClick (evt) {
    const popupOpened = document.querySelector('.popup_is-opened');
    if (evt.target === popupOpened) {
      closePopup(popupOpened); 
    }
}

function popupConditions(evt) {
  if ((window.matchMedia("(min-width: 768px)").matches) && (window.matchMedia("(max-width: 1280px)").matches)) {
    openPopup();
    const link = evt.target.getAttribute('src');
    popupImage.src = link;
  } 
}

const menu = new CreateMenu();
const menuElement = menu.generateMenu();

/*объявляем контейнер для карточек*/
const elementsList = document.querySelector('.content__list');

/*создание карточки*/
function createCard(item) {
  const card = new Card(item);
  const cardElement = card.generateCard();
  elementsList.append(cardElement);
}

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

/*настройки меню*/
const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('.header');
const content = document.querySelector('.content');
const overlay = document.querySelector('.menu-button__overlay');

function menuToggle() {
  menuButton.classList.toggle('menu-button_active');
  header.classList.toggle('header_opened');
  overlay.classList.toggle('menu-button__overlay_active');
}

function menuHide() {
  menuButton.classList.remove('menu-button_active');
  header.classList.remove('header_opened');
  overlay.classList.remove('menu-button__overlay_active');
}

function setEventListeners() {
  menuButton.addEventListener('click', menuToggle);
  overlay.addEventListener('click', menuToggle);
}

setEventListeners();

function changeButtonState(buttonType) {
  const activeLink = document.querySelector('.navigation__link_active');
  activeLink.classList.remove('navigation__link_active');
  buttonType.classList.add('navigation__link_active');
}

/*фильтр карточки по типу*/
function projectsCheck(itemType, buttonType) {
  deleteCards();
  changeButtonState(buttonType);
  projects.forEach(function(element) {
    const check = element.type.some(i => i === itemType);
    if (check === true) {
      createCard(element);
    }
  });
  menuHide();
}

/*сброс настроек меню*/
function defaultState(buttonType) {
  deleteCards();
  projects.forEach((item) => {
    createCard(item);
    changeButtonState(buttonType);
  });
}

defaultState(projectsButton);

/*слушатели кликов по проектам*/
projectsButton.addEventListener('click', () => {
  defaultState(projectsButton);
  menuToggle();
});
presentationButton.addEventListener('click', () => projectsCheck('presentation', presentationButton));
styleButton.addEventListener('click', () => projectsCheck('style', styleButton));
webButton.addEventListener('click', () => projectsCheck('web', webButton));
polygraphyButton.addEventListener('click', () => projectsCheck('polygraphy', polygraphyButton));
graphicsButton.addEventListener('click', () => projectsCheck('graphics', graphicsButton));

/*проверка ссылки в окне*/
const hashes = window.location.hash;
document.addEventListener('DOMContentLoaded', function() {
  if (hashes == '#style') {
    projectsCheck('style', styleButton);
  } else if (hashes == '#presentation') {
    projectsCheck('presentation', presentationButton);            
  } else if (hashes == '#polygraphy') {
    projectsCheck('polygraphy', polygraphyButton);
  } else if (hashes == '#web'){
    projectsCheck('web', webButton)
  } else if (hashes == '#graphics'){
    projectsCheck('graphics', graphicsButton);
  } else {
    defaultState(projectsButton);
  }
});

const pathName = window.location.pathname;

projects.forEach((item) => {
  if (item.link == pathName) {
    const project = new Project(item, popupConditions);
    const projectElement = project.generateProject();
    document.querySelector('.content').append(projectElement);
  }
});

