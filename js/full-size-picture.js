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


const createComment = ({avatar, name, message}) => {
  const newComment = commentItem.cloneNode(true);
  newComment.querySelector('.social__picture').src = avatar;
  newComment.querySelector('.social__picture').alt = name;
  newComment.querySelector('.social__text').textContent = message;
  numberOfComments++;

  return newComment;
};


const closeBigPicture = () => {
  bigPictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.querySelector('.current-full-size').focus();
  document.querySelector('.current-full-size').classList.remove('current-full-size');

  commentsSet.length = 0;
  numberOfComments = 0;
  commentsLoader.classList.remove('hidden');
  removeListeners();
};

const showUserComments = () => {
  const commentsFragment = document.createDocumentFragment();
  commentsSet.splice(0, COMMENTS_STEP).forEach((item) => commentsFragment.append(createComment(item)));
  commentsList.append(commentsFragment);
  commentsContainer.innerHTML = `${numberOfComments} из <span class="comments-count"> ${commentsCount.textContent} </span> комментариев`;
  if (!Number(commentsCount.textContent)) {
    commentsContainer.innerHTML = 'Ваш комментарий будет первым';
  }
};

const closeButtonClickHandler = () => {
  closeBigPicture();
};

const backBigPictureClickHandler = (evt) => {
  if (evt.target === bigPictureContainer) {
    closeBigPicture();
  }
};

const escDocumentKeydownHandler = (evt) => {
  if (isEscapeKey(evt)) {
    closeBigPicture();
  }
};

const loadsCommentsClickHandler = () => {
  showUserComments();

  if (numberOfComments === Number(commentsCount.textContent)) {
    commentsLoader.classList.add('hidden');
  }
};

const createListeners = () => {
  pictureCloseButton.addEventListener('click', closeButtonClickHandler);
  document.addEventListener('keydown', escDocumentKeydownHandler);
  commentsLoader.addEventListener('click', loadsCommentsClickHandler);
  bigPictureContainer.addEventListener('click', backBigPictureClickHandler);
};

function removeListeners () {
  pictureCloseButton.removeEventListener('click', closeButtonClickHandler);
  document.removeEventListener('keydown', escDocumentKeydownHandler);
  commentsLoader.removeEventListener('click', loadsCommentsClickHandler);
  bigPictureContainer.removeEventListener('click', backBigPictureClickHandler);
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

const openBigPicture = (data) => {
  if (data && typeof data === 'object') {
    pictureCloseButton.focus();
    commentsList.innerHTML = '';
    commentsSet.length = 0;
    numberOfComments = 0;
    if (data.comments) {
      commentsSet.push(...data.comments);
    }
    document.body.classList.add('modal-open');

    fillBigPicture(data);
    showUserComments();
    createListeners();
    bigPictureContainer.classList.remove('hidden');
  }
};

export {openBigPicture};
