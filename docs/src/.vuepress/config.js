const { description } = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'XBGE documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#7d69f6' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'Overview',
        link: '/overview/',
      },
      {
        text: 'Website',
        link: 'https://expedition-grundeinkommen.de',
      },
    ],
    sidebar: {
      '/overview/': [
        {
          title: 'Next-Projekt',
          collapsable: true,
          children: ['next-new-component'],
        },
        {
          title: 'Frontend',
          collapsable: false,
          children: ['frontend', 'profile'],
        },
        {
          title: 'Netlify',
          collapsable: false,
          children: ['netlify'],
         },
         {
          title: 'AWS, servers and backend',
          collapsable: false,
          children: ['aws','app-server'],
        },
         {
          title: 'Admin Panel',
          collapsable: false,
          children: ['admin'],
        },
        {
          title: 'Directus',
          collapsable: false,
          children: ['directus'],
        },
          {
          title: 'Mailjet',
          collapsable: false,
          children: ['mailjet'],
        },
        {
          title: 'Other services',
          collapsable: false,
          children: ['other-services'],
        },
        {
          title: 'Design',
          collapsable: true,
          children: ['design'],
        },
        {
          title: 'Support',
          collapsable: false,
          children: ['support'],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};
