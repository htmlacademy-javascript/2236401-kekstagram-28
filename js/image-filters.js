import {
  RANDOM_IMAGE_COUNT,
  TIMEOUT_DELAY,
} from './constants.js';
import {
  debounce,
  sortByComments,
  shuffle,
} from './util.js';
import {randomPicture} from './miniature.js';

const imageFiltersForm = document.querySelector('.img-filters__form');
const imageFilterButtonDefault = imageFiltersForm.querySelector('#filter-default');
const imageFilterButtonRandom = imageFiltersForm.querySelector('#filter-random');
const imageFilterButtonDiscussed = imageFiltersForm.querySelector('#filter-discussed');

let currentFilter = imageFilterButtonDefault;

const getFilteredImages = (photos) => {
  switch (currentFilter) {
    case imageFilterButtonDefault:
      return photos;
    case imageFilterButtonRandom:
      return shuffle(photos.slice()).slice(0, RANDOM_IMAGE_COUNT);
    case imageFilterButtonDiscussed:
      return photos.slice().sort(sortByComments);

    default: return photos;
  }
};

const onFilterClick = (evt, photos) => {
  const images = document.querySelectorAll('.picture');
  currentFilter.classList.remove('img-filters__button--active');
  currentFilter = evt.target;
  currentFilter.classList.add('img-filters__button--active');
  images.forEach((image) => {
    image.remove();
  });
  randomPicture(getFilteredImages(photos));
};

const changeFilterEvent = (photos) => {
  imageFiltersForm.addEventListener('click', debounce((evt) => {
    onFilterClick(evt, photos);
  }, TIMEOUT_DELAY));
};

export {changeFilterEvent};
