import { lazy } from "react"
import Loadable from "ui-component/Loadable"

const Home = Loadable(lazy(() => import("views/home")));

const routes = [
    {
        path: '/homepage',
        name: 'home',
        til: '首页',
        element: Home,
        hidden: false,
    },
    {
        path: '/music',
        name: 'music',
        til: 'music',
        element: Loadable(lazy(() => import('views/music'))),
        hidden: false,
        children: [
            {
                path: '/music/albums',
                name: 'albums',
                til: 'albums',
                element: Loadable(lazy(() => import('views/music/album'))),
            },
            {
                path: '/music/single_album',
                name: 'single_album',
                til: 'single_album',
                element: Loadable(lazy(() => import('views/music/single_album'))),
            },
        ]
    },
    {
        path: '/trendings',
        name: 'trendings',
        til: 'trendings',
        element: Loadable(lazy(() => import('views/trendings'))),
        hidden: false,
        children: [
            {
                path: '/trendings/trending',
                name: 'trending',
                til: 'trending',
                element: Loadable(lazy(() => import('views/trendings/Trending'))),
            },
            {
                path: '/trendings/about',
                name: 'about',
                til: 'about',
                element: Loadable(lazy(() => import('views/trendings/about'))),
            },
            {
                path: '/trendings/404',
                name: '404',
                til: '404',
                element: Loadable(lazy(() => import('views/trendings/404'))),
            },
            {
                path: '/trendings/comingsoon',
                name: 'comingsoon',
                til: 'comingsoon',
                element: Loadable(lazy(() => import('views/trendings/Comingsoon'))),
            },
            {
                path: '/trendings/events',
                name: 'events',
                til: 'events',
                element: Loadable(lazy(() => import('views/trendings/Events'))),
            },
            {
                path: '/trendings/faq',
                name: 'FAQ',
                til: 'FAQ',
                element: Loadable(lazy(() => import('views/trendings/FAQ'))),
            },
            {
                path: '/trendings/team',
                name: 'team',
                til: 'team',
                element: Loadable(lazy(() => import('views/trendings/Team'))),
            },
            {
                path: '/trendings/timetable',
                name: 'timetable',
                til: 'timetable',
                element: Loadable(lazy(() => import('views/trendings/Timetable'))),
            },
        ]
    },
    {
        path: '/shortcodes_widgets',
        name: 'Shortcodes & Widgets',
        til: 'Shortcodes & Widgets',
        element: Loadable(lazy(() => import('views/shortcodes_widgets'))),
        hidden: false,
        children: [
            {
                path: '/shortcodes_widgets/Typography',
                name: 'Typography',
                til: 'Typography',
                element: Loadable(lazy(() => import('views/shortcodes_widgets/Typography'))),
            },
            {
                path: '/shortcodes_widgets/Buttons',
                name: 'Buttons',
                til: 'Buttons',
                element: Loadable(lazy(() => import('views/shortcodes_widgets/Buttons'))),
            },
            {
                path: '/shortcodes_widgets/Teasers',
                name: 'Teasers',
                til: 'Teasers',
                element: Loadable(lazy(() => import('views/shortcodes_widgets/Teasers'))),
            },
            {
                path: '/shortcodes_widgets/Progress',
                name: 'Progress',
                til: 'Progress',
                element: Loadable(lazy(() => import('views/shortcodes_widgets/Progress'))),
            },
            {
                path: '/shortcodes_widgets/Tabs_Collapse',
                name: 'Tabs_Collapse',
                til: 'Tabs_Collapse',
                element: Loadable(lazy(() => import('views/shortcodes_widgets/Tabs_Collapse'))),
            },
            {
                path: '/shortcodes_widgets/Bootstrap_Elements',
                name: 'Bootstrap_Elements',
                til: 'Bootstrap_Elements',
                element: Loadable(lazy(() => import('views/shortcodes_widgets/Bootstrap_Elements'))),
            },
            {
                path: '/shortcodes_widgets/Widgets',
                name: 'Widgets',
                til: 'Widgets',
                element: Loadable(lazy(() => import('views/shortcodes_widgets/Widgets'))),
            },
            {
                path: '/shortcodes_widgets/Animation',
                name: 'Animation',
                til: 'Animation',
                element: Loadable(lazy(() => import('views/shortcodes_widgets/Animation'))),
            },
            {
                path: '/shortcodes_widgets/Template_Icons',
                name: 'Template_Icons',
                til: 'Template_Icons',
                element: Loadable(lazy(() => import('views/shortcodes_widgets/Template_Icons'))),
            },
            {
                path: '/shortcodes_widgets/Social_Icons',
                name: 'Social_Icons',
                til: 'Social_Icons',
                element: Loadable(lazy(() => import('views/shortcodes_widgets/Social_Icons'))),
            },
        ]
    },
    {
        path: '/blog',
        name: 'blog',
        til: 'blog',
        element: Loadable(lazy(() => import('views/blog'))),
        hidden: false,
        children: [
            {
                path: '/blog/blog-right',
                name: 'blog-right',
                til: 'blog-right',
                element: Loadable(lazy(() => import('views/blog/rightSidebar'))),
            },
            {
                path: '/blog/blog-left',
                name: 'blog-left',
                til: 'blog-left',
                element: Loadable(lazy(() => import('views/blog/leftSidebar'))),
            },
            {
                path: '/blog/blog-full',
                name: 'blog-full',
                til: 'blog-full',
                element: Loadable(lazy(() => import('views/blog/noSidebar'))),
            },
            {
                path: '/blog/blog-mosaic',
                name: 'blog-mosaic',
                til: 'blog-mosaic',
                element: Loadable(lazy(() => import('views/blog/blogGrid'))),
            },
        ]
    },
    {
        path: '/post',
        name: 'post',
        til: 'post',
        element: Loadable(lazy(() => import('views/blog/post'))),
        hidden: false,
        children: [
            {
                path: '/post/post-right',
                name: 'post-right',
                til: 'post-right',
                element: Loadable(lazy(() => import('views/blog/post/rightSidebar'))),
            },
            {
                path: '/post/post-left',
                name: 'post-left',
                til: 'post-left',
                element: Loadable(lazy(() => import('views/blog/post/leftSidebar'))),
            },
            {
                path: '/post/post-full',
                name: 'post-full',
                til: 'post-full',
                element: Loadable(lazy(() => import('views/blog/post/noSidebar'))),
            },
        ]
    },
    {
        path: '/video-post',
        name: 'video-post',
        til: 'video-post',
        element: Loadable(lazy(() => import('views/blog/videoPost'))),
        hidden: false,
        children: [
            {
                path: '/video-post/video-post-right',
                name: 'video-post-right',
                til: 'video-post-right',
                element: Loadable(lazy(() => import('views/blog/videoPost/rightSidebar'))),
            },
            {
                path: '/video-post/video-post-left',
                name: 'video-post-left',
                til: 'video-post-left',
                element: Loadable(lazy(() => import('views/blog/videoPost/leftSidebar'))),
            },
            {
                path: '/video-post/video-post-full',
                name: 'video-post-full',
                til: 'video-post-full',
                element: Loadable(lazy(() => import('views/blog/videoPost/noSidebar'))),
            },
        ]
    },
    {
        path: '/searchPage',
        til: 'searchPage',
        element: Loadable(lazy(() => import('views/searchPage'))),
        hidden: true,
    },
    {
        path: '/my_playLst',
        til: 'myPlayLst',
        element: Loadable(lazy(() => import('views/MyPlayList'))),
        hidden: true,
        children: [
            {
                path: '/my_playLst',
                til: 'playList',
                element: Loadable(lazy(() => import('views/MyPlayList/my_playList'))),
            },
            {
                path: '/my_playLst/playList',
                til: 'playList',
                element: Loadable(lazy(() => import('views/MyPlayList/playListInfo'))),
            },
        ]
    },
    {
        path: '*',
        til: '*',
        element: Loadable(lazy(() => import('views/404'))),
        hidden: false,
    },
    {
        path: '/login',
        til: 'login',
        element: Loadable(lazy(() => import('views/login'))),
        hidden: true,
    },
    {
        path: '/forget',
        til: 'forget',
        element: Loadable(lazy(() => import('views/forget'))),
        hidden: true,
    },
    {
        path: '/reset',
        til: 'reset',
        element: Loadable(lazy(() => import('views/reset'))),
        hidden: true,
    },
    {
        path: '/signUp',
        til: 'signUp',
        element: Loadable(lazy(() => import('views/signUp'))),
        hidden: true,
    },
]

export default routes