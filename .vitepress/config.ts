import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/images/icon.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/images/icon.png' }]
  ],
  rewrites: {
    'zh/:rest*': ':rest*'
  },
  locales: {
    root: { label: '简体中文', lang: 'zh-CN' },
    en: { label: 'English', lang: 'en-US' }
  },
  title: "芭蕉扇",
  description: "开心移动应用",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/icon.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/basjoofan' }
    ],
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/markdown-examples' }
    ],
    sidebar: {
      '/guide/': [{
        text: '指南',
        items: [
          { text: '马克当扩展示例', link: '/guide/markdown-examples' },
          { text: '运行时接口示例', link: '/guide/api-examples' }
        ]
      }]
    },
    // editLink: {
    //     pattern: 'https://github.com/basjoofan/site/edit/main/docs/:path',
    //     text: '在 GitHub 上编辑此页面'
    // },
    footer: {
      // message: '基于 MIT 或 Apache 2.0 许可发布',
      copyright: '© 2026 芭蕉扇 &nbsp;&nbsp;&nbsp;&nbsp; <a href="/privacy">隐私政策</a> &nbsp;&nbsp; <a href="https://beian.miit.gov.cn/" target="_blank">辽ICP备2026002518号</a>'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
