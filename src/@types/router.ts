import React from 'react';

export interface Route {
    name: string;
    path: string;
    title?: string;
    nav?: false;
    routes?: Route[];
    redirect: string;
    readonly component: React.LazyExoticComponent<() => JSX.Element>;
};

export type Router = Route[];

export type PRoutes = {
    routes: PRoutes[];
};