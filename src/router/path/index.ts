import { lazy } from 'react';
import privateRouter from './private';
import { Router } from '@/@types/router';
import MiddleRouter from '../component/RouteMiddle';

export default [
    {
        name: 'home',
        path: '/*',
        title: '主页',
        component: lazy(() => import('@/layout/Framework')),
        routes: privateRouter
    },
    {
        name: 'user',
        path: '/user/*',
        component: MiddleRouter,
        routes: [
            {
                name: 'login',
                path: '/login',
                component: lazy(() => import('@/pages/login'))
            }
        ]
    }
] as Router;