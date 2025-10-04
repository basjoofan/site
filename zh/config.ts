import { defineAdditionalConfig } from 'vitepress'

export default defineAdditionalConfig({
    title: "芭蕉扇",
    description: "持续测试|云原生接口回波测试和性能测试",
    themeConfig: {
        nav: [
            { text: '首页', link: '/zh' },
            { text: '指南', link: '/zh/guide/markdown-examples' }
        ],
        sidebar: {
            '/zh/guide/': [{
                text: '指南',
                items: [
                    { text: '马克当扩展示例', link: '/zh/guide/markdown-examples' },
                    { text: '运行时接口示例', link: '/zh/guide/api-examples' }
                ]
            }]
        },
        editLink: {
            pattern: 'https://github.com/basjoofan/site/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },
        footer: {
            message: '基于 MIT 或 Apache 2.0 许可发布',
            copyright: '版权所有 © 2025 芭蕉扇'
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
