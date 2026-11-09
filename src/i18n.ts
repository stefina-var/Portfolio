// Language helpers and the short interface labels (buttons, headings, menus).
// Longer text lives in src/data/.
import { site } from './data/site';
import { siteBg } from './data/site.bg';
import { projects, type Project } from './data/projects';
import { articles, type Article } from './data/journal';

export type Lang = 'en' | 'bg';
export const langs: Lang[] = ['en', 'bg'];

// English sits at the site root; Bulgarian sits under /bg.
export function projectPaths(lang: Lang) {
  const { projects } = getContent(lang);
  return projects.map((project, index) => ({
    params: { slug: project.slug },
    props: {
      project,
      previous: projects.length > 1 ? projects[(index - 1 + projects.length) % projects.length] : undefined,
      next: projects.length > 1 ? projects[(index + 1) % projects.length] : undefined,
    },
  }));
}

export function articlePaths(lang: Lang) {
  if (!site.journalEnabled) return [];
  return getContent(lang).articles.map((article) => ({
    params: { slug: article.slug },
    props: { article },
  }));
}

export function getLang(url: URL): Lang {
  return /^\/bg(\/|$)/.test(url.pathname) ? 'bg' : 'en';
}

export function stripLang(pathname: string) {
  return pathname.replace(/^\/bg(?=\/|$)/, '').replace(/\/$/, '') || '/';
}

// Turns a site path into the right path for a language.
export function l(lang: Lang, path: string) {
  if (lang === 'en') return path;
  return path === '/' ? '/bg' : `/bg${path}`;
}

const en = {
  skip: 'Skip to content',
  menu: 'Menu',
  close: 'Close',
  mainNav: 'Main',
  work: 'Work',
  about: 'About',
  journal: 'Journal',
  connect: "Let's connect",
  light: 'Light',
  dark: 'Dark',
  language: 'Language',
  theme: 'Mode',
  footerWork: 'Work',
  footerPortfolios: 'Portfolios',
  footerElsewhere: 'Elsewhere',
  comingSoon: 'Coming soon',
  noContact: 'Contact details will be added before launch.',
  placeholder: 'Placeholder',
  sample: 'Sample content',
  sampleLong: 'Sample content — replace before launch',
  sampleEntry: 'Sample entry',
  sampleEntryLong: 'Sample entry — not published writing',
  byDiscipline: 'Work by discipline',
  featuredTitle: 'Selected work across physical and digital spaces.',
  viewAll: 'View all work',
  moreAbout: 'More about me',
  readJournal: 'Read the Journal',
  journalLead: 'Stories and experiences from outside the portfolio. Other versions of me.',
  keepReading: 'Keep reading',
  minRead: 'min read',
  journalEmpty: 'Journal is taking shape. The first notes will appear here soon.',
  backJournal: 'Back to Journal',
  filterWork: 'Filter work by discipline',
  filterJournal: 'Filter Journal by category',
  all: 'All',
  one: 'item',
  many: 'items',
  download: 'Download a portfolio',
  fullPortfolio: 'The full portfolio',
  sheet: 'Sheet',
  discipline: 'Discipline',
  type: 'Type',
  year: 'Year',
  role: 'Role',
  collaborators: 'Collaborators',
  overview: 'Overview',
  challenge: 'Challenge',
  approach: 'Approach',
  outcome: 'Outcome and contribution',
  credits: 'Credits',
  visuals: 'Selected visuals',
  moreProjects: 'More projects',
  previous: 'Previous',
  next: 'Next',
  storyTitle: 'The path so far',
  focusTitle: 'Focus and approach',
  experience: 'Experience',
  education: 'Education and recognition',
  beyond: 'Beyond the studio',
  tools: 'Skills and tools',
  portfoliosContact: 'Portfolios and contact',
  portraitOf: 'Portrait of',
  reach: 'Reach me',
  portfolios: 'Portfolios',
  digitalCrumb: 'Digital',
  filters: {
    architecture: 'Architecture',
    design: 'Digital & Visual Design',
  },
  projectTypes: { Professional: 'Professional', Academic: 'Academic', Independent: 'Independent' },
  kinds: {} as Record<string, string>,
};

const bg: typeof en = {
  skip: 'Към съдържанието',
  menu: 'Меню',
  close: 'Затвори',
  mainNav: 'Основна навигация',
  work: 'Проекти',
  about: 'За мен',
  journal: 'Дневник',
  connect: 'Контакт',
  light: 'Светла',
  dark: 'Тъмна',
  language: 'Език',
  theme: 'Режим',
  footerWork: 'Проекти',
  footerPortfolios: 'Портфолиа',
  footerElsewhere: 'Другаде',
  comingSoon: 'Скоро',
  noContact: 'Данните за контакт ще бъдат добавени преди публикуването.',
  placeholder: 'Примерно изображение',
  sample: 'Примерно съдържание',
  sampleLong: 'Примерно съдържание — да се замени преди публикуване',
  sampleEntry: 'Примерен текст',
  sampleEntryLong: 'Примерен текст — не е публикувана статия',
  byDiscipline: 'Проекти по дисциплина',
  featuredTitle: 'Избрани проекти във физическа и дигитална среда.',
  viewAll: 'Всички проекти',
  moreAbout: 'Повече за мен',
  readJournal: 'Към Дневника',
  journalLead: 'Истории и преживявания извън портфолиото. Други версии на мен.',
  keepReading: 'Прочетете още',
  minRead: 'мин. четене',
  journalEmpty: 'Дневникът се оформя. Първите бележки ще се появят тук скоро.',
  backJournal: 'Обратно към Дневника',
  filterWork: 'Филтрирай проектите по дисциплина',
  filterJournal: 'Филтрирай Дневника по категория',
  all: 'Всички',
  one: 'резултат',
  many: 'резултата',
  download: 'Изтегли портфолио',
  fullPortfolio: 'Цялото портфолио',
  sheet: 'Лист',
  discipline: 'Дисциплина',
  type: 'Тип',
  year: 'Година',
  role: 'Роля',
  collaborators: 'Съавтори',
  overview: 'Общ преглед',
  challenge: 'Задача',
  approach: 'Подход',
  outcome: 'Резултат и принос',
  credits: 'Екип',
  visuals: 'Избрани изображения',
  moreProjects: 'Още проекти',
  previous: 'Предишен',
  next: 'Следващ',
  storyTitle: 'Пътят досега',
  focusTitle: 'Фокус и подход',
  experience: 'Опит',
  education: 'Образование и признание',
  beyond: 'Извън студиото',
  tools: 'Умения и инструменти',
  portfoliosContact: 'Портфолиа и контакт',
  portraitOf: 'Портрет на',
  reach: 'Свържете се с мен',
  portfolios: 'Портфолиа',
  digitalCrumb: 'Дигитален дизайн',
  filters: {
    architecture: 'Архитектура',
    design: 'Дигитален и визуален дизайн',
  },
  projectTypes: { Professional: 'Професионален', Academic: 'Учебен', Independent: 'Самостоятелен' },
  kinds: {
    Render: 'визуализация',
    'Concept diagram': 'концептуална схема',
    'Site plan': 'ситуация',
    'Floor plan': 'разпределение',
    Section: 'разрез',
    'Product screens': 'екрани на продукта',
    'UI screen': 'екран',
    'Responsive mockup': 'адаптивен макет',
    Website: 'уебсайт',
    'User flow': 'потребителски поток',
    Identity: 'идентичност',
    'Identity system': 'система на идентичността',
    Poster: 'плакат',
    'Editorial spread': 'разтвор',
    'Cover image': 'корица',
    Portrait: 'портрет',
  },
};

export function readTime(article: Article, ui: typeof en) {
  if (article.readingTime) return article.readingTime;
  const words = article.body.join(' ').split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} ${ui.minRead}`;
}

export function getContent(lang: Lang) {
  const localize = <T extends { bg?: object }>(item: T): T =>
    lang === 'bg' ? { ...item, ...item.bg } : item;
  return {
    site: lang === 'bg' ? siteBg : site,
    projects: projects.map(localize) as Project[],
    articles: articles.map(localize) as Article[],
    ui: lang === 'bg' ? bg : en,
  };
}
