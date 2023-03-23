import {
  HASHTAG_VALID_REGEX,
  MAX_HASHTAG_COUNT,
  MIN_HASHTAG_LENGTH,
  MAX_HASHTAG_LENGTH,
  MAX_DESCRIPTION_LENGTH,
} from './constants.js';

const imageUploadForm = document.querySelector('.img-upload__form');
const hashtagsInputText = imageUploadForm.querySelector('.text__hashtags');
const descriptionText = imageUploadForm.querySelector('.text__description');


const pristineValidateForm = new Pristine(imageUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
  errorTextClass: 'form__error',
}, false);

const validateDublicateHashtag = (value) => {
  const valueArray = value
    .replaceAll(' ','')
    .toLowerCase()
    .split('#');
  valueArray.shift();
  const uniqueHashtag = Array.from(new Set(valueArray));

  return valueArray.length === uniqueHashtag.length;
};

pristineValidateForm.addValidator(
  hashtagsInputText,
  validateDublicateHashtag,
  'Введены дублирующиеся хэштеги'
);

const validateHashtagCount = (value) => value.split(' ').length <= MAX_HASHTAG_COUNT;


pristineValidateForm.addValidator(
  hashtagsInputText,
  validateHashtagCount,
  `Максимальное число хэштегов - ${MAX_HASHTAG_COUNT}`
);

const validateHashtagText = (value) => {
  const arrHashtag = value.split(' ');
  const newArrHashtag = [];
  arrHashtag.forEach((item) => item ? newArrHashtag.push(item) : newArrHashtag);
  return value === '' ? true : !newArrHashtag.some((item) => HASHTAG_VALID_REGEX.test(item) === false);
};

pristineValidateForm.addValidator(
  hashtagsInputText,
  validateHashtagText,
  `Хэштег после октото́рпа # должен состоять из букв и чисел, не может быть меньше ${MIN_HASHTAG_LENGTH} и не должен превышать ${MAX_HASHTAG_LENGTH} символов`
);

const validateDescriptionLength = (value) => value.length <= MAX_DESCRIPTION_LENGTH;

pristineValidateForm.addValidator(
  descriptionText,
  validateDescriptionLength,
  `Описание не должно превышать ${MAX_DESCRIPTION_LENGTH} символов`
);


const validateUploadImageForm = () => pristineValidateForm.validate();

export {validateUploadImageForm};
