import React from 'react';
import style from './index.styl?';

interface P {
    danger?: boolean;
    onClick?: () => void;
};

const { layoutBlue, layoutRed } = style;

const TableBtn: React.FC<P> = props => (
    <span
        onClick={props.onClick}
        className={props.danger ? layoutRed : layoutBlue}>{props.children}</span>
);

export default TableBtn;