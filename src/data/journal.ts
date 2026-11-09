// EDIT ME: your blog posts. The first post in the list is shown as the large latest story.
// To add a post, copy one block below and change the text.
//
// `body`: each item in the list becomes one paragraph.
// `images`: optional extra photos, shown after the text. `ratio` is width/height; `wide` uses the full column.
// `bg`: the Bulgarian version. Leave it out and the English text is used on the Bulgarian site.
// `date`: leave it out until you really publish the post.
// `sample: true` shows a "Draft" badge. Remove it once the post has your real details.
// Only categories that have posts appear as filters.

export interface ArticleImage {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  wide?: boolean;
}

interface ArticleText {
  title: string;
  category: string;
  excerpt: string;
  coverAlt?: string;
  body: string[];
  images?: ArticleImage[];
}

export interface Article extends ArticleText {
  slug: string; // the end of the page address, e.g. 'my-first-post'
  sample: boolean;
  date?: string;
  readingTime?: string; // calculated automatically unless you set it
  cover?: string; // e.g. '/images/journal/my-first-post.jpg'
  bg?: Partial<ArticleText>;
}

const visual = { en: 'Visual Experiments', bg: 'Визуални експерименти' };
const art = { en: 'Art & Making', bg: 'Изкуство и занаят' };
const places = { en: 'Places & Travel', bg: 'Места и пътувания' };
const community = { en: 'Community', bg: 'Общност' };

const utopia = '/images/journal/utopia';
const calendar = '/images/journal/calendar';
const photos = '/images/journal/photography';

export const articles: Article[] = [
  {
    slug: 'utopia-sunny-beach-2050',
    title: 'Utopia: Sunny Beach in 2050',
    category: visual.en,
    excerpt: 'A nine-chapter story with collages, imagining the future of a Bulgarian seaside resort.',
    sample: false,
    cover: `${utopia}/03.webp`,
    coverAlt: 'Open book with a page of text and a collage titled The Street',
    body: [
      'What would Sunny Beach look like in 2050? That was the starting point of Utopia, a nine-chapter story in which every chapter is paired with its own collage.',
      'We looked at the political and sociological dynamics of the resort and built a speculative narrative around them: an architect searching for his loved one, moving through a city that keeps growing into something stranger. The personal story and the urban one run side by side.',
      'I worked on it as co-writer and graphic designer, composing the collages in Photoshop and laying out the book in InDesign. The Street, The Square, The Palaces, The Beach: each place is an exaggeration, and each one is only a small step away from what is already there.',
      'It reminded me that architecture does not have to be drawn to be discussed. Sometimes a pair of scissors and a good story get closer to how a place actually feels.',
    ],
    images: [
      {
        src: `${utopia}/02.webp`,
        alt: 'Five collages of an imagined Sunny Beach: a crowded street, a square with famous landmarks, palaces, a divided beach and small hotels',
        ratio: '1400/788',
        wide: true,
      },
      {
        src: `${utopia}/01.webp`,
        alt: 'Square book with the title Utopia, Sunny Beach 2050 on its cover',
        ratio: '1302/1080',
        wide: true,
      },
    ],
    bg: {
      title: 'Utopia: Слънчев бряг през 2050',
      category: visual.bg,
      excerpt: 'История в девет глави с колажи, която си представя бъдещето на един български морски курорт.',
      coverAlt: 'Отворена книга със страница текст и колаж със заглавие „Улицата“',
      body: [
        'Как би изглеждал Слънчев бряг през 2050 г.? От този въпрос тръгна Utopia – история в девет глави, в която всяка глава е съчетана със собствен колаж.',
        'Разгледахме политическите и социологическите процеси в курорта и изградихме около тях спекулативен разказ: архитект търси любимия си човек, докато се движи из град, който непрекъснато израства в нещо все по-странно. Личната история и историята на мястото вървят успоредно.',
        'Работих по проекта като съавтор на текста и графичен дизайнер: сглобявах колажите във Photoshop и оформях книгата в InDesign. Улицата, Площадът, Дворците, Плажът – всяко място е преувеличение и всяко е само на крачка от това, което вече го има.',
        'Проектът ми напомни, че за архитектурата може да се говори и без чертеж. Понякога ножицата и добрата история стигат по-близо до усещането за едно място.',
      ],
      images: [
        {
          src: `${utopia}/02.webp`,
          alt: 'Пет колажа на въображаем Слънчев бряг: пълна с хора улица, площад с известни забележителности, дворци, разделен плаж и малки хотели',
          ratio: '1400/788',
          wide: true,
        },
        {
          src: `${utopia}/01.webp`,
          alt: 'Квадратна книга със заглавие Utopia, Sunny Beach 2050 на корицата',
          ratio: '1302/1080',
          wide: true,
        },
      ],
    },
  },
  {
    slug: 'art-and-wine-workshops',
    title: 'What leading Art & Wine workshops taught me',
    category: art.en,
    excerpt: 'On blank canvases, nervous first brushstrokes, and helping people trust their own hand.',
    sample: true,
    body: [
      'Most people arrive at an Art & Wine evening with the same sentence ready: "I can\'t draw." Leading these workshops has taught me that this sentence is rarely about drawing. It is about the fear of doing something badly in front of others.',
      'So the first job is never technique. It is making the room feel safe enough for a first imperfect mark. Once that mark is on the canvas, the evening changes, and people stop looking at their neighbour\'s work and start looking at their own.',
      'I think about this often when I design. A good workshop and a good interface have something in common: both take away the fear of the first step and quietly guide you through the next one.',
    ],
    bg: {
      title: 'Какво ме научиха работилниците Art & Wine',
      category: art.bg,
      excerpt: 'За белите платна, първите несигурни мазки и как да помогнеш на хората да повярват на ръката си.',
      body: [
        'Повечето хора идват на вечер Art & Wine с едно и също изречение наум: „Аз не мога да рисувам.“ Докато водя тези работилници, разбрах, че това изречение рядко е за рисуването. То е за страха да направиш нещо зле пред другите.',
        'Затова първата задача никога не е техниката. Тя е в стаята да стане достатъчно спокойно за първата несъвършена следа. Щом тя се появи върху платното, вечерта се променя и хората спират да гледат работата на съседа си и започват да гледат своята.',
        'Често се сещам за това, когато проектирам. Добрата работилница и добрият интерфейс имат нещо общо: и двете премахват страха от първата стъпка и после тихо те водят към следващата.',
      ],
    },
  },
  {
    slug: 'photography-experiments',
    title: 'Photography experiments',
    category: visual.en,
    excerpt: 'Looking up at buildings, cranes and wires, and down at people going about their day.',
    sample: true,
    cover: `${photos}/01.webp`,
    coverAlt: 'Metal-clad canopy cutting across a blue sky, with a dark glass tower behind it',
    body: [
      'A camera is a good excuse to look at things for longer than is reasonable. In these photographs I keep returning to the same two subjects.',
      'The first is structure against the sky: the underside of a canopy, the cables of a bridge, a yellow crane, a street lamp tangled in wires. Pointed upward, ordinary engineering turns into composition.',
      'The second is people in the spaces made for them. An escalator, a railway platform, two men playing a game on a street corner. Architecture only really begins when someone walks into the frame.',
    ],
    images: [
      { src: `${photos}/03.webp`, alt: 'White pylon and fan of cables of a bridge against a deep blue sky', ratio: '371/474' },
      { src: `${photos}/06.webp`, alt: 'Yellow and blue harbour crane seen from below', ratio: '367/508' },
      { src: `${photos}/02.webp`, alt: 'Stone and glass tower rising into a pale blue sky', ratio: '594/436' },
      { src: `${photos}/05.webp`, alt: 'Dark steel and glass canopy seen from underneath', ratio: '594/425' },
      { src: `${photos}/07.webp`, alt: 'Street lamp on an old pole tangled with wires against a bright blue sky', ratio: '594/423' },
      { src: `${photos}/08.webp`, alt: 'Black and white photograph of people on a long metro escalator', ratio: '594/425' },
      { src: `${photos}/09.webp`, alt: 'Black and white photograph of travellers with backpacks at a train station under a steel roof', ratio: '594/425' },
      { src: `${photos}/10.webp`, alt: 'Black and white photograph of two men playing a board game on a street corner', ratio: '594/425' },
      { src: `${photos}/11.webp`, alt: "A man's face reflected in a train window above the sea", ratio: '595/418' },
      { src: `${photos}/12.webp`, alt: 'Six black and white views inside an unfinished, flooded concrete building', ratio: '778/486' },
    ],
    bg: {
      title: 'Фотографски експерименти',
      category: visual.bg,
      excerpt: 'Поглед нагоре към сгради, кранове и жици и надолу към хората в делника им.',
      coverAlt: 'Метална козирка, която пресича синьото небе, с тъмна стъклена кула зад нея',
      body: [
        'Фотоапаратът е добро извинение да гледаш нещата по-дълго от нормалното. В тези снимки непрекъснато се връщам към едни и същи две теми.',
        'Първата е структурата срещу небето: долната страна на козирка, въжетата на мост, жълт кран, улична лампа, оплетена в жици. Погледната отдолу, обикновената инженерия се превръща в композиция.',
        'Втората са хората в пространствата, направени за тях. Ескалатор, железопътен перон, двама мъже, които играят на уличен ъгъл. Архитектурата всъщност започва, когато някой влезе в кадъра.',
      ],
      images: [
        { src: `${photos}/03.webp`, alt: 'Бял пилон и ветрило от въжета на мост срещу наситено синьо небе', ratio: '371/474' },
        { src: `${photos}/06.webp`, alt: 'Жълт и син пристанищен кран, сниман отдолу', ratio: '367/508' },
        { src: `${photos}/02.webp`, alt: 'Кула от камък и стъкло, която се издига към бледосиньо небе', ratio: '594/436' },
        { src: `${photos}/05.webp`, alt: 'Тъмна козирка от стомана и стъкло, снимана отдолу', ratio: '594/425' },
        { src: `${photos}/07.webp`, alt: 'Улична лампа на стар стълб, оплетен в жици, срещу ярко синьо небе', ratio: '594/423' },
        { src: `${photos}/08.webp`, alt: 'Черно-бяла снимка на хора по дълъг ескалатор в метрото', ratio: '594/425' },
        { src: `${photos}/09.webp`, alt: 'Черно-бяла снимка на пътници с раници на гара под стоманен покрив', ratio: '594/425' },
        { src: `${photos}/10.webp`, alt: 'Черно-бяла снимка на двама мъже, които играят настолна игра на уличен ъгъл', ratio: '594/425' },
        { src: `${photos}/11.webp`, alt: 'Лице на мъж, отразено в прозорец на влак над морето', ratio: '595/418' },
        { src: `${photos}/12.webp`, alt: 'Шест черно-бели гледки от недовършена наводнена бетонна сграда', ratio: '778/486' },
      ],
    },
  },
  {
    slug: 'erasmus-plus-projects',
    title: 'Erasmus+: Learning by leaving home',
    category: places.en,
    excerpt: 'What projects in Bulgaria, Italy and Greece gave me that a classroom could not.',
    sample: true,
    body: [
      'Taking part in Erasmus+ projects in Bulgaria, Italy and Greece gave me something that is hard to get from a classroom: the experience of being a beginner in someone else\'s context.',
      'You learn quickly that the things you considered normal are only local habits. How people share a table, use a square, or start a conversation is all design of a kind, even when nobody designed it.',
      'I still carry that habit of arriving somewhere and asking why it works this way. It turned out to be useful far beyond travelling.',
    ],
    bg: {
      title: 'Erasmus+: да учиш, като излезеш от вкъщи',
      category: places.bg,
      excerpt: 'Какво ми дадоха проектите в България, Италия и Гърция, което класната стая не можеше.',
      body: [
        'Участието в проекти по Erasmus+ в България, Италия и Гърция ми даде нещо, което трудно се получава в класната стая: усещането да си начинаещ в чужда среда.',
        'Бързо разбираш, че това, което си смятал за нормално, е само местен навик. Как хората споделят маса, как използват площад, как започват разговор – всичко това е вид дизайн, дори когато никой не го е проектирал.',
        'И досега нося този навик да пристигна някъде и да попитам защо тук е така. Оказа се полезен много отвъд пътуванията.',
      ],
    },
  },
  {
    slug: 'awesome-mix-2020',
    title: 'Awesome Mix 2020: A calendar made of cassettes',
    category: visual.en,
    excerpt: 'A Guardians of the Galaxy inspired calendar from my time at SoftUni Creative.',
    sample: false,
    cover: `${calendar}/01.webp`,
    coverAlt: 'Purple calendar page for February with an illustrated cassette',
    body: [
      'As a fan of the Marvel universe, I wanted to design something around the most memorable object in Guardians of the Galaxy: the mixtape. This calendar was a study project at SoftUni Creative, drawing on the Awesome Mix.',
      'The cassette became the central design element, with each one representing the mood and energy of its song. An earthy palette and retro typography, set in the Bauhaus-style Bauhaus 93, carry the feeling of the sixties.',
      'Each month also features a lyric from a different song on the mixtape. It was a small lesson in how far a single, well-chosen idea can stretch across twelve pages.',
    ],
    images: [
      {
        src: `${calendar}/03.webp`,
        alt: 'Three hanging calendar pages: the Awesome Mix 2020 cover, November and December',
        ratio: '1400/658',
        wide: true,
      },
    ],
    bg: {
      title: 'Awesome Mix 2020: календар от касетки',
      category: visual.bg,
      excerpt: 'Календар, вдъхновен от „Пазителите на галактиката“, от времето ми в SoftUni Creative.',
      coverAlt: 'Лилава страница от календар за февруари с илюстрирана касетка',
      body: [
        'Като фен на вселената на Marvel исках да проектирам нещо около най-запомнящия се предмет в „Пазителите на галактиката“: миксираната касетка. Този календар беше учебен проект в SoftUni Creative, вдъхновен от Awesome Mix.',
        'Касетката стана централният елемент на дизайна, като всяка представя настроението и енергията на своята песен. Земна цветова палитра и ретро типография с шрифта в стил Баухаус Bauhaus 93 носят усещането за шейсетте.',
        'Всеки месец включва и ред от различна песен от касетката. Беше малък урок за това колко далеч може да стигне една добре избрана идея в дванайсет страници.',
      ],
      images: [
        {
          src: `${calendar}/03.webp`,
          alt: 'Три окачени страници от календар: корица Awesome Mix 2020, ноември и декември',
          ratio: '1400/658',
          wide: true,
        },
      ],
    },
  },
  {
    slug: 'my-own-exhibition',
    title: 'My own exhibition by eighteen',
    category: art.en,
    excerpt: 'What it means to put your work on a wall and step back.',
    sample: true,
    body: [
      'By the age of eighteen I had my own exhibition. Looking back, the paintings matter less to me than what it felt like to hang them.',
      'As long as a work stays in your room, it is still a conversation with yourself. On a wall, it belongs to whoever is standing in front of it, and you do not get to explain it.',
      'It was my first lesson in letting work speak without me. I have needed that lesson in every project since.',
    ],
    bg: {
      title: 'Собствена изложба до осемнайсет',
      category: art.bg,
      excerpt: 'Какво значи да окачиш работите си на стената и да отстъпиш назад.',
      body: [
        'До осемнайсетгодишна възраст вече имах собствена изложба. Като се връщам назад, картините са по-малко важни от усещането да ги окача.',
        'Докато една работа стои в стаята ти, тя е още разговор със самата теб. На стената принадлежи на този, който стои пред нея, и ти няма как да му я обясниш.',
        'Това беше първият ми урок да оставям работата да говори без мен. Оттогава ми е трябвал във всеки проект.',
      ],
    },
  },
  {
    slug: 'learning-with-my-hands',
    title: 'Silk, clay, felt: Learning with my hands',
    category: art.en,
    excerpt: 'What textile painting, iconography and embroidery bring to a designer who works on screens.',
    sample: true,
    body: [
      'Over the years I have joined creative workshops in silk and textile painting, iconography, felting, embroidery, clay, working with recycled materials, fashion design and outdoor painting.',
      'Every material has opinions. Silk spreads colour further than you planned, clay remembers every touch, and felt takes patience you did not know you had. You cannot undo with a keystroke, so you learn to adapt and continue.',
      'Most of my days now happen on a screen, and I think these materials are why I still care so much about texture, rhythm and the small decisions nobody notices.',
    ],
    bg: {
      title: 'Коприна, глина, плъст: да учиш с ръцете си',
      category: art.bg,
      excerpt: 'Какво дават рисуването върху текстил, иконописът и бродерията на дизайнер, който работи на екран.',
      body: [
        'През годините съм участвала в творчески работилници по рисуване върху коприна и текстил, иконопис, плъстене, бродерия, глина, работа с рециклирани материали, моден дизайн и рисуване на открито.',
        'Всеки материал има свое мнение. Коприната разнася цвета по-далеч, отколкото си планирал, глината помни всяко докосване, а плъстта иска търпение, за което не си подозирал. Няма как да върнеш назад с едно натискане, затова се учиш да се приспособяваш и да продължаваш.',
        'Сега повечето ми дни минават пред екран и мисля, че заради тези материали все още ми пука толкова за текстурата, ритъма и малките решения, които никой не забелязва.',
      ],
    },
  },
  {
    slug: 'volunteering-at-cinelibre',
    title: 'Behind the scenes at CineLibre',
    category: community.en,
    excerpt: 'Volunteering at a film festival, and what you see from the other side of the screen.',
    sample: true,
    body: [
      'Volunteering at the CineLibre film festival showed me how much invisible work sits behind a single evening in a cinema.',
      'As an audience member you notice the film. From the other side you notice the signs, the queues, the timing, the people who need help finding their seat, and how a good experience is mostly made of things going unnoticed.',
      'That is not so different from what I try to do as a designer.',
    ],
    bg: {
      title: 'Зад кулисите на CineLibre',
      category: community.bg,
      excerpt: 'Доброволчество на кинофестивал и какво се вижда от другата страна на екрана.',
      body: [
        'Доброволчеството на кинофестивала CineLibre ми показа колко невидима работа стои зад една вечер в киното.',
        'Като зрител забелязваш филма. От другата страна забелязваш табелите, опашките, времето, хората, които търсят мястото си, и че доброто преживяване се състои най-вече от неща, които минават незабелязано.',
        'Не е много по-различно от това, което се опитвам да правя като дизайнер.',
      ],
    },
  },
  {
    slug: 'chance-for-children-and-nature',
    title: 'Giving time to something bigger',
    category: community.en,
    excerpt: 'On being part of the "Chance for Children and Nature of Bulgaria" Foundation.',
    sample: true,
    body: [
      'I am a member of the "Chance for Children and Nature of Bulgaria" Foundation. It is one of the places where my work has nothing to do with a brief or a deadline.',
      'Being part of something like this changes the question you ask. Instead of "how will this look?", it becomes "who is this actually for, and what do they need?"',
      'It is a question I try to bring back with me to everything else I do.',
    ],
    bg: {
      title: 'Време за нещо по-голямо',
      category: community.bg,
      excerpt: 'За това да си част от фондация „Шанс за децата и природата на България“.',
      body: [
        'Членувам във фондация „Шанс за децата и природата на България“. Това е едно от местата, където работата ми няма нищо общо със задание или краен срок.',
        'Да си част от нещо такова променя въпроса, който си задаваш. Вместо „как ще изглежда това?“ той става „за кого всъщност е и от какво има нужда?“',
        'Опитвам се да връщам този въпрос във всичко останало, което правя.',
      ],
    },
  },
];
