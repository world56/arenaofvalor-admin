import React from 'react';
import style from './index.styl?';

const { layout } = style;

const Page: React.FC = props => (
    <div className={layout}>
        {props.children}
    </div>
);

export default Page;