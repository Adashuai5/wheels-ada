module.exports = {
    base:'/wheels/',
    title: 'Wheels',
    description: '一个易用的UI框架',
    themeConfig: {
        nav: [
            {
                text: '入门', items: [
                    {text: 'Chinese', link: '/language/chinese'},
                    {text: 'Japanese', link: '/language/japanese'}
                ]
            },
            {text: 'Guide', link: '/guide/'},
            {text: 'External', link: 'https://google.com'},
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