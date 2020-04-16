import React from 'react';
import Filtration from './Filtration';
import { Route } from 'react-router-dom';
import PageLazy from '@/layout/PageLazy';

export default r => (
    <React.Suspense fallback={<PageLazy />}>
        <Route path={r.path} element={Filtration(r)} />
    </React.Suspense>
);