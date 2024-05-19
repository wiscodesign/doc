// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Code Glide",
  tagline: "Code Glide is a smart code dev platform",
  favicon: "img/favicon.ico",

  url: "http://www.codeglide.com",
  baseUrl: "/",

  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  plugins: [
    "./src/plugins/WebpackPlugin",
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "component",
        path: "components",
        routeBasePath: "components",
        sidebarPath: "./sidebars.js",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "apis",
        path: "apis",
        routeBasePath: "apis",
        sidebarPath: "./sidebars.js",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "cli",
        path: "cli",
        routeBasePath: "cli",
        sidebarPath: "./sidebars.js",
      },
    ],
  ],

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // 启用侧边栏
          sidebarPath: "./sidebars.js",
          breadcrumbs: true,
        },
        blog: {
          // 显示预估阅读时间
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themes: [
    '@docusaurus/theme-live-codeblock',
    ["@easyops-cn/docusaurus-search-local", { hashed: true, language: ["zh"] }],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Code Glide",
        logo: {
          alt: "Code Glide",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "documentSidebar",
            position: "left",
            label: "文档",
          },
          { to: "/components", label: "组件库", position: "left", sidebarId: "componentsSidebar" },
          { to: "/apis", label: "API", position: "left", sidebarId: "apisSidebar" },
          { to: "/cli", label: "构建", position: "left", sidebarId: "cliSidebar"},
          { to: "/blog", label: "博客", position: "left" },
          { href: "http://162.14.104.149/admin", label: "管理后台", position: "right" },
          {
            href: "https://github.com/orgs/CodeGlideWorkspace/repositories",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      metadata: [
        {
          name: "keywords",
          content: "编码，研发，前端脚手架，微前端，业务组合，业务沉淀",
        },
      ],
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
