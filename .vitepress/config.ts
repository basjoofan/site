import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/images/icon.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/images/icon.png' }]
  ],
  rewrites: {
    'en/:rest*': ':rest*'
  },
  locales: {
    root: { label: 'English', lang: 'en-US' },
    zh: { label: '简体中文', lang: 'zh-Hans' }
  },
  title: "Basjoofan",
  description: "Continuous Testing|cloud native http api echo test and performance test",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/icon.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/markdown-examples' }
    ],
    sidebar: {
      '/guide/': [{
        text: 'Guide',
        items: [
          { text: 'Markdown Examples', link: '/guide/markdown-examples' },
          { text: 'Runtime API Examples', link: '/guide/api-examples' }
        ]
      }]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/basjoofan' }
    ],
    // editLink: {
    //   pattern: 'https://github.com/basjoofan/site/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },
    footer: {
      // message: 'Released under the MIT or Apache 2.0 License',
      copyright: '© 2026 Basjoofan  <a href="https://beian.miit.gov.cn/" target="_blank">辽ICP备2026002518号</a>'
    },
  }
})
