import React from 'react';
import Route from './Route';
import { Routes } from 'react-router-dom';
export default ({ routes = [] }) => (
    <Routes>
        {routes.map(v => <Route {...v} key={v.name} />)}
    </Routes>
);