export class Card{
  constructor(data) {
    this._title = data.title;
    this._link = data.link;
    this._image = data.previewImage;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector('#item-template')
    .content
    .firstElementChild
    .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.content__link').href = this._link;
    this._element.querySelector('.content__link').textContent = this._title;
    this._element.querySelector('.content__image').src = this._image;
    return this._element;
  }
}