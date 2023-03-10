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
const PHOTO_ID_MIN = 1;
const PHOTO_ID_MAX = 25;
const PHOTO_URL_MIN = 1;
const PHOTO_URL_MAX = 25;
const PHOTO_LIKES_MIN = 15;
const PHOTO_LIKES_MAX = 200;
const COMMENT_ID_MIN = 1;
const COMMENT_ID_MAX = 2000;
const AVATAR_URL_MIN = 1;
const AVATAR_URL_MAX = 6;
const COMMENT_LIST_MIN = 0;
const COMMENT_LIST_MAX = 20;

const COMMENTS_STEP = 5;

export {
  NAMES,
  DESCRIPTIONS,
  MESSAGES,
  SIMILAR_PHOTOS_COUNT,
  PHOTO_ID_MIN,
  PHOTO_ID_MAX,
  PHOTO_URL_MIN,
  PHOTO_URL_MAX,
  PHOTO_LIKES_MIN,
  PHOTO_LIKES_MAX,
  COMMENT_ID_MIN,
  COMMENT_ID_MAX,
  AVATAR_URL_MIN,
  AVATAR_URL_MAX,
  COMMENT_LIST_MIN,
  COMMENT_LIST_MAX,
  COMMENTS_STEP,
};
