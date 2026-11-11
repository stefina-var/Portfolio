// EDIT ME: your blog posts. The first post in the list is shown as the large latest story.
// To add a post, copy one block below and change the text.
//
// `body`: each item in the list becomes one paragraph. Words between ** are shown in bold. An item starting with "## " becomes a subheading.
// `images`: optional extra photos, shown after the text. Add '[[gallery]]' to `body` to show them as a carousel at that point instead. `ratio` is width/height; `wide` uses the full column.
// `bg`: the Bulgarian version. Leave it out and the English text is used on the Bulgarian site.
// `date`: leave it out until you really publish the post.
// `sample: true` shows a "Draft" badge. Remove it once the post has your real details.

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
  standfirst?: boolean; // show the excerpt under the title
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

const allArticles: Article[] = [
  {
    slug: 'art-and-wine-workshops',
    title: 'The art of leading without taking the brush',
    category: art.en,
    excerpt: 'How painting with wine taught me something more than painting.',
    standfirst: true,
    sample: false,
    cover: '/images/journal/art-and-wine/cover.webp',
    coverAlt: 'Stefina smiling in front of canvases on easels at a painting workshop, with still lifes of purple cups behind her',
    body: [
      'At first glance, painting with wine is simply a pleasant pastime: a few hours with a glass of wine, a canvas and a brush in your hand. People come to get away from everyday life, to have fun and to make something of their own.',
      'But when you stand on the other side of the easel, you realise the experience is much more than the painting each person takes home.',
      'As a host of creative workshops, I meet people with different characters, skills and attitudes. Some have never held a brush; others have experience. Some start confidently, while others announce before the first line: "I can\'t draw at all."',
      'They have all come for the same activity, but each of them needs a different approach.',
      '## When to pick up the brush and when to put it down',
      'One of the most interesting challenges is judging when to step in.',
      'Some people look for specific instructions and constant reassurance that they are doing well. Others prefer to experiment and do not like anyone interfering with their work.',
      'When you see someone struggling, the natural impulse is to help. You could take the brush and fix the shape or the colour in seconds.',
      'But there is a difference between making the painting better and helping the person feel capable of painting it.',
      'If you step in too often, you risk taking away their sense of authorship. If you do not step in on time, frustration can outweigh the pleasure.',
      '**Sometimes good leading means showing how. Other times it means having the patience to let the person discover it alone.**',
      '## Words matter',
      'One of my most interesting observations is how strongly words affect people\'s confidence.',
      'Someone looks at their canvas and exclaims: "Nothing is working!"',
      'At that moment it is not only about painting. The person is already comparing themselves with others, doubting their abilities and gradually losing the pleasure of the process.',
      'It is not enough to simply say: "It\'s very nice." Sometimes it is more valuable to point out specifically what has worked, to suggest a small change, or to explain that every painting goes through a stage where it looks unfinished.',
      'I have seen people who started out convinced they could not paint gradually relax, begin to experiment and finally show their paintings with pride.',
      'Those are some of the most rewarding moments for me.',
      '## Leading a group means sensing people',
      'Working with the individual is only part of the challenge. The other part is creating a shared experience.',
      'You have to find a pace that does not rush beginners but does not bore the more confident either. To judge when to explain, when to help, when to bring in humour and when to simply let people sink into painting.',
      'To notice those who do not ask questions but are clearly struggling.',
      'Gradually I understood that leading a group is not just a sequence of instructions. It is a continuous process of observing, adapting and making small decisions.',
      '## The painting is the result. The experience is the product.',
      'A person comes to paint a picture, but what they will remember is how they felt while making it.',
      'Did they have fun? Did they feel supported? Did they have the freedom to try, to make mistakes and to discover their own abilities?',
      'Here I find an interesting connection with the other areas of design I work in.',
      'Whether we are designing a physical space, a digital product or a creative event, we are not only creating the end result. We are creating the conditions in which people interact, make decisions and experience something.',
      'Painting with wine showed me this in a particularly direct way.',
      'It taught me that mastering a skill and being able to guide another person through the process are two different things. That good communication requires not only explaining but also understanding. And that leadership is sometimes expressed not in taking control, but in knowing when to give it up.',
      'Because sometimes the most valuable result is not the beautiful painting, but the moment when someone who began the evening with "I can\'t draw" looks at their canvas and says with a smile:',
      '**"I can\'t believe I did that."**',
    ],
    bg: {
      title: 'Изкуството да водиш, без да отнемаш четката',
      category: art.bg,
      excerpt: 'Как рисуването с вино ме научи на нещо повече от рисуване.',
      coverAlt: 'Стефина се усмихва пред платна на стативи в ателие за рисуване, зад нея натюрморти с лилави чаши',
      body: [
        'На пръв поглед рисуването с вино е просто приятно занимание — няколко часа с чаша вино, платно и четка в ръка. Хората идват, за да се откъснат от ежедневието, да се забавляват и да създадат нещо свое.',
        'Но когато застанеш от другата страна на статива, разбираш, че преживяването е много повече от картината, която всеки ще отнесе вкъщи.',
        'Като водещ на творчески работилници се срещам с хора с различни характери, умения и нагласи. Някои никога не са държали четка, други имат опит. Едни започват уверено, а други още преди първата линия заявяват: „Аз изобщо не мога да рисувам.“',
        'Всички са дошли за едно и също занимание, но всеки има нужда от различен подход.',
        '## Кога да хванеш четката и кога да я оставиш',
        'Едно от най-интересните предизвикателства е да прецениш кога да се намесиш.',
        'Някои хора търсят конкретни инструкции и постоянно потвърждение, че се справят добре. Други предпочитат да експериментират и не обичат някой да се намесва в работата им.',
        'Когато видиш, че човек се затруднява, естественият импулс е да помогнеш. Можеш да вземеш четката и за секунди да поправиш формата или цвета.',
        'Но има разлика между това да направиш картината по-хубава и това да помогнеш на човека да се почувства способен да я нарисува.',
        'Ако се намесваш прекалено често, рискуваш да отнемеш усещането му за авторство. Ако не се намесиш навреме, разочарованието може да надделее над удоволствието.',
        '**Понякога доброто водене означава да покажеш как. Друг път — да имаш търпението да оставиш човека да открие сам.**',
        '## Думите имат значение',
        'Една от най-интересните ми констатации е колко силно думите влияят върху увереността на хората.',
        'Някой поглежда платното си и възкликва: „Нищо не ми се получава!“',
        'В този момент не става въпрос само за рисуване. Човекът вече се сравнява с останалите, съмнява се в способностите си и постепенно губи удоволствието от процеса.',
        'Не е достатъчно просто да кажеш: „Много е хубаво.“ Понякога е по-ценно да посочиш конкретно какво се е получило, да предложиш малка промяна или да обясниш, че всяка картина преминава през етап, в който изглежда незавършена.',
        'Виждала съм как хора, започнали с убеждението, че не могат да рисуват, постепенно се отпускат, започват да експериментират и накрая с гордост показват картините си.',
        'Това са едни от най-удовлетворяващите моменти за мен.',
        '## Да водиш група означава да усещаш хората',
        'Работата с отделния човек е само част от предизвикателството. Другата е да създадеш общо преживяване.',
        'Трябва да намериш темпо, което не притиска начинаещите, но и не отегчава по-уверените. Да прецениш кога да обясниш, кога да помогнеш, кога да внесеш хумор и кога просто да оставиш хората да се потопят в рисуването.',
        'Да забелязваш и онези, които не задават въпроси, но очевидно се затрудняват.',
        'Постепенно разбрах, че воденето на група не е просто последователност от инструкции. То е непрекъснат процес на наблюдение, адаптиране и вземане на малки решения.',
        '## Картината е резултатът. Преживяването е продуктът.',
        'Човек идва, за да нарисува картина, но това, което ще запомни, е как се е чувствал, докато я е създавал.',
        'Дали се е забавлявал? Дали се е почувствал подкрепен? Дали е имал свободата да опитва, да греши и да открива собствените си способности?',
        'Тук намирам интересна връзка с останалите области на дизайна, в които работя.',
        'Независимо дали проектираме физическо пространство, дигитален продукт или творческо събитие, ние не създаваме единствено крайния резултат. Създаваме условията, в които хората взаимодействат, вземат решения и преживяват нещо.',
        'Рисуването с вино ми показа това по един особено непосредствен начин.',
        'Научи ме, че да владееш едно умение и да можеш да преведеш друг човек през процеса са две различни неща. Че добрата комуникация изисква не само да обясняваш, но и да разбираш. И че лидерството понякога се изразява не в това да поемеш контрол, а в това да знаеш кога да го отстъпиш.',
        'Защото понякога най-ценният резултат не е красивата картина, а моментът, в който някой, започнал вечерта с „Аз не мога да рисувам“, поглежда платното си и казва с усмивка:',
        '**„Не мога да повярвам, че аз го направих.“**',
      ],
    },
  },
  {
    slug: 'utopia-sunny-beach-2050',
    title: 'Utopia: Sunny Beach in 2050',
    category: visual.en,
    excerpt: 'A nine-chapter story with collages, imagining the future of a Bulgarian seaside resort.',
    sample: false,
    cover: `${utopia}/03.webp`,
    coverAlt: 'Open book with a page of text and a collage titled The Street',
    body: [
      'What would Sunny Beach look like in 2050? That was the starting point of Utopia, a **nine-chapter story** in which every chapter is paired with its own collage.',
      'We looked at the political and sociological dynamics of the resort and built a speculative narrative around them: **an architect searching for his loved one**, moving through a city that keeps growing into something stranger. The personal story and the urban one run side by side.',
      'I worked on it as **co-writer and graphic designer**, composing the collages in Photoshop and laying out the book in InDesign. The Street, The Square, The Palaces, The Beach: each place is an exaggeration, and each one is only a small step away from what is already there.',
      'It reminded me that architecture does not have to be drawn to be discussed. Sometimes **a pair of scissors and a good story** get closer to how a place actually feels.',
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
        'Как би изглеждал Слънчев бряг през 2050 г.? От този въпрос тръгна Utopia – **история в девет глави**, в която всяка глава е съчетана със собствен колаж.',
        'Разгледахме политическите и социологическите процеси в курорта и изградихме около тях спекулативен разказ: **архитект търси любимия си човек**, докато се движи из град, който непрекъснато израства в нещо все по-странно. Личната история и историята на мястото вървят успоредно.',
        'Работих по проекта като **съавтор на текста и графичен дизайнер**: сглобявах колажите във Photoshop и оформях книгата в InDesign. Улицата, Площадът, Дворците, Плажът – всяко място е преувеличение и всяко е само на крачка от това, което вече го има.',
        'Проектът ми напомни, че за архитектурата може да се говори и без чертеж. Понякога **ножицата и добрата история** стигат по-близо до усещането за едно място.',
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
    slug: 'photography-experiments',
    title: 'From space to composition',
    category: visual.en,
    excerpt: 'Architectural photography as a study of lines, forms and visual harmony.',
    standfirst: true,
    sample: false,
    cover: `${photos}/cover.webp`,
    coverAlt: 'Wrinkled metal canopy cutting across a blue sky, with a dark glass tower behind it',
    body: [
      'Architecture teaches us to understand space. Photography teaches us to observe it.',
      'During my architecture studies I had the chance to explore this connection through the lens. What began as a university assignment became an interesting exercise in observation - finding compositions in seemingly ordinary places, capturing the geometry of forms and the way a different point of view changes how we perceive space.',
      '## From three dimensions to two',
      'For me, architectural photography is a way of turning three-dimensional space into a two-dimensional composition.',
      'Through the lens, architecture gradually loses its materiality and becomes a combination of lines, forms, patches, light and shadow. A building is no longer simply an object with a particular function and structure, but a system of visual elements that can be considered independently of their original purpose.',
      'What has always interested me most is looking for different points of view and discovering how, through the choice of frame, I can arrange these elements into a new, harmonious composition.',
      'Sometimes this means isolating a small detail from the whole. Other times it means looking for rhythm in the repeating lines of a facade, balance between light and dark surfaces, or unexpected geometry where architectural forms intersect.',
      'In this way photography becomes a kind of abstract study, led by proportion, rhythm and the relationships between individual elements.',
      '[[gallery]]',
      '## The architecture of seeing',
      'What is interesting is that the photographer does not change the architecture itself. They change the way it is presented.',
      'The same object can look monumental or delicate, complex or minimalist, depending on perspective, composition and light.',
      'It is this possibility of interpretation that draws me to photography - the freedom to discover a new visual order in space that already exists.',
      'For me, this is one more way to explore themes that are also present in the other areas of design I work in: composition, hierarchy, proportion, balance and perception.',
      '**Sometimes a new perspective does not require us to change what we are looking at. It is enough to change the way we see it.**',
    ],
    images: [
      { src: `${photos}/01.webp`, alt: 'White pylon and fan of cables of a bridge against a deep blue sky', ratio: '1200/1600' },
      { src: `${photos}/02.webp`, alt: 'Harbour cranes and towers seen through a round opening in rusty yellow steel', ratio: '1600/1110' },
      { src: `${photos}/03.webp`, alt: 'Stone and glass facade rising into a pale blue sky, seen from below', ratio: '1600/1174' },
      { src: `${photos}/04.webp`, alt: 'Red wall with a barred window above and a small barred cellar window below', ratio: '929/1600' },
      { src: `${photos}/05.webp`, alt: 'Black and white metro station with a curving ribbon of light along the ceiling', ratio: '901/1600' },
      { src: `${photos}/06.webp`, alt: 'Glass facade reflecting clouds above a dark stone building, framed by bare branches', ratio: '1066/1600' },
      { src: `${photos}/07.webp`, alt: 'Dark steel and glass canopy with suspended lights, seen from underneath', ratio: '1600/1066' },
      { src: `${photos}/08.webp`, alt: 'Old street lamp pole tangled with wires against a bright blue sky', ratio: '1600/1066' },
    ],
    bg: {
      title: 'От пространство към композиция',
      category: visual.bg,
      excerpt: 'Архитектурната фотография като изследване на линии, форми и визуална хармония.',
      coverAlt: 'Метална козирка, която пресича синьото небе, с тъмна стъклена кула зад нея',
      body: [
        'Архитектурата ни учи да разбираме пространството. Фотографията - да го наблюдаваме.',
        'По време на следването ми по архитектура имах възможност да изследвам тази връзка през обектива. Това, което започна като университетска задача, се превърна в интересно упражнение по наблюдателност - да откривам композиции в привидно обикновени места, да улавям геометрията на формите и начина, по който различната гледна точка променя възприятието ни за пространството.',
        '## От три измерения към две',
        'За мен архитектурната фотография е начин да превърна триизмерното пространство в двуизмерна композиция.',
        'През обектива архитектурата постепенно губи своята материалност и се превръща в съчетание от линии, форми, петна, светлина и сянка. Една сграда вече не е просто обект с определена функция и конструкция, а система от визуални елементи, които могат да бъдат разглеждани независимо от първоначалното им предназначение.',
        'Най-интересното за мен винаги е било да търся различни гледни точки и да откривам как чрез избора на кадър мога да подредя тези елементи в нова, хармонична композиция.',
        'Понякога това означава да изолирам малък детайл от цялото. Друг път - да потърся ритъм в повтарящите се линии на фасадата, баланс между светли и тъмни повърхности или неочаквана геометрия в пресичането на архитектурни форми.',
        'Така фотографията се превръща в своеобразно абстрактно изследване, в което водещи са пропорциите, ритъмът и отношенията между отделните елементи.',
        '[[gallery]]',
        '## Архитектурата на погледа',
        'Интересното е, че фотографът не променя самата архитектура. Той променя начина, по който тя е представена.',
        'Един и същ обект може да изглежда монументален или деликатен, сложен или минималистичен в зависимост от перспективата, композицията и светлината.',
        'Именно тази възможност за интерпретация ме привлича във фотографията - свободата да откриваш нов визуален ред във вече съществуващото пространство.',
        'За мен това е още един начин да изследвам теми, които присъстват и в останалите области на дизайна, с които се занимавам: композиция, йерархия, пропорции, баланс и възприятие.',
        '**Понякога новата перспектива не изисква да променим това, което гледаме. Достатъчно е да променим начина, по който го виждаме.**',
      ],
      images: [
        { src: `${photos}/01.webp`, alt: 'Бял пилон и ветрило от въжета на мост срещу наситено синьо небе', ratio: '1200/1600' },
        { src: `${photos}/02.webp`, alt: 'Пристанищни кранове и кули, видени през кръгъл отвор в ръждясала жълта стомана', ratio: '1600/1110' },
        { src: `${photos}/03.webp`, alt: 'Фасада от камък и стъкло, която се издига към бледосиньо небе, видяна отдолу', ratio: '1600/1174' },
        { src: `${photos}/04.webp`, alt: 'Червена стена с прозорец с решетка отгоре и малък прозорец на мазе отдолу', ratio: '929/1600' },
        { src: `${photos}/05.webp`, alt: 'Черно-бяла метростанция с извиваща се светлинна линия по тавана', ratio: '901/1600' },
        { src: `${photos}/06.webp`, alt: 'Стъклена фасада, отразяваща облаците над тъмна каменна сграда, между голи клони', ratio: '1066/1600' },
        { src: `${photos}/07.webp`, alt: 'Тъмна козирка от стомана и стъкло с висящи лампи, видяна отдолу', ratio: '1600/1066' },
        { src: `${photos}/08.webp`, alt: 'Стар стълб с улична лампа, оплетен в жици, срещу ярко синьо небе', ratio: '1600/1066' },
      ],
    },
  },
  {
    slug: 'erasmus-plus-projects',
    title: 'Erasmus+: Different worlds, the same questions',
    category: places.en,
    excerpt: 'On cultural differences and the things that make us surprisingly alike.',
    standfirst: true,
    sample: false,
    cover: '/images/journal/erasmus/cover.webp',
    coverAlt: 'Stefina holding her Erasmus+ KA2 Strategic Partnership certificate from Istituto Superiore Larino, next to a fellow participant',
    body: [
      'Taking part in international Erasmus+ projects in Bulgaria, Italy and Greece gave me the chance to meet young people from different corners of Europe, to get to know new cultures and to take part in educational modules on topics such as ecology, sustainable development and mental health.',
      'At first glance everything is different - the language, the food, the music, the way people look, their habits and the way they communicate. Everyone brings with them a piece of the culture they grew up in, and their own ideas about the world.',
      'But after a few days together, and maybe two cocktails, the conversations gradually become more personal. And it turns out that behind all these differences lie surprisingly similar questions.',
      'Have we chosen the right career path? Will we manage to fulfil our ambitions? Will we find the person we want to share our life with? And where are we heading at all?',
      'What begins as a clash of different cultures gradually turns into a meeting of young people with similar hopes, fears and uncertainties.',
      '**And perhaps the most interesting thing was discovering that, despite the different places we come from, we are all on our own path, searching for our place under the sun.**',
    ],
    bg: {
      title: 'Еразъм+: различни светове, еднакви въпроси',
      category: places.bg,
      excerpt: 'За културните различия и нещата, които ни правят изненадващо еднакви.',
      coverAlt: 'Стефина със сертификата си от проект „Еразъм+“ KA2 Стратегическо партньорство в Istituto Superiore Larino, до друга участничка',
      body: [
        'Участието ми в международни проекти по програма „Еразъм+“ в България, Италия и Гърция ми даде възможност да се срещна с млади хора от различни краища на Европа, да опозная нови култури и да участвам в образователни модули на теми като екология, устойчиво развитие и психично здраве.',
        'На пръв поглед всичко е различно - езикът, храната, музиката, външният вид, навиците и начинът, по който хората общуват. Всеки носи със себе си частица от културата, в която е израснал, и собствените си представи за света.',
        'Но след няколко дни заедно и може би два коктейла разговорите постепенно стават по-лични. И се оказва, че зад всички тези различия стоят изненадващо сходни въпроси.',
        'Дали сме избрали правилния професионален път? Ще успеем ли да реализираме амбициите си? Ще намерим ли човека, с когото искаме да споделим живота си? И изобщо - накъде сме се запътили?',
        'Това, което започва като сблъсък на различни култури, постепенно се превръща в среща между млади хора със сходни надежди, страхове и несигурности.',
        '**И може би най-интересното беше да открия, че въпреки различните места, от които идваме, всички сме на свой собствен път в търсене на мястото си под слънцето.**',
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
      '**The cassette became the central design element**, with each one representing the mood and energy of its song. An **earthy palette and retro typography**, set in the Bauhaus-style Bauhaus 93, carry the feeling of the sixties.',
      'Each month also features **a lyric from a different song** on the mixtape. It was a small lesson in how far a single, well-chosen idea can stretch across twelve pages.',
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
        '**Касетката стана централният елемент** на дизайна, като всяка представя настроението и енергията на своята песен. **Земна цветова палитра и ретро типография** с шрифта в стил Баухаус Bauhaus 93 носят усещането за шейсетте.',
        'Всеки месец включва и **ред от различна песен** от касетката. Беше малък урок за това колко далеч може да стигне една добре избрана идея в дванайсет страници.',
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
    slug: 'thousands-of-hours-one-exhibition',
    title: 'Thousands of hours, one exhibition',
    category: art.en,
    excerpt: 'On persistence, effort and the satisfaction of seeing your work valued.',
    standfirst: true,
    sample: false,
    cover: '/images/journal/exhibition/cover.webp',
    coverAlt: 'Stefina speaking at the opening of her exhibition, with drawings and paintings on the walls and visitors listening',
    body: [
      'At 18 I had the chance to show my paintings in an exhibition organised as part of my art education.',
      'Behind that moment were years of practice, countless hours at the easel, sketches, experiments and attempts that did not always end with the result I had imagined.',
      'Drawing was a big part of my everyday life during my school years. And as with any skill, you do not always feel the progress in the moment. You often repeat the same exercises, correct mistakes and gradually start to see things you had not noticed before.',
      'The exhibition was one of those moments when I could look back and see how much I had learned and how far I had come.',
      'I was grateful both for the chance to show my work and to the people who had supported and encouraged me over the years.',
      '**For me this was not just an exhibition, but a reminder that persistence matters. That the thousands of hours you put into something you love gradually turn into skills, confidence and results you can be proud of.**',
    ],
    bg: {
      title: 'Хиляди часове, една изложба',
      category: art.bg,
      excerpt: 'За постоянството, усилията и удовлетворението да видиш труда си оценен.',
      coverAlt: 'Стефина говори на откриването на изложбата си, с рисунки и картини по стените и слушащи посетители',
      body: [
        'На 18 години имах възможността да представя свои картини в изложба, организирана като част от обучението ми по рисуване.',
        'Зад този момент стояха години практика, безброй часове пред статива, скици, експерименти и опити, които невинаги завършваха с резултата, който си представях.',
        'Рисуването беше голяма част от ежедневието ми през ученическите години. И както при всяко умение, развитието невинаги се усеща в момента. Често повтаряш едни и същи упражнения, поправяш грешки и постепенно започваш да виждаш неща, които преди не си забелязвал.',
        'Изложбата беше един от онези моменти, в които можех да погледна назад и да видя колко много съм научила и колко далеч съм стигнала.',
        'Бях благодарна както за възможността да покажа работата си, така и на хората, които ме бяха подкрепяли и насърчавали през годините.',
        '**За мен това беше не просто изложба, а напомняне, че постоянството има значение. Че хилядите часове, вложени в нещо, което обичаш, постепенно се превръщат в умения, увереност и резултати, с които можеш да се гордееш.**',
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
      'Volunteering at the CineLibre film festival showed me how much **invisible work** sits behind a single evening in a cinema.',
      'As an audience member you notice the film. From the other side you notice the signs, the queues, the timing, the people who need help finding their seat, and how a good experience is mostly made of **things going unnoticed**.',
      'That is not so different from what I try to do as a designer.',
    ],
    bg: {
      title: 'Зад кулисите на CineLibre',
      category: community.bg,
      excerpt: 'Доброволчество на кинофестивал и какво се вижда от другата страна на екрана.',
      body: [
        'Доброволчеството на кинофестивала CineLibre ми показа колко **невидима работа** стои зад една вечер в киното.',
        'Като зрител забелязваш филма. От другата страна забелязваш табелите, опашките, времето, хората, които търсят мястото си, и че доброто преживяване се състои най-вече от **неща, които минават незабелязано**.',
        'Не е много по-различно от това, което се опитвам да правя като дизайнер.',
      ],
    },
  },
  {
    slug: 'curiosity-as-a-creative-method',
    title: 'Curiosity as a creative method',
    category: art.en,
    excerpt: 'On experiments, different forms of art and the pleasure of starting over.',
    standfirst: true,
    sample: false,
    body: [
      'Already in my school years I had the chance to experiment with different forms of art thanks to the "Chance for the Children of Bulgaria" Foundation. Painting on silk and glass, icon painting, working with clay, fashion design and painting - each new discipline was a chance to try a different technique, material and way of expressing myself.',
      'What has always interested me is how different the creative process can be depending on the medium you work with. With painting you have the freedom to keep changing the composition. With clay you think with your hands and work with volume. With silk painting the material itself dictates part of the result.',
      'Different techniques, different constraints, but the same pleasure - starting with an idea, experimenting and seeing what it turns into.',
      'Over the years my interests developed, I moved through architecture and digital design, but the wish to try new things never disappeared. To this day I love going to different creative classes and workshops, even when they have no direct connection to my professional work.',
      'Perhaps the best thing about these activities is that you do not have to be good at everything. You can be a beginner, not know what you are doing, make mistakes and discover something interesting along the way.',
      '**For me, creativity has never been limited to one discipline. It is more a curiosity that keeps looking for a new material, a new technique or simply a new way of looking at the familiar.**',
    ],
    bg: {
      title: 'Любопитството като творчески метод',
      category: art.bg,
      excerpt: 'За експериментите, различните форми на изкуство и удоволствието да започваш отначало.',
      body: [
        'Още в ученическите си години имах възможност да експериментирам с различни форми на изкуство благодарение на Фондация „Шанс за децата на България“. Рисуване върху коприна и стъкло, иконопис, работа с глина, моден дизайн и живопис - всяка нова дисциплина беше възможност да опитам различна техника, материал и начин на изразяване.',
        'Интересното за мен винаги е било колко различен може да бъде творческият процес в зависимост от средството, с което работиш. При живописта имаш свободата непрекъснато да променяш композицията. При глината мислиш с ръцете си и работиш с обем. При рисуването върху коприна самият материал диктува част от резултата.',
        'Различни техники, различни ограничения, но едно и също удоволствие - да започнеш с идея, да експериментираш и да видиш в какво ще се превърне тя.',
        'С годините интересите ми се развиваха, преминах през архитектурата и дигиталния дизайн, но желанието да опитвам нови неща така и не изчезна. И до днес обичам да посещавам различни творчески класове и работилници, дори когато нямат пряка връзка с професионалната ми работа.',
        'Може би най-хубавото в тези занимания е, че не е необходимо да бъдеш добър във всичко. Можеш да бъдеш начинаещ, да не знаеш какво правиш, да сгрешиш и да откриеш нещо интересно по пътя.',
        '**За мен творчеството никога не е било ограничено до една дисциплина. По-скоро е любопитство, което постоянно търси нов материал, нова техника или просто нов начин да погледне на познатото.**',
      ],
    },
  },
];

// Draft posts (sample: true) stay above but are hidden from the site until they are finished.
export const articles: Article[] = allArticles.filter((article) => !article.sample);
