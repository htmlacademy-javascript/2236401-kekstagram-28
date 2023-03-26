import {isEscapeKey} from './util.js';
import {validateUploadImageForm} from './validation-form.js';
import {
  resetScaleValue,
  addListenersScaleValue,
  removeListenersScaleValue,
  scaleControlValue,
} from './image-editing-scale.js';
import {
  DEFAULT_SCALE_VALUE,
  SubmitButtonText,
  FILE_TYPES,
} from './constants.js';
import {
  createSlider,
  setupSlider,
  destroySlider,
  changeEffectInputClickHandler,
} from './image-editing-effects.js';
import {
  sendData,
  showSuccessMessageUpload,
  showErrorMessageUpload,
} from './api.js';

const imageUploadForm = document.querySelector('.img-upload__form');
const uploadButton = imageUploadForm.querySelector('#upload-file');
const uploadOverlay = imageUploadForm.querySelector('.img-upload__overlay');
const closeButton = imageUploadForm.querySelector('#upload-cancel');

const imageUploadPreview = imageUploadForm.querySelector('.img-upload__preview img');
const previewEffectsImages = imageUploadForm.querySelectorAll('.effects__preview');
const effectsList = imageUploadForm.querySelector('.effects__list');
const checkedEffectInput = imageUploadForm.querySelector('.effects__radio[checked]');

const body = document.querySelector('body');

const submitButton = document.querySelector('.img-upload__submit');


const checkSubmitButton = (disabled = false) => {
  submitButton.disabled = disabled;
  submitButton.textContent = disabled ? SubmitButtonText.SENDING : SubmitButtonText.IDLE;
};

const setUserFormSubmit = () => {
  imageUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = validateUploadImageForm();
    if (isValid) {
      checkSubmitButton(true);
      sendData(new FormData(evt.target))
        .then(() => {
          showSuccessMessageUpload();
          closeUploadModalClickHandler();
        })
        .catch(() => {
          showErrorMessageUpload();
        })
        .finally(checkSubmitButton);
    }
  });
};

const uploadImageFormSubmitHandler = (evt) => {
  if (!validateUploadImageForm()) {
    evt.preventDefault();
  }
};

const createListeners = () => {
  imageUploadForm.addEventListener('submit', uploadImageFormSubmitHandler);
  closeButton.addEventListener('click', closeUploadModalClickHandler);
  document.addEventListener('keydown', escCloseKeyHandler);
  effectsList.addEventListener('change', changeEffectInputClickHandler);
};

const removeListeners = () => {
  imageUploadForm.removeEventListener('submit', uploadImageFormSubmitHandler);
  closeButton.removeEventListener('click', closeUploadModalClickHandler);
  document.removeEventListener('keydown', escCloseKeyHandler);
  effectsList.removeEventListener('change', changeEffectInputClickHandler);
};

function escCloseKeyHandler(evt) {
  const inputFocus = evt.target.classList.contains('text__hashtags') || evt.target.classList.contains('text__description');
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
  const fileName = fileImage.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    imageUploadPreview.src = URL.createObjectURL(fileImage);
    previewEffectsImages.forEach((image) => {
      image.style.backgroundImage = `url(${URL.createObjectURL(fileImage)})`;
    });
  } else {
    imageUploadPreview.alt = 'Неверный формат изображения';
    imageUploadPreview.style.backgroundColor = 'grey';
    previewEffectsImages.forEach((image) => {
      image.style.backgroundImage = 'none';
    });
  }
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

export {setUserFormSubmit, closeUploadModalClickHandler, escCloseKeyHandler};
