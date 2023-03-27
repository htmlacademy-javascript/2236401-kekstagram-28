import {imageUploadPreview} from './image-editing-scale.js';
import {
  EFFECT_DEFAULT_VALUE,
  EffectSetups,
} from './constants.js';

const effectRangeContainer = document.querySelector('.img-upload__effect-level');
const effectValue = effectRangeContainer.querySelector('.effect-level__value');
const effectSlider = effectRangeContainer.querySelector('.effect-level__slider');


const createSlider = () => {
  noUiSlider.create(effectSlider, {
    range: {
      min: 0,
      max: 100,
    },
    start: EFFECT_DEFAULT_VALUE,
    connect: 'lower',
  });
};

const updateSlider = (effect) => {
  effectSlider.noUiSlider.updateOptions({
    range: {
      min: effect.range.min,
      max: effect.range.max,
    },
    step: effect.step,
    start: EFFECT_DEFAULT_VALUE,
    connect: 'lower',
  });
};

const setupSlider = (effect) => {
  if (effect === 'none') {
    imageUploadPreview.style.filter = null;
    effectSlider.noUiSlider.off();
    effectRangeContainer.classList.add('hidden');
  } else {
    updateSlider(EffectSetups[effect.toUpperCase()]);
    effectSlider.noUiSlider.on('update', () => {
      effectValue.value = effectSlider.noUiSlider.get();
      imageUploadPreview.style.filter = `${EffectSetups[effect.toUpperCase()].filter}(${effectValue.value + EffectSetups[effect.toUpperCase()].unit})`;
    });
    effectRangeContainer.classList.remove('hidden');
  }
};

const changeEffectInputClickHandler = (evt) => {
  if (evt.target.closest('.effects__radio')) {
    imageUploadPreview.className = '';
    imageUploadPreview.classList.add(`effects__preview--${evt.target.value}`);

    setupSlider(evt.target.value);
  }
};

const destroySlider = () => effectSlider.noUiSlider.destroy();

export {
  createSlider,
  setupSlider,
  changeEffectInputClickHandler,
  destroySlider,
};
