import React from 'react';

export default ({ routes = [], component: C }) => {
    const Module = <C routes={routes} />;
    return Module;
};