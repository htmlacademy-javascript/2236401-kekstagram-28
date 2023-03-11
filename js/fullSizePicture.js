
import {isEscapeKey} from './util.js';

const bigPictureContainer = document.querySelector('.big-picture');
const pictureImage = bigPictureContainer.querySelector('.big-picture__img img');
const pictureCaption = bigPictureContainer.querySelector('.social__caption');
const pictureLikesCount = bigPictureContainer.querySelector('.likes-count');
const pictureCloseButton = bigPictureContainer.querySelector('.big-picture__cancel');

const commentsContainer = bigPictureContainer.querySelector('.social__comment-count');
const commentsCount = bigPictureContainer.querySelector('.comments-count');
const commentsList = bigPictureContainer.querySelector('.social__comments');
const commentItem = bigPictureContainer.querySelector('.social__comment');
const commentsLoader = bigPictureContainer.querySelector('.comments-loader');

let commentsSet = [];

const onCloseButtonClick = () => {
  closeBigPicture();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeBigPicture();
  }
};

const createListeners = () => {
  pictureCloseButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

const removeListeners = () => {
  pictureCloseButton.removeEventListener('click', onCloseButtonClick);
  document.removeEventListener('keydown', onDocumentKeydown);
};

const createComment = (data) => {
  const newComment = commentItem.cloneNode(true);
  newComment.querySelector('.social__picture').src = data.avatar;
  newComment.querySelector('.social__picture').alt = data.name;
  newComment.querySelector('.social__text').textContent = data.message;

  return newComment;
};

function userComments () {
  commentsSet.slice().forEach((item) => commentsList.append(createComment(item)));
}

const fillBigPicture = (data) => {
  pictureImage.src = data.url;
  pictureLikesCount.textContent = data.likes;
  commentsCount.textContent = data.comments.length;
  pictureCaption.textContent = data.description;
};

function openBigPicture (data) {
  bigPictureContainer.classList.remove('hidden');
  commentsContainer.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  pictureCloseButton.focus();
  commentsList.innerHTML = '';
  commentsSet.push(...data.comments.slice());

  document.body.classList.add('modal-open');

  fillBigPicture(data);
  userComments();
  createListeners();
}

function closeBigPicture () {
  bigPictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.querySelector('.current-fullSize').focus();
  document.querySelector('.current-fullSize').classList.remove('current-fullSize');
  commentsSet = [];
  removeListeners();
}

export {openBigPicture};
