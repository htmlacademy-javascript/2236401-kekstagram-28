// Функция для проверки длины строки.

const checkLength = (string, number) => string.length <= number;


// Функция для проверки, является ли строка палиндромом.

const checkPolydrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string.at(i);
  }

  return string === newString;
};


// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:

const returnNumber = (string) => {
  string = string.toString();
  if (isNaN(parseFloat(string))) {
    return NaN;
  }
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    if (!isNaN(parseFloat(string.at(i)))) {
      newString += parseFloat(string.at(i));
    }
  }
  return newString;
};


// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.

const getString = (string, minLength, additionalСharacter) => {
  const actualString = minLength - string.length;
  return actualString <= 0 ? string :
    additionalСharacter.slice(0, actualString % additionalСharacter.length)
  + additionalСharacter.repeat(actualString / additionalСharacter.length)
  + string;
};

// Функции для поиска случайного числа из диапазона

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
const getRandomNumber = (min, max) => getRandomInteger(min, max);


export {
  checkLength,
  checkPolydrome,
  returnNumber,
  getString,
  getRandomInteger,
  createRandomIdFromRangeGenerator,
  getRandomArrayElement,
  getRandomNumber,
};
