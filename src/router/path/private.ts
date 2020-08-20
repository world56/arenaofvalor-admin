import { lazy } from 'react';
import { Router } from '@/@types/router';
import component from '../component/RouteMiddle';

export default [
    {
        name: 'tag',
        path: '/tag',
        title: '分类管理',
        component: lazy(() => import('@/pages/tag/list'))
    },
    {
        name: 'items',
        path: '/items',
        title: '物品管理',
        component: lazy(() => import('@/pages/items/list'))
    },
    {
        name: 'hero',
        path: '/hero/*',
        title: '英雄管理',
        component,
        routes: [
            {
                name: 'heroList',
                path: '/heroList',
                title: '英雄列表',
                component: lazy(() => import('@/pages/hero/list'))
            },
            {
                name: 'heroDetails',
                path: '/heroDetails',
                title: '新增英雄',
                component: lazy(() => import('@/pages/hero/details'))
            }
        ]
    },
    {
        name: 'article',
        path: '/article/*',
        title: '文章管理',
        component,
        routes: [
            {
                name: 'articleList',
                path: '/articleList',
                title: '文章列表',
                component: lazy(() => import('@/pages/article/list'))
            },
            {
                name: 'articleDetails',
                path: '/articleDetails',
                title: '文章详情',
                nav: true,
                component: lazy(() => import('@/pages/article/details'))
            }
        ],

    },
] as Router;