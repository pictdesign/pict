export class Project {
  constructor(data, openPopup) {
    this._title = data.title;
    this._image = data.projectImage;
    this._description = data.description;
    this._date = data.date;
    this._client = data.client;
    this._clientLink = data.clientLink;
    this._tags = data.tags;
    this._openPopup = openPopup;
    
  }

  _getTemplate() {
    const projectElement = document
    .querySelector('#project')
    .content
    .firstElementChild
    .cloneNode(true);
    return projectElement;
  }
   
  generateProject() {
    this._element = this._getTemplate();
    this._image.forEach((item) => {
      const imageContainer = this._element.querySelector('.project__image-container');
      const imageElement = document.createElement('img');
      imageElement.className = "project__image";
      imageElement.src = item;
      imageContainer.append(imageElement);
      imageElement.addEventListener('click', this._openPopup);
    });
    this._element.querySelector('.project__image').remove();
    this._element.querySelector('.project__title').textContent = this._title;
    this._element.querySelector('.project__description').textContent = this._description;
    this._element.querySelector('#date').textContent = this._date;
    if (this._clientLink != null) {
      this._element.querySelector('.project__link').textContent = this._client;
      this._element.querySelector('.project__link').href = this._clientLink;
    } else {
      this._element.querySelector('.project__link').textContent = this._client;
      this._element.querySelector('.project__link').href = '#';
    }
    
    this._element.querySelector('#tags').textContent = this._tags;
    return this._element;
  }
}

