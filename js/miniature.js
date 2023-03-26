import {openBigPicture} from './full-size-picture.js';

const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureListFragment = document.createDocumentFragment();
const imageFiltersContainer = document.querySelector('.img-filters');

const generatePicture = ({url, comments, likes, id}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.dataset.idPicture = id;
  return pictureElement;
};

const renderPicture = (pictures) => {
  pictures.forEach((photo) => pictureListFragment.append(generatePicture(photo)));
  pictureContainer.append(pictureListFragment);
  pictureContainer.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('picture__img')) {
      evt.preventDefault();
      evt.target.closest('a').classList.add('current-full-size');
      const idPicture = evt.target.closest('a').dataset.idPicture;
      const indexPicture = pictures.findIndex((photo) => photo.id === parseInt(idPicture, 10));
      openBigPicture(pictures[indexPicture]);
    }
  });
  imageFiltersContainer.classList.remove('img-filters--inactive');
};

export {renderPicture};
