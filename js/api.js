import {isEscapeKey} from './util.js';

const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');

const showMessage = (message, button) => {
  document.body.append(message);

  const closeMessage = () => {
    message.remove();
    window.removeEventListener('keydown', onMessageEscDown);
  };

  button.addEventListener('click', () => {
    closeMessage();
  });

  message.addEventListener('click', (evt) => {
    if (evt.target === message) {
      closeMessage();
    }
  });

  function onMessageEscDown(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeMessage();
    }
  }
  window.addEventListener('keydown', onMessageEscDown);
};

const showSuccessMessageUpload = () => {
  const message = successMessage.cloneNode(true);
  const button = message.querySelector('.success__button');
  showMessage(message, button);
};

const showErrorMessageUpload = () => {
  const message = errorMessage.cloneNode(true);
  const button = message.querySelector('.error__button');

  showMessage(message, button);
};


const BASE_URL = 'https://28.javascript.pages.academy/kekstagram';

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

const load = (route, errorText, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, {method, 'Content-Type': 'multipart/form-data', body})
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getData = () => load(Route.GET_DATA, ErrorText.GET_DATA);

const sendData = (body) => load(Route.SEND_DATA, ErrorText.SEND_DATA, Method.POST, body);

export {
  getData,
  sendData,
  showSuccessMessageUpload,
  showErrorMessageUpload,
};
