const pictureContainer = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const generatePicture = (photo) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = photo.url;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  return pictureElement;
};

const randomPicture = (pictures) => {
  pictures.forEach((photo) => pictureContainer.append(generatePicture(photo)));
};

export {randomPicture};
