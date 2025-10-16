import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Automatic CSS Documentation',
  tagline: '#1 Framework for WordPress Page Builders',
  favicon: 'img/favicon.png',
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: '689BF4C41D86E4E4',
      },
    }
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.automaticcss.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'kevingeary', // Usually your GitHub org/user name.
  //projectName: 'automatic.css', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					routeBasePath: '/',
          showLastUpdateTime: true,
					showLastUpdateAuthor: false,
          lastVersion: 'current',
          versions: {
            current: {
              label: '4.x',
              path: '/',
            },
            '3.0': {
              label: '3.x',
              path: '/3.0',
              banner: 'none',
            },
          },
				},
				blog: false,
				theme: {
					customCss: './src/css/custom.css'
				}
			} satisfies Preset.Options
		]
	],
  	plugins: [],

  themeConfig: {
    image: 'img/docs-cover-image.png',
    navbar: {
      title: 'AutomaticCSS',
      logo: {
        alt: 'ACSS Logo',
        src: 'img/acss-logo-dark.svg',
        srcDark: 'img/acss-logo-white.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'accessibility/clickable-parent',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        {to: 'https://automaticcss.com/pricing', label: 'Purchase', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Digital Gravy. AutomaticCSS™ is a Trademark of Digital Gravy.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
			appId: '4GXPPHFVQA',
			apiKey: '99a3039cdca258dd7c6d55c38310cd85',
			indexName: 'docs_automaticcss_com_4gxpphfvqa_pages',
			contextualSearch: true,
			searchParameters: {},
			externalUrlRegex: 'external\\.com|domain\\.com',
			replaceSearchResultPathname: {
				from: '/',
				to: '/',
			},
			debug: true,
		}
  } satisfies Preset.ThemeConfig,
};

export default config;
