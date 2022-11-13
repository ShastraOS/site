export const docsRoutes = [
  {
    label: 'Overview',
    pages: [
      { title: 'Introduction', slug: 'docs/introduction' },
      { title: 'Guide', slug: 'docs/guide' },
    ],
  },

  {
    label: 'Getting Started',
    pages: [
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
];

export const allDocsRoutes = docsRoutes.reduce((acc, curr) => {
  acc = [...acc, ...curr.pages];
  return acc;
}, []);
