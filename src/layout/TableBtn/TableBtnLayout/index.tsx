import React from 'react';
import style from './index.styl?';

const TableBtnLayout: React.FC = props => (
    <div className={style.layout}>{props.children}</div>
);

export default TableBtnLayout;