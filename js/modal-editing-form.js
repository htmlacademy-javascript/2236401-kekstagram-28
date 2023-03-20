import {isEscapeKey} from './util.js';
import {validateUploadImageForm} from './validation-form.js';
import {
  resetScaleValue,
  addListenersScaleValue,
  removeListenersScaleValue,
  scaleControlValue,
} from './image-editing-scale.js';
import {DEFAULT_SCALE_VALUE} from './constants.js';
import {
  createSlider,
  setupSlider,
  destroySlider,
  changeEffectInputClick,
} from './image-editing-effects.js';

const imageUploadForm = document.querySelector('.img-upload__form');
const uploadButton = imageUploadForm.querySelector('#upload-file');
const uploadOverlay = imageUploadForm.querySelector('.img-upload__overlay');
const closeButton = imageUploadForm.querySelector('#upload-cancel');

const imageUploadPreview = imageUploadForm.querySelector('.img-upload__preview img');
const previewEffectsImages = imageUploadForm.querySelectorAll('.effects__preview');
const effectsList = imageUploadForm.querySelector('.effects__list');
const checkedEffectInput = imageUploadForm.querySelector('.effects__radio[checked]');

const body = document.querySelector('body');

const onUploadImageFormSubmit = (evt) => {
  if (!validateUploadImageForm()) {
    evt.preventDefault();
  }
};

const createListeners = () => {
  imageUploadForm.addEventListener('submit', onUploadImageFormSubmit);
  closeButton.addEventListener('click', closeUploadModalClickHandler);
  document.addEventListener('keydown', escCloseKeyHandler);
  effectsList.addEventListener('change', changeEffectInputClick);
};

const removeListeners = () => {
  imageUploadForm.removeEventListener('submit', onUploadImageFormSubmit);
  closeButton.removeEventListener('click', closeUploadModalClickHandler);
  document.removeEventListener('keydown', escCloseKeyHandler);
  effectsList.removeEventListener('change', changeEffectInputClick);
};

function escCloseKeyHandler(evt) {
  const inputFocus = evt.target.matches('input:focus') || evt.target.matches('textarea:focus');

  if (inputFocus) {
    return false;
  }

  if (isEscapeKey(evt)) {
    evt.preventDefault();

    closeUploadModalClickHandler();
  }
}

function openUploadModalClickHandler() {
  imageUploadPreview.src = '';
  const fileImage = uploadButton.files[0];
  imageUploadPreview.src = URL.createObjectURL(fileImage);
  previewEffectsImages.forEach((image) => {
    image.style.backgroundImage = `url(${URL.createObjectURL(fileImage)})`;
  });
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  scaleControlValue.value = `${DEFAULT_SCALE_VALUE}%`;

  createSlider();
  setupSlider(checkedEffectInput.value);
  createListeners();
  addListenersScaleValue();
}

uploadButton.addEventListener('change', () => {
  openUploadModalClickHandler();

});

function closeUploadModalClickHandler() {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  imageUploadForm.reset();
  imageUploadPreview.src = '';
  imageUploadPreview.style = null;
  imageUploadPreview.className = 'effects__preview--none';

  destroySlider();
  removeListeners();
  removeListenersScaleValue();
  resetScaleValue();
}
