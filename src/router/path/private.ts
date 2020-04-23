import { lazy } from 'react';
import { Router } from '@/@types/router';
import component from '../component/RouteMiddle';

export default [
    {
        name: 'tag',
        path: '/tag/*',
        title: '分类管理',
        component,
        routes: [
            {
                name: 'tagList',
                path: '/tagList',
                title: '分类列表',
                component: lazy(() => import('@/pages/tag/list'))
            }
        ]
    },
    {
        name: 'items',
        path: '/items/*',
        title: '物品管理',
        component,
        routes: [
            {
                name: 'itemsList',
                path: '/itemsList',
                title: '物品列表',
                component: lazy(() => import('@/pages/items/list'))
            }
        ]
    }
] as Router;