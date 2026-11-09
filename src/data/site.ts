// EDIT ME: your name, copy, contact details and site switches all live here.
// Text in [square brackets] is a placeholder to replace with verified facts.

export const site = {
  name: 'Stefina Varadzhakova',
  title: 'Multidisciplinary Designer',
  tagline: 'Design across disciplines.',
  taglineAccent: 'across', // this word is set in italics in the headline
  descriptor: 'Architecture · Digital Experiences · Visual Communication',
  description:
    'Portfolio of a multidisciplinary designer working across architecture, digital experiences and visual communication.',

  // Show drawing-style numbers such as A-01 on projects. Set to false to hide them.
  showSheetNumbers: true,

  // Leave a value empty ('') and its link stays hidden, so nothing is ever a dead link.
  contact: {
    email: '',
    linkedin: '',
    instagram: '',
    invitation: "Interested in collaborating or exchanging ideas? Let's connect.",
  },

  // When a PDF is ready: put it in public/pdfs/ and set available to true.
  // Set showComingSoon to false to hide unavailable PDFs entirely.
  pdfs: {
    showComingSoon: true,
    items: [
      {
        key: 'architecture',
        label: 'Architecture Portfolio (PDF)',
        file: '/pdfs/architecture-portfolio.pdf',
        available: false,
      },
      {
        key: 'digital',
        label: 'Digital Design Portfolio (PDF)',
        file: '/pdfs/digital-design-portfolio.pdf',
        available: false,
      },
    ],
  },

  // Set to false to show the "Journal is taking shape" state instead of entries.
  journalEnabled: true,

  home: {
    eyebrow: 'Multidisciplinary Designer',
    body: "I'm a multidisciplinary designer with a background in architecture and experience across digital products, web design, and visual communication. My work moves between physical and digital environments, combining conceptual thinking, visual craft, and an interest in how people experience the world around them.",
    cta: 'Explore selected work',
    shortAbout:
      'Architecture taught me to think about structure, hierarchy and how people move through a space. I bring the same questions to screens, brands and images.',
  },

  disciplines: [
    {
      code: 'A',
      name: 'Architecture',
      description: 'Spatial thinking, buildings, concepts, drawings and presentations.',
      href: '/work/architecture',
      category: 'architecture',
    },
    {
      code: 'D',
      name: 'Digital Products & Web',
      description: 'Product design, UI/UX, websites and landing pages.',
      href: '/work/digital',
      category: 'digital',
    },
    {
      code: 'V',
      name: 'Visual Communication',
      description: 'Branding, graphic design, campaigns and editorial work.',
      href: '/work?filter=design',
      category: 'visual',
    },
  ],

  about: {
    intro:
      'I work across architecture, digital experiences and visual communication. The disciplines are different; the habit of mind that connects them is the same.',
    story: [
      {
        heading: 'Architectural education',
        text: "I completed a master's degree in Architecture at the University of Architecture, Civil Engineering and Geodesy, studying architectural and interior design alongside drawing, abstract painting, colour theory, composition, typography, and the history of art and architecture.",
      },
      {
        heading: 'Architectural practice',
        text: '[What you did in practice and what you learned about building real things.]',
      },
      {
        heading: 'Product and UI/UX',
        text: 'At Tuk-Tam I designed a consumer mobile app and website end to end, from user interviews and flows to prototypes, components and a design system.',
      },
      {
        heading: 'Web, graphic and digital marketing',
        text: 'At TieBreak I design landing pages, campaigns, emails and digital assets for multiple international markets, working closely with frontend developers.',
      },
    ],
    focus:
      "I'm a Sofia-based designer with a passion for merging technology and design. I've worked across various disciplines, embracing challenges that require creative, straightforward solutions. Skilled in both visual and conceptual design, I bring clarity and precision to every project.",
    timeline: [
      {
        period: '04.2025 – now',
        role: 'Web Designer',
        place: 'TieBreak',
        about: 'FinTech and MarTech company operating across multiple international markets',
        details: [
          'Designed landing pages and web experiences aligned with brand, product and marketing goals',
          'Created UI layouts, campaign pages, email designs and digital assets across multiple international markets',
          'Created static and dynamic campaign creatives, including HTML5 banners',
          'Designed logos and branding',
          'Collaborated with frontend developers on implementation and design quality',
          'Used Figma and AI-assisted workflows to speed up design production and iteration',
          'Supported localization, visual consistency and quality checks across digital touchpoints',
        ],
      },
      {
        period: '04.2024 – 12.2024',
        role: 'Product Designer, Mobile App & Web',
        place: 'Tuk-Tam',
        about: 'Non-profit organization connecting young Bulgarians with education and career opportunities',
        details: [
          'Designed end-to-end UX and UI for a consumer mobile app',
          'Created low- and high-fidelity prototypes and complete user flows',
          'Led 25+ user interviews, managed recruitment and translated research insights into design solutions',
          'Built and maintained reusable components and a design system',
          'Iterated designs through implementation and performed design quality checks',
          'Collaborated with developers on mobile and website implementation',
          'Designed pages for the official website, plus presentations and brand assets',
        ],
      },
    ],
    education: [
      { item: "Master's degree in Architecture, University of Architecture, Civil Engineering and Geodesy", note: '2018 – 2024' },
      { item: '[Recognition: confirm exact wording before publishing]', note: '[Year]' },
      { item: 'SoftUni Creative: Graphic Design, 3D Visualisation and Modelling, UI/UX Design', note: '2020 – 2023' },
      { item: 'Telerik Academy Upskill: UI/UX Design', note: '[Year]' },
      { item: 'SoftUni: JavaScript', note: '[Year]' },
      { item: 'English C1, Cambridge certificate', note: 'Language' },
    ],
    beyond: {
      intro:
        'Outside studio work I paint, have shown work in an exhibition, and lead Art & Wine workshops. Teaching people to make something with their hands keeps me close to how creativity actually feels.',
      items: [
        { title: 'Exhibition', text: 'My own exhibition by the age of 18.' },
        {
          title: 'Making',
          text: 'Creative workshops in silk and textile painting, iconography, felting, embroidery, clay, recycled materials, fashion design and outdoor painting.',
        },
        { title: 'Art & Wine workshops', text: '[What the workshops are and who they are for.]' },
        {
          title: 'Community',
          text: 'Erasmus+ projects in Bulgaria, Italy and Greece; member of the "Chance for Children and Nature of Bulgaria" Foundation; volunteering at the CineLibre film festival.',
        },
      ],
    },
    tools: [
      'Figma',
      'Auto Layout',
      'Components & Variants',
      'Prototyping',
      'Design Systems',
      'Photoshop',
      'Illustrator',
      'InDesign',
      'Spline',
      'Google Web Designer',
      'Claude',
      'ChatGPT',
      'Higgsfield',
      'User Interviews',
      'Drawing',
      'Digital Drawing',
      '3D Modelling & Rendering',
      'Project Management',
      'Teamwork',
    ],
  },
};
