import {isEscapeKey} from './util.js';
import {validateUploadImageForm} from './validationForm.js';

const imageUploadForm = document.querySelector('.img-upload__form');
const uploadButton = imageUploadForm.querySelector('#upload-file');
const uploadOverlay = imageUploadForm.querySelector('.img-upload__overlay');
const closeButton = imageUploadForm.querySelector('#upload-cancel');

const imageUploadPreview = imageUploadForm.querySelector('.img-upload__preview img');
const previewEffectsImages = imageUploadForm.querySelectorAll('.effects__preview');

const body = document.querySelector('body');


const onUploadImageFormSubmit = (evt) => {
  if (!validateUploadImageForm()) {
    evt.preventDefault();
  }
};

const createListeners = () => {
  imageUploadForm.addEventListener('submit', onUploadImageFormSubmit);
  closeButton.addEventListener('click', uploadModalCloseClickHandler);
  document.addEventListener('keydown', escCloseKeyHandler);
};

const removeListeners = () => {
  imageUploadForm.removeEventListener('submit', onUploadImageFormSubmit);
  closeButton.removeEventListener('click', uploadModalCloseClickHandler);
  document.removeEventListener('keydown', escCloseKeyHandler);
};

function escCloseKeyHandler(evt) {
  const inputFocus = evt.target.matches('input:focus') || evt.target.matches('textarea:focus');

  if (inputFocus) {
    return false;
  }

  if (isEscapeKey(evt)) {
    evt.preventDefault();

    uploadModalCloseClickHandler();
  }
}

function handleFilesModalOpen() {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  const fileImage = uploadButton.files[0];
  imageUploadPreview.src = URL.createObjectURL(fileImage);
  previewEffectsImages.forEach((image) => {
    image.style.backgroundImage = `url(${URL.createObjectURL(fileImage)})`;
  });

  createListeners();
}

uploadButton.addEventListener('change', () => {
  handleFilesModalOpen();

});

function uploadModalCloseClickHandler() {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  imageUploadForm.reset();

  removeListeners();
}
