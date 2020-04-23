import React from 'react';
import { Spin } from 'antd';
import style from './index.styl?';
export default (): JSX.Element => (
    <div className={style.loadingView}>
        <Spin tip="loading..." size="large" className={style.sping} />
    </div>
);