import taskLists from 'markdown-it-task-lists'

export default {
  title: 'daleks',
  description: '实时风控引擎',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  base: '/daleks-docs/',

  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],

  markdown: {
    headers: {
      level: [0, 1]
    },
	  config: (md) => {
      md.use(taskLists)
	  }
  },
  themeConfig: {
    nav: [],
    sidebar: [
      {
        text: '文档',
        collapsed: false,
        items: [
          { text: '介绍', link: '/introduction' },
          { text: '快速开始', link: '/getting-started' },
          { text: '参考文档', link: '/reference' },
          { text: '开发文档', link: '/develop' },
          { text: '部署', link: '/deploy' },
          { text: 'FAQ', link: '/faq' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/0x7a66/daleks' }
    ],
    footer: {
      message: '由 VitePress 强力驱动',
      copyright: 'Copyright © 2023-present Daleks'
    },
  },
}
