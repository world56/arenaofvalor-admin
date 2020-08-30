import React from 'react';
import RouterList from '../path';
import RouterView from './RouterView';
import { BrowserRouter } from 'react-router-dom';
export default () => (
    <BrowserRouter>
        <RouterView routes={RouterList} />
    </BrowserRouter>
);