// Функция для проверки длины строки.

const checkLength = (string, number) => string.length <= number;

checkLength('everything is perfect!', 23);

// Функция для проверки, является ли строка палиндромом.

const checkPolydrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string.at(i);
  }

  return string === newString;
};

checkPolydrome('Лёша на полке клопа нашёл ');


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

returnNumber('33 коровы и 2 кота');


// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.

const getString = (string, minLength, additionalСharacter) => {
  const actualString = minLength - string.length;
  return actualString <= 0 ? string :
    additionalСharacter.slice(0, actualString % additionalСharacter.length)
  + additionalСharacter.repeat(actualString / additionalСharacter.length)
  + string;
};

getString('shine', 9, 'sun');
