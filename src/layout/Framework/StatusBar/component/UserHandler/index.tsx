import React from 'react';
import style from './index.styl?';
import icon from '@/resource/icon.jpg';
// import { useDispatch } from 'react-redux';
import { ClickParam } from 'antd/lib/menu';
import { Menu, Dropdown, message } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

const { userHandler } = style;

const UserHandler: React.FC = () => {

    // const dis = useDispatch();

    function click({ key }: ClickParam) {
        switch (key) {
            case '0':
                message.loading('正在清除用户缓存');
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
                return;
            default: return console.log('未能补货到相关功能');
        }
    };

    const Menus = () => (
        <Menu onClick={click}>
            <Menu.Item key='0'>
                <PoweroffOutlined />退出登录
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={Menus}>
            <div className={userHandler}>
                <img src={icon} alt="#" />
                <span>旋涡鸣人</span>
            </div>
        </Dropdown>
    );
};

export default React.memo(UserHandler);