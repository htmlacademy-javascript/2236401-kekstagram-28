import {openBigPicture} from './full-size-picture.js';

const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureListFragment = document.createDocumentFragment();

const generatePicture = (photo) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = photo.url;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  pictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    openBigPicture(photo);
    pictureElement.classList.add('current-full-size');
  });
  return pictureElement;
};

const randomPicture = (pictures) => {
  pictures.forEach((photo) => pictureListFragment.append(generatePicture(photo)));
  pictureContainer.append(pictureListFragment);
};

export {randomPicture};
