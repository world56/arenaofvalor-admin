import React from 'react';
import Filtration from './Filtration';
import { Route } from 'react-router-dom';
import PageLazy from '@/layout/PageLazy';
import * as RouteTypes from '@/@types/router';
export default (r: RouteTypes.Route) => (
    <React.Suspense fallback={<PageLazy />}>
        <Route path={r.path} element={Filtration(r)} />
    </React.Suspense>
);
