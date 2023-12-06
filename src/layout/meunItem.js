const items = [
    {
        label: 'HOMEPAGE',
        key: 'home1',
        children: [
            {
                type: 'group',
                children: [
                    {
                        label: 'HOMEPAGE',
                        key: 'homepage',
                    },
                ]
            }
        ],
    },
    {
        label: 'TRENDING',
        key: 'trending',
        children: [
            {
                type: 'group',
                children: [
                    {
                        label: 'trending',
                        key: 'trendings/trending',
                    },
                    {
                        label: 'Shortcodes & Widgets',
                        key: 'trendings/shortcodes_widgets',
                        children: [
                            {
                                type: 'group',
                                children: [
                                    {
                                        label: 'Typography',
                                        key: 'shortcodes_widgets/Typography',
                                    },
                                    {
                                        label: 'Buttons',
                                        key: 'shortcodes_widgets/Buttons',
                                    },
                                    {
                                        label: 'Teasers',
                                        key: 'shortcodes_widgets/Teasers',
                                    },
                                    {
                                        label: 'Progress',
                                        key: 'shortcodes_widgets/Progress',
                                    },
                                    {
                                        label: 'Tabs & Collapse',
                                        key: 'shortcodes_widgets/Tabs_Collapse',
                                    },{
                                        label: 'Bootstrap Elements',
                                        key: 'shortcodes_widgets/Bootstrap_Elements',
                                    },
                                    {
                                        label: 'Widgets',
                                        key: 'shortcodes_widgets/Widgets',
                                    },
                                    {
                                        label: 'Animation',
                                        key: 'shortcodes_widgets/Animation',
                                    },
                                    {
                                        label: 'Template Icons',
                                        key: 'shortcodes_widgets/Template_Icons',
                                    },
                                    {
                                        label: 'Social Icons',
                                        key: 'shortcodes_widgets/Social_Icons',
                                    },
                                ]
                            }
                        ],
                    },
                    {
                        label: 'about',
                        key: 'trendings/about',
                    },
                    {
                        label: 'timetable',
                        key: 'trendings/timetable',
                    },
                    {
                        label: 'events',
                        key: 'trendings/events',
                    },
                    {
                        label: 'team',
                        key: 'trendings/team',
                    },
                    {
                        label: 'Comingsoon',
                        key: 'trendings/comingsoon',
                    },
                    {
                        label: 'faq',
                        key: 'trendings/faq',
                    },
                    {
                        label: '404',
                        key: 'trendings/404',
                    },
                ],
            },
        ],
    },
    {
        label: 'MUSIC',
        key: 'music',
        children: [
            {
                type: 'group',
                children: [
                    {
                        label: 'ALBUMS',
                        key: 'music/albums',
                    },
                    {
                        label: 'SINGLE ALBUM',
                        key: 'music/single_album',
                    },
                ]
            }
        ],
    },
    {
        label: 'FEATURES',
        key: 'features',
        children: [
            {
                type: 'group',
                children: [
                    {
                        label: 'FEATURES1',
                        key: 'features1',
                    },
                    {
                        label: 'FEATURES 2',
                        key: 'features2',
                    },
                    {
                        label: 'FEATURES 3',
                        key: 'features3',
                    },
                    {
                        label: 'FEATURES 4',
                        key: 'features4',
                    },
                ],
            },
        ],
    },
    {
        label: "PHOTOS",
        key: 'photos',
        children: [
            {
                type: 'group',
                children: [
                    {
                        label: 'PHOTOS1',
                        key: 'photos1',
                    },
                    {
                        label: 'PHOTOS 2',
                        key: 'photos2',
                    },
                    {
                        label: 'PHOTOS 3',
                        key: 'photos3',
                    },
                    {
                        label: 'PHOTOS 4',
                        key: 'photos4',
                    },
                ],
            },
        ],
    },
    {
        label: "BLOG",
        key: 'blog',
        children: [
            {
                type: 'group',
                children: [
                    {
                        label: 'BLOG1',
                        key: 'blog1',
                    },
                    {
                        label: 'BLOG 2',
                        key: 'blog2',
                    },
                    {
                        label: 'BLOG 3',
                        key: 'blog3',
                    },
                    {
                        label: 'BLOG 4',
                        key: 'blog4',
                    },
                ],
            },
        ],
    },
    {
        label: "STORE",
        key: 'store',
        children: [
            {
                type: 'group',
                children: [
                    {
                        label: 'STORE1',
                        key: 'store1',
                    },
                    {
                        label: 'STORE 2',
                        key: 'store2',
                    },
                    {
                        label: 'STORE 3',
                        key: 'store3',
                    },
                    {
                        label: 'STORE 4',
                        key: 'store4',
                    },
                ],
            },
        ],
    },
    {
        label: "CONTACT",
        key: 'contact',
        children: [
            {
                type: 'group',
                children: [
                    {
                        label: 'CONTACT1',
                        key: 'contact1',
                    },
                    {
                        label: 'CONTACT 2',
                        key: 'contact2',
                    },
                    {
                        label: 'CONTACT 3',
                        key: 'contact3',
                    },
                    {
                        label: 'CONTACT 4',
                        key: 'contact4',
                    },
                ],
            },
        ],
    },
    {
        label: "SONGS",
        key: 'songs',
        children: [
            {
                type: 'group',
                children: [
                    {
                        label: 'SONGS1',
                        key: 'songs1',
                    },
                    {
                        label: 'Option 2',
                        key: 'songs2',
                    },
                    {
                        label: 'Option 3',
                        key: 'songs3',
                    },
                    {
                        label: 'Option 4',
                        key: 'songs4',
                    },
                ],
            },
        ],
    },
    {
        label: "LOGIN",
        key: 'login1',
        children: [
            {
                type: 'group',
                children: [
                    {
                        label: 'LOGIN',
                        key: 'login',
                    },
                ]
            }
        ],
    },
];

export default items