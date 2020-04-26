import React from 'react';
import style from './index.styl?';
import logo from '@/resource/logo.jpg';
import { ComponentUpdate } from '@/utils/system';

const SystemInfo = () => (
    <div className={style.systemInfo}>
        <img src={logo} alt='#' />
        <div className={style.statemNames}>
            <p>王者农药后台管理系统</p>
            <p>AOV Management System</p>
        </div>
    </div>
);

export default React.memo(SystemInfo, ComponentUpdate);