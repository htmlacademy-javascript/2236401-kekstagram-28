import {similarPhotos} from './data.js';


const pictureContainer = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictures = similarPhotos();

// const pictureListFragment = document.createDocumentFragment();

const generatePicture = (photo) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = photo.url;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  pictureElement.querySelector('.picture-likes').textContent = photo.likes;
  // pictureListFragment.append(pictureElement);
  return pictureElement;
};

const randomPicture = () => {
  pictures.forEach((photo) => pictureContainer.append(generatePicture(photo)));
};

export {randomPicture};
