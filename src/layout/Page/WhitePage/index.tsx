import React from 'react';
import style from './index.styl?';

const Page: React.FC = props => (
    <div className={style.layoutWhite}>
        {props.children}
    </div>
);

export default Page;