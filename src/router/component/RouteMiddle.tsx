import React from 'react';
import RouterView from './RouterView';
import { Route } from '@/@types/router';
export default ({ routes = [] }: Route) => <RouterView routes={routes} />;