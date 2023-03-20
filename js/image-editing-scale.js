import {
  MIN_SCALE_VALUE,
  MAX_SCALE_VALUE,
  DEFAULT_SCALE_VALUE,
  SCALE_STEP,
} from './constants.js';

const imageUploadPreviewContainer = document.querySelector('.img-upload__preview-container');
const scaleControlSmaller = imageUploadPreviewContainer.querySelector('.scale__control--smaller');
const scaleControlBigger = imageUploadPreviewContainer.querySelector('.scale__control--bigger');
const scaleControlValue = imageUploadPreviewContainer.querySelector('.scale__control--value');
const imageUploadPreview = imageUploadPreviewContainer.querySelector('.img-upload__preview img');


const addListenersScaleValue = () => {
  scaleControlSmaller.addEventListener('click', zoomOutClickHandler);
  scaleControlBigger.addEventListener('click', zoomInClickHandler);
};

const removeListenersScaleValue = () => {
  scaleControlSmaller.removeEventListener('click', zoomOutClickHandler);
  scaleControlBigger.removeEventListener('click', zoomInClickHandler);
};

function setScaleOnImage() {
  const currentScaleValue = parseFloat(scaleControlValue.value);
  imageUploadPreview.style.transform = `scale(${currentScaleValue / 100})`;
}

function zoomOutClickHandler() {
  const currentScaleValue = parseFloat(scaleControlValue.value);

  if (currentScaleValue === MIN_SCALE_VALUE) {
    return false;
  }

  scaleControlValue.value = `${currentScaleValue - SCALE_STEP}%`;

  setScaleOnImage();
}

function zoomInClickHandler() {
  const currentScaleValue = parseFloat(scaleControlValue.value);

  if (currentScaleValue === MAX_SCALE_VALUE) {
    return false;
  }

  scaleControlValue.value = `${currentScaleValue + SCALE_STEP}%`;

  setScaleOnImage();
}

function resetScaleValue() {
  imageUploadPreview.style.transform = `scale(${DEFAULT_SCALE_VALUE / 100})`;
}

export {
  resetScaleValue,
  addListenersScaleValue,
  removeListenersScaleValue,
  scaleControlValue,
  imageUploadPreview,
};
