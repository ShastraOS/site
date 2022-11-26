export const docsRoutes = [
  {
    label: 'Overview',
    pages: [
      { title: 'Introduction', slug: 'docs/overview' },
    ],
  },

  {
    label: 'Getting Started',
    pages: [
      { title: 'Preview Installation', slug: 'docs/runpreview' },
      { title: 'Installation', slug: 'docs/installation' },
      { title: 'Partitons', slug: 'docs/partitions' },
    ],
  },

  {
    label: 'Post Installation',
    pages: [
      { title: 'Updates', slug: 'docs/updates' },
      { title: 'Packages', slug: 'docs/packages' },
    ],
  },
  {
    label: 'Learn More',
    pages: [
      { title: 'FAQ', slug: 'docs/faq' },
      { title: 'Changelog', slug: 'docs/changelog' },
    ],
  },
  {
    label: 'Terms and Policies',
    pages: [
      { title: 'Preview Terms', slug: 'docs/previewterms' }
    ]
  }
];

export const allDocsRoutes = docsRoutes.reduce((acc, curr) => {
  acc = [...acc, ...curr.pages];
  return acc;
}, []);
