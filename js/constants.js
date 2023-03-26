const SIMILAR_PHOTOS_COUNT = 25;
const PHOTO_ID_MIN = 1;
const PHOTO_ID_MAX = 25;
const PHOTO_URL_MIN = 1;
const PHOTO_URL_MAX = 25;
const PHOTO_LIKES_MIN = 15;
const PHOTO_LIKES_MAX = 200;
const COMMENT_ID_MIN = 1;
const COMMENT_ID_MAX = 2000;
const AVATAR_URL_MIN = 1;
const AVATAR_URL_MAX = 6;
const COMMENT_LIST_MIN = 0;
const COMMENT_LIST_MAX = 20;

const COMMENTS_STEP = 5;

const HASHTAG_VALID_REGEX = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
const MAX_HASHTAG_COUNT = 5;
const MIN_HASHTAG_LENGTH = 2;
const MAX_HASHTAG_LENGTH = 20;
const MAX_DESCRIPTION_LENGTH = 140;

const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const DEFAULT_SCALE_VALUE = 100;
const SCALE_STEP = 25;

const EFFECT_DEFAULT_VALUE = 100;

const EffectSetups = {
  CHROME: {
    range: {
      min: 0,
      max: 1
    },
    step: 0.1,
    filter: 'grayscale',
    unit: ''
  },
  SEPIA: {
    range: {
      min: 0,
      max: 1
    },
    step: 0.1,
    filter: 'sepia',
    unit: ''
  },
  MARVIN: {
    range: {
      min: 0,
      max: 100
    },
    step: 1,
    filter: 'invert',
    unit: '%'
  },
  PHOBOS: {
    range: {
      min: 0,
      max: 3
    },
    step: 0.1,
    filter: 'blur',
    unit: 'px'
  },
  HEAT: {
    range: {
      min: 1,
      max: 3
    },
    step: 0.1,
    filter: 'brightness',
    unit: ''
  }
};


const BASE_URL = 'https://28.javascript.pages.academy/kekstagram';

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Сохраняю...'
};

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const RANDOM_IMAGE_COUNT = 10;
const TIMEOUT_DELAY = 500;

const FILE_TYPES = ['jpg', 'jpeg', 'png'];


export {
  SIMILAR_PHOTOS_COUNT,
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
  COMMENTS_STEP,
  HASHTAG_VALID_REGEX,
  MAX_HASHTAG_COUNT,
  MIN_HASHTAG_LENGTH,
  MAX_HASHTAG_LENGTH,
  MAX_DESCRIPTION_LENGTH,
  MIN_SCALE_VALUE,
  MAX_SCALE_VALUE,
  DEFAULT_SCALE_VALUE,
  SCALE_STEP,
  EFFECT_DEFAULT_VALUE,
  EffectSetups,
  BASE_URL,
  Route,
  Method,
  ErrorText,
  SubmitButtonText,
  RANDOM_IMAGE_COUNT,
  TIMEOUT_DELAY,
  FILE_TYPES,
};
