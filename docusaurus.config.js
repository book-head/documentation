// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bookhead Documentation',
  tagline: 'Software for independent bookstores',
  favicon: 'img/bookhead-single.png',

  // Set the production url of your site here
  url: 'https://docs.bookhead.net',

  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'book-head',
  projectName: 'documentation',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/book-head/documentation/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/bookhead-dots.png',
      navbar: {
        logo: {
          alt: 'Bookhead Logo',
          src: 'img/bookhead-horizontal.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://bookhead.net',
            label: 'Bookhead site',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Help',
            items: [
              {
                label: 'Support',
                href: 'mailto:support@bookhead.net',
              },
              {
                label: 'Bookhead',
                href: 'https://bookhead.net'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bookhead. Built with Docusaurus.`,
      },
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
    }),
};

module.exports = config;
