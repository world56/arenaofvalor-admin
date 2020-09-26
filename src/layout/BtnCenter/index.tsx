import React from 'react';
import style from './index.styl?';

const BtnCenter: React.FC = props => (
    <div className={style.layout}>{props.children}</div>
);

export default BtnCenter;