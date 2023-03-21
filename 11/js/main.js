import {randomPicture} from './miniature.js';
import {SIMILAR_PHOTOS_COUNT} from './constants.js';
import {showAlert} from './util.js';
import {getData} from './api.js';
import {setUserFormSubmit, closeUploadModalClickHandler} from './modal-editing-form.js';


getData()
  .then((photos) => {
    randomPicture(photos.slice(0, SIMILAR_PHOTOS_COUNT));
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

setUserFormSubmit(closeUploadModalClickHandler);