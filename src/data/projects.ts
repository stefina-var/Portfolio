// EDIT ME: every project on the site comes from this list.
// Leave out any optional field and that part of the page disappears.
// The order here sets the order on the site and the next/previous links.
// The `bg` block holds the Bulgarian text for that project.

export type Category = 'architecture' | 'digital' | 'visual';

export interface Visual {
  kind: string; // e.g. Render, Floor plan, Section, Diagram, UI screen, User flow, Mockup
  caption?: string;
  width: 'full' | 'half';
  ratio: string; // e.g. '16/9'
  src?: string; // e.g. '/images/my-project/plan.jpg'; empty shows a labelled drawing
  alt?: string; // required once src is set
}

// One slide of a project presentation. Set `video` for a moving slide.
export interface Slide {
  src?: string;
  video?: string;
  controls?: boolean; // a video with sound: shows player controls and never autoplays
  alt: string;
  // A clickable area on the slide that jumps to another slide (1-based).
  // `area` is left, top, width and height in % of the slide.
  jump?: { to: number; label: string; area: [number, number, number, number] };
}

interface ProjectText {
  title: string;
  disciplines: string[];
  summary: string;
  role?: string;
  collaborators?: string;
  overview: string;
  challenge?: string;
  approach?: string;
  outcome?: string; // only publish outcomes you can support with facts
  credits?: string;
  coverAlt?: string;
  deck?: Slide[]; // shown as a presentation in place of the hero image
  gallery: Visual[];
}

export interface Project extends ProjectText {
  slug: string;
  sheet: string;
  category: Category;
  alsoDigital?: boolean; // also list this project on the Digital page
  featured: boolean;
  sample: boolean; // true shows the "Sample content" badge
  type: 'Professional' | 'Academic' | 'Independent';
  year?: string;
  externalLink?: { label: string; href: string };
  cover?: string;
  deckRatio?: string; // presentation proportions; 16 / 9 when left out
  hero: { kind: string; ratio: string };
  bg?: Partial<ProjectText>;
}

const architectureGallery: Visual[] = [
  { kind: 'Concept diagram', width: 'half', ratio: '1/1' },
  { kind: 'Site plan', width: 'half', ratio: '1/1' },
  { kind: 'Floor plan', width: 'full', ratio: '16/9' },
  { kind: 'Section', width: 'full', ratio: '21/9' },
];

const digitalGallery: Visual[] = [
  { kind: 'User flow', width: 'full', ratio: '21/9' },
  { kind: 'UI screen', width: 'half', ratio: '4/3' },
  { kind: 'UI screen', width: 'half', ratio: '4/3' },
  { kind: 'Responsive mockup', width: 'full', ratio: '16/9' },
];

const visualGallery: Visual[] = [
  { kind: 'Identity system', width: 'full', ratio: '16/9' },
  { kind: 'Poster', width: 'half', ratio: '4/5' },
  { kind: 'Editorial spread', width: 'half', ratio: '4/5' },
];

const verify = '[Only facts you can verify, or remove this field.]';
const verifyBg = '[Само факти, които можете да потвърдите, или премахнете това поле.]';

const tukTam = '/images/work/tuk-tam';
const tukTamDs = '/images/work/tuk-tam-design-system';

// WasteLess slides in order: [English description, Bulgarian description].
const wasteSlide = (i: number) => `/images/work/wasteless/slide-${String(i + 1).padStart(2, '0')}.webp`;
const wasteSlides: [string, string][] = [
  ['WasteLess title slide: team The Breakfast Club, Zero-Waste Kitchen app, client an environmental non-profit organisation, with an illustration and the Recipes and Meal Plan screens.', 'Заглавен слайд WasteLess: екип The Breakfast Club, приложение за кухня без отпадъци, клиент екологична неправителствена организация, с илюстрация и екраните Рецепти и Хранителен план.'],
  ['The team and our mentors.', 'Екипът и менторите ни.'],
  ['UX process: define, research, analyse, design, test.', 'UX процес: дефиниране, проучване, анализ, дизайн, тестване.'],
  ['Who are we: mission and vision.', 'Кои сме ние: мисия и визия.'],
  ['Values of the app.', 'Ценностите на приложението.'],
  ['Market challenges and solutions.', 'Пазарни предизвикателства и решения.'],
  ['Devices: smartwatch, mobile app and desktop.', 'Устройства: смарт часовник, мобилно приложение и десктоп.'],
  ['Smartwatch integration: notifications and hands-free instructions.', 'Интеграция със смарт часовник: известия и инструкции без ръце.'],
  ['Target audience: we aim locally.', 'Целева аудитория: насочваме се локално.'],
  ['Business goals using the HOSKRs method.', 'Бизнес цели по метода HOSKR.'],
  ['Competitor analysis: Eat This Much.', 'Анализ на конкурентите: Eat This Much.'],
  ['Competitor analysis: BigOven.', 'Анализ на конкурентите: BigOven.'],
  ['Competitor analysis: Kitche.', 'Анализ на конкурентите: Kitche.'],
  ['Competitor comparison table.', 'Сравнителна таблица на конкурентите.'],
  ['Insights from the analyses: use of AI and tracking expiration dates.', 'Изводи от анализите: използване на AI и следене на срокове на годност.'],
  ['User requirements: data from 100 surveyed people.', 'Потребителски изисквания: данни от 100 анкетирани.'],
  ['Interview results.', 'Резултати от интервютата.'],
  ['Primary users: dos and don\'ts.', 'Основни потребители: какво да правим и какво не.'],
  ['Persona 1: Martin.', 'Персона 1: Мартин.'],
  ['Epics and user stories for Martin.', 'Епици и потребителски истории за Мартин.'],
  ['Persona 2: Lidiya.', 'Персона 2: Лидия.'],
  ['Epics and user stories for Lidiya.', 'Епици и потребителски истории за Лидия.'],
  ['Feature prioritisation by impact and effort.', 'Приоритизиране на функциите по ефект и усилие.'],
  ['Content requirements: learn, cook, shop and personalised content.', 'Изисквания към съдържанието: учи, готви, пазарувай и персонално съдържание.'],
  ['Card sorting with both personas.', 'Сортиране на карти с двете персони.'],
  ['Information architecture: five main features and one secondary.', 'Информационна архитектура: пет основни функции и една второстепенна.'],
  ['Paper prototypes.', 'Хартиени прототипи.'],
  ['User flow: meal planning.', 'Потребителски поток: планиране на хранене.'],
  ['Lo-fi prototype: meal planning.', 'Lo-fi прототип: планиране на хранене.'],
  ['User testing with heatmaps: generating a meal plan.', 'Тестване с потребители с топлинни карти: създаване на хранителен план.'],
  ['User flow: learn.', 'Потребителски поток: учене.'],
  ['Lo-fi prototype: videos and articles.', 'Lo-fi прототип: видеа и статии.'],
  ['User testing with heatmaps: articles and favourites.', 'Тестване с потребители с топлинни карти: статии и любими.'],
  ['User flow: fridge.', 'Потребителски поток: хладилник.'],
  ['Lo-fi prototype: pantry and recipes.', 'Lo-fi прототип: килер и рецепти.'],
  ['User testing: problems, solutions and suggestions.', 'Тестване с потребители: проблеми, решения и предложения.'],
  ['User testing results: before and after.', 'Резултати от тестването: преди и след.'],
  ['UI: from research to design.', 'UI: от проучването към дизайна.'],
  ['Visual research: four moodboards, one combination.', 'Визуално проучване: четири мудборда, една комбинация.'],
  ['Colour palettes tested with users.', 'Цветови палитри, тествани с потребители.'],
  ['Final colour palette and contrast check.', 'Финална палитра и проверка на контраста.'],
  ['Typography: Unbounded and HR Grotesk.', 'Типография: Unbounded и HR Grotesk.'],
  ['Brand and logo.', 'Бранд и лого.'],
  ['Icons: eco-friendly, food-centric and system icons.', 'Икони: екологични, свързани с храна и системни.'],
  ['Illustrations.', 'Илюстрации.'],
  ['More illustrations, including the 404 page.', 'Още илюстрации, включително страницата 404.'],
  ['Spacing and rounding on a 4-point grid.', 'Отстояния и заобляния по 4-точкова мрежа.'],
  ['Grid for mobile and desktop.', 'Мрежа за мобилно и десктоп.'],
  ['Components.', 'Компоненти.'],
  ['Spacing system in the components.', 'Система за отстояния в компонентите.'],
  ['User testing results: navigation evolution.', 'Резултати от тестването: развитие на навигацията.'],
  ['User testing results: profile before and after.', 'Резултати от тестването: профил преди и след.'],
  ['User testing results: recipe before and after.', 'Резултати от тестването: рецепта преди и след.'],
  ['Heuristic evaluation results: before and after.', 'Резултати от евристичната оценка: преди и след.'],
  ['Heuristic evaluation.', 'Евристична оценка.'],
  ['Final screens: cooking and recipes.', 'Финални екрани: готвене и рецепти.'],
  ['Final screens: daily and weekly meal plan.', 'Финални екрани: дневен и седмичен хранителен план.'],
  ['Final screens: learn, with articles and short videos.', 'Финални екрани: учене, със статии и кратки видеа.'],
  ['Final screens: products.', 'Финални екрани: продукти.'],
  ['Final screens: profile.', 'Финални екрани: профил.'],
  ['Final screens: eco tips.', 'Финални екрани: еко съвети.'],
  ['Smartwatch: notification and shopping list.', 'Смарт часовник: известие и списък за пазаруване.'],
  ['Smartwatch: following a recipe.', 'Смарт часовник: следване на рецепта.'],
  ['Desktop website.', 'Десктоп сайт.'],
];

// Diploma sheets in order: [English description, Bulgarian description].
const sportsSheet = (i: number) => `/images/work/sports-school-burgas/sheet-${String(i + 1).padStart(2, '0')}.webp`;
const sportsSheets: [string, string][] = [
  ['Title sheet: Sports School "Yuri Gagarin", Burgas, with an aerial visualisation of the complex.', 'Заглавен лист: Спортно училище „Юрий Гагарин“, Бургас, с визуализация на комплекса.'],
  ['Project brief: why Burgas needs a new sports school.', 'Задание: защо Бургас има нужда от ново спортно училище.'],
  ['Location: a map of Burgas and why this site was chosen.', 'Локация: карта на Бургас и защо е избрано това място.'],
  ['The site from above, with transport connections and nearby stops.', 'Мястото отгоре, с транспортните връзки и близките спирки.'],
  ['Surroundings: photos of the existing stadium, halls and buildings around the site.', 'Околна среда: снимки на стадиона, залите и сградите около мястото.'],
  ['Proposal in two phases: new streets and training grounds, then restored halls and stadium.', 'Предложение в две фази: нови улици и игрища, после възстановени зали и стадион.'],
  ['Two systems: buildings follow the street grid, fields and green spaces run north-south.', 'Две системи: сградите следват уличната мрежа, игрищата и зелените площи са север-юг.'],
  ['Form-making of the school: modules of classrooms, dining hall and library, joined by shared space and links.', 'Формообразуване на училището: модули с учебни помещения, стол и библиотека, свързани с общо пространство.'],
  ['School floor plan, ground level.', 'Разпределение на училището, ниво 0,00.'],
  ['School floor plan, level +3.75.', 'Разпределение на училището, ниво +3,75.'],
  ['School floor plan, level +7.50.', 'Разпределение на училището, ниво +7,50.'],
  ['Section 1-1 through the school.', 'Разрез 1-1 през училището.'],
  ['Section 2-2 with interior visualisations of the shared spaces.', 'Разрез 2-2 с визуализации на общите пространства.'],
  ['Section 3-3 with a visualisation of the dining hall.', 'Разрез 3-3 с визуализация на стола.'],
  ['Sports in the school programme.', 'Спортовете в програмата на училището.'],
  ['Axonometric of the indoor halls and outdoor grounds for each sport.', 'Аксонометрия на залите и откритите игрища за всеки спорт.'],
  ['Form-making of the sports building: large and small hall modules.', 'Формообразуване на спортната сграда: модули с големи и малки зали.'],
  ['Sports hall plans, levels 0.00 and -4.50.', 'Разпределения на залите, нива 0,00 и -4,50.'],
  ['Sports hall plans, levels 3.90 and 7.70.', 'Разпределения на залите, нива 3,90 и 7,70.'],
  ['Section through the sports hall with visualisations of the halls.', 'Разрез през салона с визуализации на залите.'],
  ['South and north facades.', 'Фасади юг и север.'],
  ['Visualisation of the school entrance.', 'Визуализация на входа на училището.'],
  ['Visualisation of the sports hall entrance.', 'Визуализация на входа на спортната зала.'],
  ['Aerial view and visualisations of the whole complex.', 'Изглед отгоре и визуализации на целия комплекс.'],
];

// Interior presentation slides in order: [English description, Bulgarian description].
const interiorSlide = (i: number) => `/images/work/interior-rental-apartments/slide-${String(i + 1).padStart(2, '0')}.webp`;
const interiorSlides: [string, string][] = [
  ['Title slide: interior project for rental apartments - one concept, different colour schemes.', 'Заглавен слайд: интериорен проект за апартаменти под наем - една концепция, различни разцветки.'],
  ['Project and concept: neutral style, different colour schemes, easy maintenance and a sensible budget.', 'Проект и концепция: неутрален стил, различни разцветки, лесна поддръжка и разумен бюджет.'],
  ['Section 02: visualisations of the same concept in different colour schemes.', 'Раздел 02: визуализации на една и съща концепция в различни разцветки.'],
  ['Bedroom: a light room with a green accent wall and storage.', 'Спалня: светла стая със зелен акцент на стената и място за съхранение.'],
  ['Living room open to the kitchen and dining area, with a blue sofa.', 'Хол, отворен към кухнята и трапезарията, със син диван.'],
  ['Section 03: drawings, shared between the apartments.', 'Раздел 03: чертежи, общи за апартаментите.'],
  ['Furniture plan and flooring plan.', 'План обзавеждане и план настилки.'],
  ['Ceiling and electrical plan: lighting, switches and sockets in every room.', 'План софит и електро: осветление, ключове и контакти във всички помещения.'],
  ['Wall elevations with the furniture, materials and dimensions.', 'Разгъвки на стените с мебелите, материалите и размерите.'],
];

const allProjects: Project[] = [
  {
    slug: 'tuk-tam',
    sheet: 'D-01',
    title: 'Tuk-Tam App',
    category: 'digital',
    disciplines: ['Product Design', 'UI/UX', 'Mobile App'],
    summary: 'Restructuring the app navigation and prioritising core features to improve the experience and drive engagement.',
    featured: true,
    sample: false,
    type: 'Professional',
    year: '2024',
    role: 'Product Designer',
    overview: 'Tuk-Tam is a mobile app where people share their goals, find buddies who can help, meet over a coffee and follow the community\'s events, clubs and companies. After the official launch, my task was to make the app simpler and to put its core feature - swiping goals - at the centre.',
    challenge: 'We gathered feedback and analysed key metrics to understand users\' first impressions. We recruited people through surveys and emails and ran **over 30 interviews, 25 of which I led**.\n\nThe main pain points: too many navigation layers and submenus, too much information and too many features at once, the core feature "swiping goals" remained undiscovered, and there were features users were actively asking for.',
    approach: 'After several ideation sessions with the team, we set the direction: goals become the main feature, navigation is at most two levels deep, the sidebar disappears, and the buddy coffee meeting becomes a secondary option, because most users prefer to chat before meeting.\n\nThe app was reduced to **three tabs - Home, Goals and Chat** - with a new information architecture. I researched how Facebook, LinkedIn, YouTube Music and Instagram place the profile and functions in the top navigation, and after several iterations consolidated everything in each tab into a single top navigation.\n\nThe profile became a card with clear stats and buttons, settings and the QR scan moved inside it, new tabs show the user\'s goals, buddies and donations, and a mini wizard guides people to a complete profile.',
    outcome: 'After three months of dedicated work, the new version of the app went live.',
    cover: `${tukTam}/cover.webp`,
    coverAlt: 'Tuk-Tam app screens on phones over an orange background',
    deck: [
      { src: `${tukTam}/slide-01.webp`, alt: 'Tuk-Tam App: restructuring app navigation and prioritising core functionalities. My role: Product designer.' },
      { video: `${tukTam}/app-demo.mp4`, alt: 'Project overview: a walkthrough of the redesigned home, goals, profile, people and chat screens.' },
      { src: `${tukTam}/slide-02.webp`, alt: 'Product problem and business goals: over 30 user interviews, 25 led by me, and the four main pain points.' },
      { src: `${tukTam}/slide-03.webp`, alt: 'Main ideas from the ideation sessions, shown as sticky notes.' },
      { src: `${tukTam}/slide-04.webp`, alt: 'The solution: an app with only three tabs - Home, Goals and Chat - with a focus on goals.' },
      { src: `${tukTam}/slide-05.webp`, alt: 'The solution: the new information architecture for home, goals and chats.' },
      { src: `${tukTam}/slide-06-home.webp`, alt: 'Redesign of the top navigation, Home tab: the old screen with four nested layers, a sidebar and too many tabs, next to the improved version with a new profile position, two layers and goals as the main feature.' },
      { src: `${tukTam}/slide-07.webp`, alt: 'Redesign of the top navigation, Goals tab, based on research into popular apps.' },
      { src: `${tukTam}/slide-08.webp`, alt: 'Redesign of the top navigation, Chat tab: Coffee and Chat combined.' },
      { src: `${tukTam}/slide-09.webp`, alt: 'Redesign of the profile screen: before and after, with the list of improvements.' },
      { src: `${tukTam}/slide-10.webp`, alt: 'Thank you: after three months of dedicated work, the new version is live.' },
    ],
    hero: { kind: 'Product screens', ratio: '16/10' },
    gallery: [],
    bg: {
      title: 'Приложение Tuk-Tam',
      disciplines: ['Продуктов дизайн', 'UI/UX', 'Мобилно приложение'],
      summary: 'Преструктуриране на навигацията и подреждане на основните функции, за да стане приложението по-удобно и по-ангажиращо.',
      role: 'Продуктов дизайнер',
      overview: 'Tuk-Tam е мобилно приложение, в което хората споделят целите си, намират buddies, които могат да помогнат, срещат се на кафе и следят събитията, клубовете и компаниите в общността. След официалното стартиране задачата ми беше да направя приложението по-просто и да поставя в центъра основната му функция - разглеждането на цели.',
      challenge: 'Събрахме обратна връзка и анализирахме ключови метрики, за да разберем първите впечатления на потребителите. Набрахме участници чрез анкети и имейли и проведохме **над 30 интервюта, 25 от които водих аз**.\n\nОсновните проблеми: твърде много нива на навигация и подменюта, прекалено много информация и функции наведнъж, основната функция за разглеждане на цели оставаше незабелязана, а потребителите активно търсеха функции, които липсваха.',
      approach: 'След няколко сесии за генериране на идеи с екипа определихме посоката: целите стават основната функция, навигацията е най-много на две нива, страничното меню изчезва, а срещата на кафе става второстепенна опция, защото повечето потребители предпочитат първо да си пишат.\n\nПриложението беше сведено до **три таба - Начало, Цели и Чат** - с нова информационна архитектура. Проучих как Facebook, LinkedIn, YouTube Music и Instagram поставят профила и функциите в горната навигация и след няколко итерации събрах всичко в рамките на всеки таб в една горна навигация.\n\nПрофилът стана карта с ясни статистики и бутони, настройките и QR скенерът се преместиха в него, нови табове показват целите, buddies и даренията на потребителя, а кратък помощник води хората към попълнен профил.',
      outcome: 'След три месеца целенасочена работа новата версия на приложението е на живо.',
      coverAlt: 'Екрани от приложението Tuk-Tam на телефони върху оранжев фон',
      deck: [
        { src: `${tukTam}/slide-01.webp`, alt: 'Tuk-Tam App: преструктуриране на навигацията и подреждане на основните функции. Моята роля: продуктов дизайнер.' },
        { video: `${tukTam}/app-demo.mp4`, alt: 'Общ преглед: видео с новите екрани за начало, цели, профил, хора и чат.' },
        { src: `${tukTam}/slide-02.webp`, alt: 'Проблемът и бизнес целите: над 30 интервюта с потребители, 25 водени от мен, и четирите основни проблема.' },
        { src: `${tukTam}/slide-03.webp`, alt: 'Основните идеи от сесиите за идеи, показани като бележки.' },
        { src: `${tukTam}/slide-04.webp`, alt: 'Решението: приложение само с три таба - Начало, Цели и Чат - с фокус върху целите.' },
        { src: `${tukTam}/slide-05.webp`, alt: 'Решението: новата информационна архитектура за начало, цели и чатове.' },
        { src: `${tukTam}/slide-06-home.webp`, alt: 'Нова горна навигация, таб Начало: старият екран с четири нива навигация, странично меню и твърде много табове, до подобрената версия с ново място на профила, две нива и целите като основна функция.' },
        { src: `${tukTam}/slide-07.webp`, alt: 'Нова горна навигация, таб Цели, въз основа на проучване на популярни приложения.' },
        { src: `${tukTam}/slide-08.webp`, alt: 'Нова горна навигация, таб Чат: Кафе и Чат заедно.' },
        { src: `${tukTam}/slide-09.webp`, alt: 'Нов профилен екран: преди и след, със списък на подобренията.' },
        { src: `${tukTam}/slide-10.webp`, alt: 'Благодаря: след три месеца работа новата версия е на живо.' },
      ],
    },
  },
  {
    slug: 'tuk-tam-design-system',
    sheet: 'D-03',
    title: 'Design System for Tuk-Tam',
    category: 'digital',
    disciplines: ['Design Systems', 'UI/UX', 'Mobile App'],
    summary: 'A complete design system for the Tuk-Tam app - components for every feature, in all their states.',
    featured: true,
    sample: false,
    type: 'Professional',
    year: '2024',
    role: 'Product Designer',
    overview: 'As part of my quarterly objectives, I developed a complete design system for the Tuk-Tam mobile app.',
    approach: 'The work included **designing components for all the functionalities, with their various states** - search fields, buttons, inputs, checkboxes, radio buttons, toggles, tags, profile and goal cards - and systematically updating the existing design files to use the new components.\n\nIn the video I walk through the system in Figma and show how it is organised.',
    cover: `${tukTamDs}/cover.webp`,
    coverAlt: 'Design system for the Tuk-Tam app: components such as search fields, buttons, toggles, checkboxes, tags and profile cards around the project brief',
    deck: [
      { src: `${tukTamDs}/cover.webp`, alt: 'Design system for Tuk-Tam app. Project brief: as part of my quarterly objectives, I developed a complete design system for the Tuk-Tam app, designing components for all functionalities with various states and updating the existing files to use them.', jump: { to: 2, label: 'See video', area: [42, 67.5, 19.4, 8] } },
      { video: `${tukTamDs}/walkthrough.mp4`, controls: true, alt: 'Video walkthrough of the Tuk-Tam design system in Figma.' },
    ],
    hero: { kind: 'Product screens', ratio: '16/9' },
    gallery: [],
    bg: {
      title: 'Дизайн система за Tuk-Tam',
      disciplines: ['Дизайн системи', 'UI/UX', 'Мобилно приложение'],
      summary: 'Цялостна дизайн система за приложението Tuk-Tam - компоненти за всяка функция, във всичките им състояния.',
      role: 'Продуктов дизайнер',
      overview: 'Като част от тримесечните си цели разработих цялостна дизайн система за мобилното приложение Tuk-Tam.',
      approach: 'Работата включваше **проектиране на компоненти за всички функционалности, с различните им състояния** - полета за търсене, бутони, полета за въвеждане, чекбоксове, радио бутони, превключватели, тагове, карти за профил и цели - и систематично обновяване на съществуващите файлове с новите компоненти.\n\nВъв видеото разглеждам системата във Figma и показвам как е организирана.',
      coverAlt: 'Дизайн система за приложението Tuk-Tam: компоненти като полета за търсене, бутони, превключватели, чекбоксове, тагове и карти за профил около описанието на проекта',
      deck: [
        { src: `${tukTamDs}/cover.webp`, alt: 'Дизайн система за приложението Tuk-Tam. Описание: като част от тримесечните си цели разработих цялостна дизайн система, с компоненти за всички функционалности в различни състояния, и обнових съществуващите файлове с тях.', jump: { to: 2, label: 'Виж видеото', area: [42, 67.5, 19.4, 8] } },
        { video: `${tukTamDs}/walkthrough.mp4`, controls: true, alt: 'Видео разходка из дизайн системата на Tuk-Tam във Figma.' },
      ],
    },
  },
  {
    slug: 'wasteless',
    sheet: 'D-04',
    title: 'WasteLess - Zero-Waste Kitchen App',
    category: 'digital',
    disciplines: ['UX Research', 'UI Design', 'Mobile App'],
    summary: 'A team project from Telerik Academy: an app that helps Bulgarian households plan meals, cook at home and waste less food.',
    featured: true,
    sample: false,
    type: 'Academic',
    role: 'UX/UI Designer in a team of four',
    collaborators: 'The Breakfast Club: Natalia Hristova, Zahari Dimitrov, Zdravka Stoyanova. Mentors: Anna-Mariya Georgieva, Vladimir Valev',
    overview: 'WasteLess is the final group project of the Telerik Academy Upskill UI/UX Design programme, made for an environmental non-profit organisation. Its mission is to **bring zero-waste practices into Bulgarian households** and to get people cooking at home more, by making the process easier and tastier: planning meals, organising cooking and learning about zero waste.',
    challenge: 'The app had to stand out from the competition, keep people coming back and reach the right audience. We analysed Eat This Much, BigOven and Kitche, **surveyed 100 people** and ran interviews. Our primary users are people aged 18-40 in Sofia - households of all sizes, environmentally conscious, often on a tight budget - who want to organise their kitchen and eating habits.',
    approach: 'We followed the full UX process: define, research, analyse, design and test. From the research we built two personas, Martin and Lidiya, with epics and user stories, prioritised features by impact and effort, ran card sorting and built an **information architecture with five main features and one secondary**.\n\nWe moved from paper prototypes and user flows to lo-fi prototypes and **tested them with users using heatmaps**. The tests led to concrete changes - a calmer home screen, bigger main buttons and collapsible categories in the fridge.\n\nFor the UI we compared four moodboards, tested two colour palettes with users, chose Unbounded and HR Grotesk, and built a brand, icons, illustrations, a 4-point grid and components. A heuristic evaluation refined the final screens for cooking, meal plans, learning, products, profile and eco tips, plus a smartwatch companion and a desktop site.',
    cover: '/images/work/wasteless/cover.webp',
    coverAlt: 'WasteLess title slide on a green gradient, with an illustration of a girl dreaming of food and the Recipes and Meal Plan screens',
    deck: wasteSlides.map(([en], i) => ({ src: wasteSlide(i), alt: en })),
    hero: { kind: 'Product screens', ratio: '16/9' },
    gallery: [],
    bg: {
      title: 'WasteLess - приложение за кухня без отпадъци',
      disciplines: ['UX проучване', 'UI дизайн', 'Мобилно приложение'],
      summary: 'Екипен проект от Telerik Academy: приложение, което помага на българските домакинства да планират храненето си, да готвят у дома и да изхвърлят по-малко храна.',
      role: 'UX/UI дизайнер в екип от четирима',
      collaborators: 'The Breakfast Club: Natalia Hristova, Zahari Dimitrov, Zdravka Stoyanova. Ментори: Anna-Mariya Georgieva, Vladimir Valev',
      overview: 'WasteLess е финалният екипен проект от програмата Telerik Academy Upskill: UI/UX Design, създаден за екологична неправителствена организация. Мисията му е да **въведе практиките за нулеви отпадъци в българските домакинства** и да насърчи хората да готвят повече у дома, като направи процеса по-лесен и по-вкусен: планиране на храненето, организиране на готвенето и учене за нулевите отпадъци.',
      challenge: 'Приложението трябваше да се отличи от конкуренцията, да задържа потребителите и да достигне до правилната аудитория. Анализирахме Eat This Much, BigOven и Kitche, **анкетирахме 100 души** и проведохме интервюта. Основните ни потребители са хора на 18-40 години в София - домакинства с всякакъв размер, екологично осъзнати, често с ограничен бюджет - които искат да организират кухнята и храненето си.',
      approach: 'Минахме през целия UX процес: дефиниране, проучване, анализ, дизайн и тестване. От проучването изградихме две персони, Мартин и Лидия, с епици и потребителски истории, приоритизирахме функциите по ефект и усилие, направихме сортиране на карти и изградихме **информационна архитектура с пет основни функции и една второстепенна**.\n\nОт хартиени прототипи и потребителски потоци стигнахме до lo-fi прототипи и **ги тествахме с потребители чрез топлинни карти**. Тестовете доведоха до конкретни промени - по-спокоен начален екран, по-големи основни бутони и сгъваеми категории в хладилника.\n\nЗа UI сравнихме четири мудборда, тествахме две цветови палитри с потребители, избрахме Unbounded и HR Grotesk и изградихме бранд, икони, илюстрации, 4-точкова мрежа и компоненти. Евристична оценка прецизира финалните екрани за готвене, хранителни планове, учене, продукти, профил и еко съвети, както и версия за смарт часовник и десктоп сайт.',
      coverAlt: 'Заглавният слайд на WasteLess на зелен градиент, с илюстрация на момиче, което мечтае за храна, и екраните Рецепти и Хранителен план',
      deck: wasteSlides.map(([, bg], i) => ({ src: wasteSlide(i), alt: bg })),
    },
  },
  {
    slug: 'sports-school-burgas',
    sheet: 'A-01',
    title: 'Sports School "Yuri Gagarin", Burgas',
    category: 'architecture',
    disciplines: ['Architecture', 'Public Buildings'],
    summary: 'My diploma project: a new sports school with indoor halls and outdoor training grounds, on a site that has been linked to sport in Burgas since 1954.',
    featured: true,
    sample: false,
    type: 'Academic',
    role: 'Diploma project, Department of Public Buildings',
    collaborators: 'Supervisor: Arch. Rositsa Bratkova',
    overview: 'The sports school in Burgas badly needs a new base - a building for the students, as well as sports facilities for indoor and outdoor training. The project is planned under the "Integrated Territorial Investment Concepts" procedure of the "Regional Development 2021-2027" programme, with the involvement of local authorities, civil society and many sports clubs.',
    challenge: 'The site has been associated with sport since 1954, when the Chernomorets stadium was built, together with training grounds, halls and a rehabilitation centre. It is close to the sea, Lake Vaya and the city\'s rowing base, near the centre, and well connected - two stops served by all the main transport lines are next to it. There are no other sports facilities in the area.',
    approach: 'The proposal works in two phases: first, a new street network, varied open spaces with training grounds and parking; then, restoring the old halls and bringing the stadium back into use, creating **one large area for sport and leisure in Burgas**.\n\nTwo systems organise the plan: the buildings follow the street grid, while the fields and green spaces run north-south. The school is composed of **modules** - classrooms, dining hall and library - joined by a shared space, corridors and a roof link. The sports building follows the same logic, with large halls for basketball, volleyball and handball and for wrestling and gymnastics, and smaller halls for fitness, boxing and kickboxing.\n\nThe programme covers volleyball, basketball, football, wrestling, kickboxing, boxing, gymnastics, athletics and swimming.',
    cover: '/images/work/sports-school-burgas/cover.webp',
    coverAlt: 'Visualisation of the entrance to the sports school in Burgas, with students walking towards a light, glazed facade',
    deckRatio: '1191 / 842',
    deck: sportsSheets.map(([en], i) => ({ src: sportsSheet(i), alt: en })),
    hero: { kind: 'Render', ratio: '16/9' },
    gallery: [],
    bg: {
      title: 'Спортно училище „Юрий Гагарин“, Бургас',
      disciplines: ['Архитектура', 'Обществени сгради'],
      summary: 'Дипломният ми проект: ново спортно училище със зали и открити игрища, на място, свързано със спорта в Бургас от 1954 г.',
      role: 'Дипломен проект, катедра „Обществени сгради“',
      collaborators: 'Ръководител: арх. Росица Браткова',
      overview: 'Спортното училище в Бургас има голяма нужда от нова база - сграда за учениците, но и спортни съоръжения за тренировки на открито и закрито. Проектът е предвиден по процедура „Концепции за интегрирани териториални инвестиции“ на ОП „Развитие на регионите 2021-2027“, с участието на местната власт, гражданското общество и много спортни клубове.',
      challenge: 'Районът се асоциира със спорт от 1954 г., когато е построен стадион „Черноморец“, а около него - тренировъчни игрища, зали и рехабилитационен център. Мястото е близо до морето, езерото Вая и гребната база на града, до центъра, и е лесно достъпно - в непосредствена близост има две спирки на всички главни транспортни линии. В района няма други спортни съоръжения.',
      approach: 'Предложението е в две фази: първо нова улична мрежа, разнообразни открити площи с тренировъчни игрища и паркоместа; след това възстановяване на старите зали и връщане на стадиона в експлоатация, за да се създаде **една голяма зона за спорт и развлечение в Бургас**.\n\nДве системи подреждат плана: сградите следват уличната мрежа, а игрищата и зелените пространства са в посока север-юг. Училището е съставено от **модули** - учебни помещения, стол и библиотека - свързани с общо пространство, коридори и покривна връзка. Спортната сграда следва същата логика, с големи зали за баскетбол, волейбол и хандбал и за борба и гимнастика, и по-малки зали за физическа подготовка, бокс и кикбокс.\n\nПрограмата включва волейбол, баскетбол, футбол, борба, кикбокс, бокс, гимнастика, лека атлетика и плуване.',
      coverAlt: 'Визуализация на входа на спортното училище в Бургас, с ученици, които вървят към светла остъклена фасада',
      deck: sportsSheets.map(([, bg], i) => ({ src: sportsSheet(i), alt: bg })),
    },
  },
  {
    slug: 'interior-rental-apartments',
    sheet: 'A-02',
    title: 'Interior Design for Rental Apartments',
    category: 'architecture',
    disciplines: ['Interior Design', '3D Visualisation', 'Technical Drawings'],
    summary: 'An interior project for rental apartments in Sofia - one concept, different colour schemes.',
    featured: false,
    sample: false,
    type: 'Professional',
    overview: 'The project covers several apartments in one building, all meant to be rented out. Every home follows a **shared interior concept**, and each one gets its own colour scheme.',
    challenge: 'The interior had to be light, neutral and cosy, so it **appeals to as many people as possible**. The solutions also had to be comfortable and functional, with affordable execution and materials that are easy to clean and maintain between tenants.',
    approach: 'Four principles guide the design: a **neutral style** - a modern, light interior; **different colour schemes** - colour accents on walls, textiles and decor; **easy maintenance** - durable materials that are easy to clean; and a **sensible budget** - affordable and quick to build.\n\nThe visualisations show how the same concept looks in the different colour schemes: a light bedroom with a green accent wall and good storage, and a living room open to the kitchen and dining area, with a soft sofa, colour accents and practical, hard-wearing furniture.\n\nThe drawings are **shared between the apartments**, which makes the build easier and cheaper. They include a furniture plan, a flooring plan, a ceiling and electrical plan with all lighting, switches and sockets, and elevations of every wall with the furniture, materials and dimensions.',
    cover: '/images/work/interior-rental-apartments/cover.webp',
    coverAlt: 'Visualisation of a light living room with a blue sofa, open to the kitchen and dining area',
    deck: interiorSlides.map(([en], i) => ({ src: interiorSlide(i), alt: en })),
    hero: { kind: 'Render', ratio: '16/9' },
    gallery: [],
    bg: {
      title: 'Интериорен проект за апартаменти под наем',
      disciplines: ['Интериорен дизайн', '3D визуализация', 'Технически чертежи'],
      summary: 'Интериорен проект за апартаменти под наем в София - една концепция, различни разцветки.',
      overview: 'Проектът обхваща няколко апартамента в една сграда, предназначени за отдаване под наем. Всички жилища следват **обща интериорна концепция**, а всяко от тях получава собствена цветова гама.',
      challenge: 'Интериорът трябваше да е светъл, неутрален и уютен, за да се **хареса на възможно най-много хора**. Решенията трябваше да са удобни и функционални, с достъпно изпълнение и материали, които лесно се почистват и поддържат между наемателите.',
      approach: 'Четири принципа водят дизайна: **неутрален стил** - модерен и светъл интериор; **различни разцветки** - цветови акценти в стени, текстил и декор; **лесна поддръжка** - здрави материали, лесни за почистване; и **разумен бюджет** - достъпно и бързо изпълнение.\n\nВизуализациите показват как една и съща концепция изглежда в различните разцветки: светла спалня със зелен акцент на стената и удобно място за съхранение, и хол, отворен към кухнята и трапезарията, с мек диван, цветни акценти и практични, издръжливи мебели.\n\nЧертежите са **общи за апартаментите**, което улеснява и поевтинява изпълнението. Те включват план обзавеждане, план настилки, план софит и електро с цялото осветление, ключове и контакти, и разгъвки на всяка стена с мебелите, материалите и размерите.',
      coverAlt: 'Визуализация на светъл хол със син диван, отворен към кухнята и трапезарията',
      deck: interiorSlides.map(([, bg], i) => ({ src: interiorSlide(i), alt: bg })),
    },
  },
  {
    slug: 'visual-identity-study-01',
    sheet: 'V-01',
    title: 'Visual Identity Study 01',
    category: 'visual',
    disciplines: ['Branding', 'Graphic Design'],
    summary: 'One line on the identity and its idea.',
    featured: true,
    sample: true,
    type: 'Academic',
    role: '[Your role]',
    overview: '[What the identity is for.]',
    approach: '[How the system was built and applied.]',
    hero: { kind: 'Identity', ratio: '16/9' },
    gallery: visualGallery,
    bg: {
      title: 'Визуална идентичност 01',
      disciplines: ['Брандинг', 'Графичен дизайн'],
      summary: 'Един ред за идентичността и нейната идея.',
      role: '[Вашата роля]',
      overview: '[За какво е предназначена идентичността.]',
      approach: '[Как е изградена и приложена системата.]',
    },
  },
  {
    slug: 'architecture-project-02',
    sheet: 'A-02',
    title: 'Architecture Project 02',
    category: 'architecture',
    disciplines: ['Architecture'],
    summary: 'One line on the idea of the project.',
    featured: true,
    sample: true,
    type: 'Professional',
    role: '[Describe your individual contribution]',
    overview: '[Where the project is, what it is, and why it exists.]',
    approach: '[What you contributed and how.]',
    hero: { kind: 'Render', ratio: '16/9' },
    gallery: architectureGallery,
    bg: {
      title: 'Архитектурен проект 02',
      disciplines: ['Архитектура'],
      summary: 'Един ред за идеята на проекта.',
      role: '[Опишете личния си принос]',
      overview: '[Къде се намира проектът, какво представлява и защо съществува.]',
      approach: '[Какъв беше приносът ви и как.]',
    },
  },
  {
    slug: 'web-design-project-01',
    sheet: 'V-02',
    title: 'Web Design Project 01',
    category: 'visual',
    alsoDigital: true,
    disciplines: ['Web Design', 'Marketing Creative'],
    summary: 'One line on the site and its purpose.',
    featured: true,
    sample: true,
    type: 'Independent',
    role: '[Your role]',
    overview: '[What the website is for and who it speaks to.]',
    approach: '[Structure, content and visual decisions.]',
    hero: { kind: 'Website', ratio: '16/10' },
    gallery: digitalGallery,
    bg: {
      title: 'Уеб дизайн 01',
      disciplines: ['Уеб дизайн', 'Маркетингови визии'],
      summary: 'Един ред за сайта и неговата цел.',
      role: '[Вашата роля]',
      overview: '[За какво е сайтът и към кого говори.]',
      approach: '[Решения за структура, съдържание и визия.]',
    },
  },
  {
    slug: 'digital-product-project-02',
    sheet: 'D-02',
    title: 'Digital Product Project 02',
    category: 'digital',
    disciplines: ['UI/UX'],
    summary: 'One line on the product and the problem it solves.',
    featured: true,
    sample: true,
    type: 'Academic',
    role: '[Your role]',
    overview: '[What the product is and who it serves.]',
    approach: '[Research, structure, flows and interface decisions.]',
    hero: { kind: 'Product screens', ratio: '16/10' },
    gallery: digitalGallery,
    bg: {
      title: 'Дигитален продукт 02',
      summary: 'Един ред за продукта и проблема, който решава.',
      role: '[Вашата роля]',
      overview: '[Какво представлява продуктът и за кого е.]',
      approach: '[Проучване, структура, потоци и решения за интерфейса.]',
    },
  },
];

// Sample placeholders stay above as templates but are hidden from the site for now.
export const projects: Project[] = allProjects.filter((project) => !project.sample);
