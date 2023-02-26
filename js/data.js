import {
  NAMES,
  DESCRIPTIONS,
  MESSAGES,
  PHOTO_ID_MIN,
  PHOTO_ID_MAX,
  PHOTO_URL_MIN,
  PHOTO_URL_MAX,
  PHOTO_LIKES_MIN,
  PHOTO_LIKES_MAX,
  COMMENT_ID_MIN,
  COMMENT_ID_MAX,
  AVATAR_URL_MIN,
  AVATAR_URL_MAX,
  COMMENT_LIST_MIN,
  COMMENT_LIST_MAX,
} from './constants.js';

import {
  createRandomIdFromRangeGenerator,
  getRandomNumber,
  getRandomArrayElement,
} from './util.js';

const generatePhotoId = createRandomIdFromRangeGenerator(PHOTO_ID_MIN, PHOTO_ID_MAX);
const generatePhotoUrl = createRandomIdFromRangeGenerator(PHOTO_URL_MIN, PHOTO_URL_MAX);
const generateCommentId = createRandomIdFromRangeGenerator(COMMENT_ID_MIN, COMMENT_ID_MAX);

const createComment = (count) => {
  const comments = [];
  for (let i = 0; i < count; i++) {
    comments.push({
      id: generateCommentId(),
      avatar: `img/avatar-${getRandomNumber(AVATAR_URL_MIN, AVATAR_URL_MAX)}.svg`,
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES),
    });
  }
  return comments;
};

const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(PHOTO_LIKES_MIN, PHOTO_LIKES_MAX),
  comments: createComment(getRandomNumber(COMMENT_LIST_MIN, COMMENT_LIST_MAX)),
});

const similarPhotos = (count) => Array.from({length: count}, createPhoto);

export {similarPhotos};
