import { defineAdditionalConfig } from 'vitepress'

export default defineAdditionalConfig({
    title: "Basjoofan",
    description: "Happy Mobile App",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/en' },
            { text: 'Guide', link: '/en/guide/markdown-examples' }
        ],
        sidebar: {
            '/en/guide/': [{
                text: 'Guide',
                items: [
                    { text: 'Markdown Examples', link: '/en/guide/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/en/guide/api-examples' }
                ]
            }]
        },
        // editLink: {
        //   text: 'Edit this page on GitHub'
        // },
        footer: {
            // message: 'Released under the MIT or Apache 2.0 License',
            copyright: '© 2026 Basjoofan &nbsp;&nbsp;&nbsp;&nbsp; <a href="/privacy">Privacy</a> &nbsp;&nbsp; <a href="https://beian.miit.gov.cn/" target="_blank">Liao ICP No.2026002518</a>'
        },
    }
})
