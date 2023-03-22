import {isEscapeKey} from './util.js';
import {COMMENTS_STEP} from './constants.js';

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

const commentsSet = [];
let numberOfComments = 0;

const onCloseButtonClick = () => {
  closeBigPicture();
};

const onBackBigPictureClick = (evt) => {
  if (evt.target === bigPictureContainer) {
    closeBigPicture();
  }
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeBigPicture();
  }
};

const onCommentsLoaderClick = () => {
  userComments();

  if (numberOfComments === Number(commentsCount.textContent)) {
    commentsLoader.classList.add('hidden');
  }
};

const createListeners = () => {
  pictureCloseButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
  commentsLoader.addEventListener('click', onCommentsLoaderClick);
  bigPictureContainer.addEventListener('click', onBackBigPictureClick);
};

const removeListeners = () => {
  pictureCloseButton.removeEventListener('click', onCloseButtonClick);
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
  bigPictureContainer.removeEventListener('click', onBackBigPictureClick);
};

const createComment = ({avatar, name, message}) => {
  const newComment = commentItem.cloneNode(true);
  newComment.querySelector('.social__picture').src = avatar;
  newComment.querySelector('.social__picture').alt = name;
  newComment.querySelector('.social__text').textContent = message;
  numberOfComments++;

  return newComment;
};

function userComments () {
  const commentsFragment = document.createDocumentFragment();
  commentsSet.splice(0, COMMENTS_STEP).forEach((item) => commentsFragment.append(createComment(item)));
  commentsList.append(commentsFragment);
  commentsContainer.innerHTML = `${numberOfComments} из <span class="comments-count"> ${commentsCount.textContent} </span> комментариев`;
  if (!Number(commentsCount.textContent)) {
    commentsContainer.innerHTML = 'Ваш комментарий будет первым';
  }
}

const fillBigPicture = ({url, likes, comments, description}) => {
  pictureImage.src = url;
  pictureLikesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  pictureCaption.textContent = description;
  if (Number(commentsCount.textContent) <= COMMENTS_STEP) {
    commentsLoader.classList.add('hidden');
  }
};

function openBigPicture (data) {
  pictureCloseButton.focus();
  commentsList.innerHTML = '';
  commentsSet.push(...data.comments.slice());
  document.body.classList.add('modal-open');

  fillBigPicture(data);
  userComments();
  createListeners();
  bigPictureContainer.classList.remove('hidden');
}

function closeBigPicture () {
  bigPictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.querySelector('.current-full-size').focus();
  document.querySelector('.current-full-size').classList.remove('current-full-size');

  commentsSet.length = 0;
  numberOfComments = 0;
  commentsLoader.classList.remove('hidden');
  removeListeners();
}

export {openBigPicture};
