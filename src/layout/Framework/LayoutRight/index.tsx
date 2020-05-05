import React from 'react';
import style from './index.styl?';

const LayoutRight: React.FC = props => (
    <div style={style} className={style.layoutRight}>
        {props.children}
    </div>
);

export default LayoutRight;