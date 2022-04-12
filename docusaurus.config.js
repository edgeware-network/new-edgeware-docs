// module.exports = {
//   title: 'Edgeware',
//   tagline: 'Dinosaurs are cool',
//   url: 'https://edgewa.re/',
//   baseUrl: '/',
//   onBrokenLinks: 'throw',
//   onBrokenMarkdownLinks: 'warn',
//   favicon: 'img/favicon.ico',
//   organizationName: 'edgeware-network', // Usually your GitHub org/user name.
//   projectName: 'edgeware', // Usually your repo name.
//   presets: [
//     '@docusaurus/preset-classic',
//     {
//       docs: {
//         routeBasePath: '/', // Serve the docs at the site's root
//         /* other docs plugin options */
//       },
//       blog: false, // Optional: disable the blog plugin
//       // ...
//     },
//   ],
// };


// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion


// /** @type {import('@docusaurus/types').Config} */
// const config = {
//   title: 'Edgeware',
//   tagline: 'Dinosaurs are cool',
//   url: 'https://edgewa.re/',
//   baseUrl: '/',
//   onBrokenLinks: 'throw',
//   onBrokenMarkdownLinks: 'warn',
//   favicon: 'img/edgeware-main-logomark.svg',
//   organizationName: 'edgeware-network', // Usually your GitHub org/user name.
//   projectName: 'edgeware', // Usually your repo name.

//   presets: [
//     [
//       'classic',
//       /** @type {import('@docusaurus/preset-classic').Options} */
//       ({
//         docs: {
//           routeBasePath: '/',//require.resolve('./sidebars.js'),
//           // Please change this to your repo.
//           editUrl: 'https://github.com/edgeware-network/new-edgeware-docs',
//         },
//         blog: false,
//         // {
//         //   showReadingTime: true,
//         //   // Please change this to your repo.
//         //   editUrl:
//         //     'https://github.com/edgeware-network/new-edgeware-docs',
//         // },
//         theme: {
//           customCss: require.resolve('./src/css/custom.css'),
//         },
//       }),
//     ],
//   ],

//   themeConfig:
//     /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
//     ({
//       navbar: {
//         // title: 'Edgeware',
//         logo: {
//           alt: 'My Site Logo',
//           src: 'img/edgeware-main-logomark.svg',
//         },
//         items: [
//           {
//             type: 'doc',
//             docId: 'welcome/welcome',
//             position: 'left',
//             label: 'Docs',
//           },
//           // {to: '/blog', label: 'Blog', position: 'left'},
//           {
//             href: 'https://github.com/edgeware-network/new-edgeware-docs',
//             label: 'GitHub',
//             position: 'right',
//           },
//         ],
//       },
//       prism: {
//         theme: lightCodeTheme,
//         darkTheme: darkCodeTheme,
//       },
//     }),
// };

// module.exports = config;

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
  title: 'Edgeware',
  tagline: 'Dinosaurs are cool',
  url: 'https://edgewa.re/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/edgeware-main-logomark.svg',
  organizationName: 'edgeware-network', // Usually your GitHub org/user name.
  projectName: 'edgeware', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          routeBasePath: '/',//require.resolve('./sidebars.js'),
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/edgeware-network/new-edgeware-docs',
        },
        blog: false,
        // {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/edgeware-network/new-edgeware-docs',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: 'Edgeware',
        logo: {
          alt: 'My Site Logo',
          src: 'img/edgeware-main-logomark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'welcome/welcome',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/edgeware-network/new-edgeware-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}