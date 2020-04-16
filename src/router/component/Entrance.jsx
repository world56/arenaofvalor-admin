import React from 'react';
import RouterList from '../path';
import RouterView from './RouterView';
import { BrowserRouter as Router } from 'react-router-dom';
export default () => (
    <Router>
        <RouterView routes={RouterList} />
    </Router>
);