import React, {
    useContext
} from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import style from './index.styl?';
import ContextState from '../ContextState';
import UserHandler from './component/UserHandler';

const StatusBar: React.FC = () => {

    const {
        navShow,
        changeNavBar
    } = useContext(ContextState);

    return (
        <div className={style.statusBar}>
            <div onClick={changeNavBar} className={style.openIcon}>
                {navShow ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
            <div className={style.handeln}>
                <UserHandler />
            </div>
        </div>
    );
};

export default React.memo(StatusBar);