import React from 'react';
import { Route } from '@/@types/router';
export default ({ routes = [], component: C }: Route) => {
    const Module = <C routes={routes} />;
    return Module;
};