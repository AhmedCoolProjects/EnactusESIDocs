const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ENACTUS ESI",
  tagline:
    "Students Business Innovation to Create a Better and More Sustainable World",
  url: "https://enactus.codeesi.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "AhmedCoolProjects", // Usually your GitHub org/user name.
  projectName: "EnactusESI", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          lastVersion: "current",
          // Please change this to your repo.
          editUrl: "https://github.com/AhmedCoolProjects/EnactusESI/tree/main",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          include: ["**/*.{md,mdx}"],
          // Please change this to your repo.
          editUrl: "https://github.com/AhmedCoolProjects/EnactusESI/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "docs-events",
        path: "docs-events",
        routeBasePath: "docs-events",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/AhmedCoolProjects/CodeESIDocs/tree/main",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editCurrentVersion: true,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "ENACTUS ESI",
        logo: {
          alt: "ENACTUS ESI LOGO",
          src: "img/logos/logo-dark.svg",
          srcDark: "img/logos/logo-light.svg",
          width: 65,
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Projects",
          },
          {
            to: "/docs-events/intro",
            label: "Workshops & Events",
            position: "left",
            activeBaseRegex: `/docs-events/`,
          },
          {
            to: "/blog/intro",
            label: "Blog",
            position: "left",
          },
          {
            href: "https://github.com/AhmedCoolProjects/EnactusESI",
            label: "Github",
            position: "right",
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Projects",
            items: [
              {
                label: "2022",
                to: "/docs/2022/intro",
              },
            ],
          },
          {
            title: "Workshops & Events",
            items: [
              {
                label: "2022",
                to: "/docs-events/2022/intro",
              },
              {
                label: "Blog",
                to: "/blog/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github",
                href: "https://github.com/EnactusESIOrg",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/groups/603128047491429/",
              },
              {
                label: "Instagram",
                href: "https://www.facebook.com/groups/603128047491429/",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/codesi19",
              },
              {
                label: "YouTube",
                href: "https://youtube.com/channel/UCStGpNYpG_2ROS6E6T-mvPg",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://ahmedbargady.me" target="_blank">JinaCoolProjects</a>. Created with love by Ahmed Bargady`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: "YOUR_APP_ID",

      //   // Public API key: it is safe to commit it
      //   apiKey: "YOUR_SEARCH_API_KEY",

      //   indexName: "YOUR_INDEX_NAME",

      //   // Optional: see doc section below
      //   contextualSearch: true,

      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //   externalUrlRegex: "external\\.com|domain\\.com",

      //   // Optional: Algolia search parameters
      //   searchParameters: {},

      //   //... other Algolia params
      // },
    }),
};

module.exports = config;
