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
    email: 'stefina.varadzhakova99@gmail.com',
    phone: '+359 87 600 6300',
    location: 'Sofia / Burgas',
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

  // Skill pills shown under the filters on the Work page.
  workSkills: {
    architecture: ['Architectural Design', 'Interior Design', 'ArchiCAD', 'AutoCAD', 'Lumion', 'Photoshop', '3D Modelling & Rendering', 'InDesign', 'Drawing', 'Composition'],
    design: ['Branding', 'Figma', 'Claude', 'Adobe Creative Cloud', 'Vibe Coding', 'Higgsfield', 'Visual Communication','Dynamic Banners', 'Email Visuals', 'Video', 'User Research', 'Information Architecture', 'UX/UI', 'Prototyping', 'Design Systems', 'Web Design'],
  },

  about: {
    intro:
      // Words between ** are shown in bold.
      'Multidisciplinary professional with a background in **architecture**, **product design**, and **digital marketing**. Combining creative thinking, analytical skills, and technology to develop **user-centered, business-driven solutions**.',
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
      'Passionate about innovation, human behavior, and the intersection of business, design, and technology.',
    timeline: [
      {
        period: '04.2025 – now',
        role: 'Web Designer',
        place: 'TieBreak',
        about: 'FinTech and MarTech company operating across multiple international markets',
        details: [
          'Web & UI/UX Design: Design websites, landing pages, and user-centered digital experiences',
          'Digital Marketing: Create assets for PPC, SEO, CRM, email, and affiliate campaigns',
          'Branding & Visual Design: Develop brand identities, campaign visuals, and digital assets',
          'AI & Digital Solutions: Develop AI-powered tools, internal platforms, and workflow automations',
          'Cross-functional Collaboration: Collaborate with marketing, development, and business teams',
        ],
      },
      {
        period: '04.2024 – 12.2024',
        role: 'Product Designer, Mobile App & Web',
        place: 'Tuk-Tam',
        about: 'Non-profit organization connecting young Bulgarians with education and career opportunities',
        details: [],
        roles: [{
          title: 'Product Designer',
          period: '07.2024 – 12.2024',
          details: [
          'Designed end-to-end UX and UI for a consumer mobile app',
          'Created low- and high-fidelity prototypes and complete user flows',
          'Led 25+ user interviews, managed recruitment and translated research insights into design solutions',
          'Built and maintained reusable components and a design system',
          'Iterated designs through implementation and performed design quality checks',
          'Collaborated with developers on mobile and website implementation',
          'Designed pages for the official website, plus presentations and brand assets',
          ],
        }, {
          title: 'Product Manager, Internship',
          period: '04.2024 – 06.2024',
          details: [
          'Product Development: Supported mobile app and web platform improvements, from product planning to feature implementation',
          'Project Coordination: Managed tasks, workflows, and deadlines in collaboration with the development team',
          'UI/UX Collaboration: Contributed to interface design and usability improvements',
          'Operations & Events: Supported event planning and operational activities',
          ],
        }],
      },
      {
        period: '03.2023 – 03.2024',
        role: 'Architect',
        place: 'AZ Partners',
        about: '',
        details: [
          'Architectural drawings in ArchiCAD and AutoCAD',
          'Print design materials',
          '3D visualisation and post-production in Lumion and Photoshop',
        ],
      },
      {
        period: '6 months',
        role: 'Interior Design Internship',
        place: '',
        about: '',
        details: ['Worked on interiors for homes and apartments'],
      },
    ],
    education: [
      {
        item: 'University of Architecture, Civil Engineering and Geodesy',
        sub: 'Master of Architecture',
        note: '',
        about: [
          "Master's Degree in Architecture, specializing in Public Buildings.",
          'Graduation project recognized with a Best Project award by the Chamber of Architects in Bulgaria.',
        ],
        groups: [
          {
            title: 'Architecture & Technical',
            items: ['Architectural & Interior Design', '3D Visualization', 'Technical Drawing & Documentation', 'Spatial Planning'],
          },
          {
            title: 'Creative & Analytical',
            items: ['Concept Development', 'Visual Communication', 'Research & Problem Solving'],
          },
          { title: 'Project & Management', items: ['Project Planning', 'Team Collaboration'] },
        ],
      },
      { item: 'Mathematics High School "Akad. Nikola Obreshkov", Burgas', sub: 'Specialising in Mathematics and English', note: '' },
    ],
    certificates: [
      {
        item: 'SoftUni Creative',
        note: '',
        groups: [
          { title: 'Design Fundamentals', items: ['Graphic Design', 'Layout & Composition', 'Typography & Color Theory'] },
          { title: 'Creative & Technical Skills', items: ['Brand Identity', 'Visual Communication', 'Adobe Creative Cloud'] },
        ],
      },
      {
        item: 'Telerik Academy Upskill: UI/UX Design',
        note: '',
        about: ['Group project: WasteLess, a zero-waste kitchen app for an environmental non-profit.'],
        groups: [
          { title: 'Research & Analysis', items: ['User Behavior', 'User Interviews', 'Research Analysis'] },
          { title: 'Product & Structure', items: ['Business Goals', 'Navigation', 'Content Organization'] },
          { title: 'Teamwork', items: ['Collaboration in a Team of Four', 'Working with Mentors'] },
        ],
      },
      { item: 'English C1, Cambridge certificate', note: '' },
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
    // Icons available: fitness, tennis, running, games, drawing, workshops, coffee, travel, sea
    interests: [
      { icon: 'fitness', label: 'Fitness' },
      { icon: 'tennis', label: 'Tennis' },
      { icon: 'running', label: 'Running' },
      { icon: 'games', label: 'Board games' },
      { icon: 'drawing', label: 'Drawing' },
      { icon: 'workshops', label: 'All kinds of workshops' },
      { icon: 'coffee', label: 'Coffee lover' },
      { icon: 'travel', label: 'Traveling' },
      { icon: 'sea', label: 'Sea lover' },
    ],
  },
};
