module.exports = {
    base:'/wheels-ada/',
    title: 'Wheels-ada',
    description: '一个易用的UI框架',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '欢迎 Star', link: 'https://github.com/Adashuai5/wheels-ada'},
            {text: 'Github', link: 'https://github.com/Adashuai5'}
        ],
        sidebar: [
            {
                title: '介绍',
                collapsable: false,
                children: [
                    '/introduce/',
                ]
            },
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/tabs',
                    '/components/grid',
                    '/components/layout',
                    '/components/popover',
                    '/components/collapse',
                    '/components/toast'
                ]
            }
        ]
    }
}