import React from 'react';
import style from './index.styl?';
import { RouterView } from '@/router';
import { PRoutes } from '@/@types/router';

const Working: React.FC<PRoutes> = ({ routes = [] }) => (
    <div className={style.work}>
        <RouterView routes={routes} />
    </div>
);

export default Working;