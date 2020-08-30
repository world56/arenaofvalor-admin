import React from 'react';

export interface Route {
    name: string;
    path: string;
    title?: string;
    nav?: false;
    routes?: Route[];
    // redirect: string;
    component: any
};

export type Router = Route[];

export type PRoutes = {
    routes: Router;
};

export type RouteComponentProps = React.FC<{
    routes: Router;
}>;

export type RedirectProps = {
    to: string;
};