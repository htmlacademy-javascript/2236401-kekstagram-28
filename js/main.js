const NAMES = [
  'Nick',
  'Fernando',
  'Jameson',
  'Jack',
  'Alice',
  'Sara',
  'Emilie',
  'Harry',
  'Juliette',
  'Jim',
  'Clarence',
  'Daisy',
  'Tom',
  'John',
  'Matiew',
  'Alisha',
  'Rihanna',
  'Lusie',
  'Amanda',
  'Andrew',
  'Fendy',
  'Orlando',
  'Kelly',
  'Rosalie',
  'Roberto',
  'Polly'
];

const DESCRIPTIONS = [
  'Фотография не является отражением реальности. Она есть реальность этого отражения.',
  'Ведь природа, обращенная к камере — это не та природа, что обращена к глазу; различие, прежде всего, в том, что место пространства, освоенного человеческим сознанием, занимает пространство, освоенное бессознательным.',
  'Будьте героями своих собственных историй!',
  'Реальность становится всё больше похожа на фотографии.',
  'Позировать на камеру с сексуальным взглядом — это то же, что играть в шахматы самому с собой.',
  'В жизни я лучше, чем в кекстаграме!',
  'В простоте есть удивительная красота.',
  'В наше время всё существует ради того, чтобы окончиться фотографией.Фотография мумифицирует время.',
  'Ваша скорость не имеет значения, пока вы продолжаете двигаться вперед.',
  'В определенных случаях фотография способна к фантазии и вымыслу. Часто она показывает то, чего не было, но могло бы случиться. Очень часто то, чего никто не увидел и не заметил. И уж, безусловно, то, о чем сами персонажи и не подозревали.',
  'Хм, мы все выглядим немного старше, я думаю. Странно — запечатлеть, типа, один момент и принимать его за, вроде как, официальную версию нас.',
  'Я фотографирую. Себя, мир, всё. Возможно, это печально звучит, но мне нравится.',
  'Фотографии всегда лучше всего удавалось передавать действительность. Люди верят фотографиям. У каждого в паспорте не живописный портрет, а фотография. Как говорил о силе фотографии Бернард Шоу: «Я бы променял все картины с изображением Христа на один его снимок».',
  'Краски этого мира — есть прямое отражение твоих эмоций. Ведь каждый замечает вокруг себя лишь только то, что есть внутри него самого.',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Отличный кадр.',
  'Как замечательно, что вы обновляете фотографии в своём аккаунте!',
  'На фотографиях нельзя разглядеть добродетели, но глупость и пороки они выдают хорошо.',
  'Образы, сохраненные в нашей памяти, те, что мы носим в голове, могут быть куда более яркими и живыми, чем все то, что способна запечатлеть фотокамера.',
  'Мир просто не укладывается в формат 35-мм камеры.',
  'Люди говорят: «Не оглядывайтесь в прошлое». Тогда зачем ты делаешь фотографии?',
  'Хорошие фотографы, как воспитанные дети, — их видно, но не слышно.',
];

const SIMILAR_PHOTOS_COUNT = 25;

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

const generatePhotoId = createRandomIdFromRangeGenerator(1, 25);
const generatePhotoUrl = createRandomIdFromRangeGenerator(1, 25);
const generateUserId = createRandomIdFromRangeGenerator(1, 2000);
const generateLikesCount = getRandomNumber(15, 200);
const generateUserAvatar = getRandomNumber(1, 6);

const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: generateLikesCount,
  comments: {
    id: generateUserId(),
    avatar: `img/avatar-${generateUserAvatar}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  },
});

const similarPhotos = Array.from({length: SIMILAR_PHOTOS_COUNT}, createPhoto);

// eslint-disable-next-line no-console
console.log(similarPhotos);
