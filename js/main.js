import {randomPicture} from './miniature.js';
import {similarPhotos} from './data.js';
import {SIMILAR_PHOTOS_COUNT} from './constants.js';

const pictures = similarPhotos(SIMILAR_PHOTOS_COUNT);
randomPicture(pictures);
