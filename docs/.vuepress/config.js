module.exports = {
    base:'/wheels/',
    title: 'Wheels',
    description: '一个易用的UI框架',
    themeConfig: {
        nav: [
            {text: 'Star', link: 'https://github.com/Adashuai5/wheels'},
            {text: 'Github', link: 'https://github.com/Adashuai5'}
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/tabs',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                    '/components/popover',
                ]
            },
        ]
    }
}