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

export const projects: Project[] = [
  {
    slug: 'architecture-project-01',
    sheet: 'A-01',
    title: 'Architecture Project 01',
    category: 'architecture',
    disciplines: ['Architecture'],
    summary: 'One line on the idea of the project.',
    featured: true,
    sample: true,
    type: 'Academic',
    role: '[Your role]',
    overview: '[Where the project is, what it is, and why it exists.]',
    challenge: '[The question or constraint the project responds to.]',
    approach: '[How the concept developed, with reference to the drawings below.]',
    outcome: verify,
    hero: { kind: 'Render', ratio: '16/9' },
    gallery: architectureGallery,
    bg: {
      title: 'Архитектурен проект 01',
      disciplines: ['Архитектура'],
      summary: 'Един ред за идеята на проекта.',
      role: '[Вашата роля]',
      overview: '[Къде се намира проектът, какво представлява и защо съществува.]',
      challenge: '[Въпросът или ограничението, на което отговаря проектът.]',
      approach: '[Как се разви концепцията, с препратка към чертежите по-долу.]',
      outcome: verifyBg,
    },
  },
  {
    slug: 'digital-product-project-01',
    sheet: 'D-01',
    title: 'Digital Product Project 01',
    category: 'digital',
    disciplines: ['Product Design', 'UI/UX'],
    summary: 'One line on the product and the problem it solves.',
    featured: true,
    sample: true,
    type: 'Professional',
    role: '[Your role]',
    overview: '[What the product is and who it serves.]',
    challenge: '[The user or business problem.]',
    approach: '[Research, structure, flows and interface decisions.]',
    outcome: verify,
    hero: { kind: 'Product screens', ratio: '16/10' },
    gallery: digitalGallery,
    bg: {
      title: 'Дигитален продукт 01',
      disciplines: ['Продуктов дизайн', 'UI/UX'],
      summary: 'Един ред за продукта и проблема, който решава.',
      role: '[Вашата роля]',
      overview: '[Какво представлява продуктът и за кого е.]',
      challenge: '[Потребителският или бизнес проблемът.]',
      approach: '[Проучване, структура, потоци и решения за интерфейса.]',
      outcome: verifyBg,
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
