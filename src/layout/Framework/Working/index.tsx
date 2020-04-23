import React from 'react';
import style from './index.styl?';
import { PRoutes } from '@/@types/router';
import RouterView from '@/router/component/RouterView';

const Working: React.FC<PRoutes> = ({ routes = [] }) => (
    <div className={style.work}>
        <RouterView routes={routes} />
    </div>
);

export default Working;