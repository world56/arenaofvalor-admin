import React from 'react';
import Route from './Route';
import { Routes } from 'react-router-dom';
import * as RouteTypes from '@/@types/router';
export default ({ routes = [] }: RouteTypes.PRoutes) => (
    <Routes>
        {routes.map(v => <Route {...v} key={v.name} />)}
    </Routes>
);