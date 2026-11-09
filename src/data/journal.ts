// EDIT ME: your blog posts. The first post in the list is shown as the large latest story.
// To add a post, copy one block below to the top of the list and change the text.
//
// `body`: each item in the list becomes one paragraph.
// `images`: optional extra photos, shown after the text.
// `bg`: the Bulgarian version. Leave it out and the English text is used on the Bulgarian site.
// `date`: leave it out until you really publish the post.
// `sample: true` shows a "Sample" badge. Remove it on real posts.
// Only categories that have posts appear as filters.

interface ArticleText {
  title: string;
  category: string;
  excerpt: string;
  coverAlt?: string;
  body: string[];
}

export interface Article extends ArticleText {
  slug: string; // the end of the page address, e.g. 'my-first-post'
  sample: boolean;
  date?: string;
  readingTime?: string; // calculated automatically unless you set it
  cover?: string; // e.g. '/images/journal/my-first-post.jpg'
  images?: { src: string; alt: string; caption?: string }[];
  bg?: Partial<ArticleText>;
}

const sampleBody = [
  'This is a sample post that shows how a story looks on the blog. It is not a real experience.',
  'Replace it with your own text in src/data/journal.ts. Each item in the list becomes one paragraph, and you can add as many as you like.',
];

const sampleBodyBg = [
  'Това е примерна публикация, която показва как изглежда една история в блога. Не е истинско преживяване.',
  'Заменете я със собствен текст в src/data/journal.ts. Всеки елемент от списъка става отделен абзац и можете да добавите колкото искате.',
];

export const articles: Article[] = [
  {
    slug: 'sample-story-from-a-trip',
    title: 'Sample story from a trip',
    category: 'Places & Travel',
    excerpt: 'Placeholder for a place you went to and what stayed with you.',
    sample: true,
    body: sampleBody,
    bg: {
      title: 'Примерна история от пътуване',
      category: 'Места и пътувания',
      excerpt: 'Място за разказ за място, на което сте били, и какво ви е останало от него.',
      body: sampleBodyBg,
    },
  },
  {
    slug: 'sample-story-about-making-something',
    title: 'Sample story about making something',
    category: 'Art & Making',
    excerpt: 'Placeholder for something you made with your hands, just because.',
    sample: true,
    body: sampleBody,
    bg: {
      title: 'Примерна история за нещо създадено',
      category: 'Изкуство и занаят',
      excerpt: 'Място за нещо, което сте направили с ръцете си, просто така.',
      body: sampleBodyBg,
    },
  },
  {
    slug: 'sample-story-about-something-new',
    title: 'Sample story about trying something new',
    category: 'New Experiences',
    excerpt: 'Placeholder for a first time, a surprise, or something that changed your mind.',
    sample: true,
    body: sampleBody,
    bg: {
      title: 'Примерна история за нещо ново',
      category: 'Нови преживявания',
      excerpt: 'Място за първи път, изненада или нещо, което е променило мнението ви.',
      body: sampleBodyBg,
    },
  },
  {
    slug: 'sample-note-from-everyday-life',
    title: 'Sample note from everyday life',
    category: 'Everyday',
    excerpt: 'Placeholder for a small moment or thought that has nothing to do with work.',
    sample: true,
    body: sampleBody,
    bg: {
      title: 'Примерна бележка от всекидневието',
      category: 'Всекидневие',
      excerpt: 'Място за малък момент или мисъл, които нямат нищо общо с работата.',
      body: sampleBodyBg,
    },
  },
];
