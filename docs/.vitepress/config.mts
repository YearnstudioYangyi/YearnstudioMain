import { type DefaultTheme, defineConfig } from 'vitepress'

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
    lang: 'zh-Hans',
    title: '毅阳工作室',
    description: 'Yearnstudio',
    lastUpdated: true,
    cleanUrls: true,

    themeConfig: {
    // https://vitepress.dev/zh/reference/default-theme-config
        logo: 'https://vip.123pan.cn/1833307342/%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%86%85%E9%83%A8%E4%BD%BF%E7%94%A8/IMG_20240430_213221.png',
        // siteTitle: '',
        nav: nav(),
        sidebar: sidebar(),
        // socialLinks: [
        //   { icon: 'github', link: 'https://github.com/GuuGuai' },
        // ],

        externalLinkIcon: true,
        langMenuLabel: '切换语言',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        sidebarMenuLabel: '菜单',
        outline: { level: [2, 3], label: '目录' },
        returnToTopLabel: '返回顶部',
        editLink: {
            pattern: 'https://github.com/YearnstudioYangyi/YearnstudioMain/blame/main/docs/:path',
            text: '源代码',
        },
        lastUpdated: {
            text: '更新于',
            formatOptions: { dateStyle: 'short', timeStyle: 'medium' },
        },
        docFooter: { prev: '上一篇', next: '下一篇' },

        footer: {
            message: 'yearnstudio@outlook.com',
            copyright: `© 2020-${new Date().getFullYear()} 毅阳工作室 (Yearnstudio)`,
        },
    },

    head: [
        ['link', { rel: 'icon', href: 'https://vip.123pan.cn/1833307342/%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%86%85%E9%83%A8%E4%BD%BF%E7%94%A8/IMG_20240430_213221.png' }],
        ['link', { rel: 'stylesheet', href: 'https://lib.baomitu.com/font-awesome/6.5.1/css/all.min.css', media: 'none', onload: 'media="all"' }],
    ],
})

function nav(): DefaultTheme.NavItem[] {
    return [
        //{ text: '文档', link: '/server', activeMatch: '^/(?!about$).+' },
        { text: '友链', items: [
            { text: '博客', link: 'https://blog.yearnstudio.cn' },
            { text: '阳毅の博客', link: 'https://yangyi.yearnstudio.cn' },
            { text: 'Tigerの小窝', link: 'https://blog.tiger.scerpark.cn' },
        ] },
        { text: '关于', link: '/about' },
    ]
}

function sidebar(): DefaultTheme.Sidebar {
    return [
        { text: '关于',link: '/about' },
        { text: '成员', link: '/people',items: [
            { text: 'Tiger', link: '/peoples/tiger' }
        ],collapsed: false },
        { text: '项目', link: '/project'},
            /*{ text: '插件指令帮助', items: [
                { text: 'Ledger查熊', link: '/help/ledger' },
                { text: '群服互联Bot Connect', link: '/help/bot-connect' },
            ] },*/
        { text: '赞助', link: '/sponsor' },
        ]
}
