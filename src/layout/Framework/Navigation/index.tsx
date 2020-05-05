import React, {
    useState,
    useContext
} from 'react';
import { Menu } from 'antd';
import Icon from '@/layout/Icon';
import style from './index.styl?';
import SystemInfo from '../SystemInfo';
import { initMenu } from '@/utils/system';
import { toPathUrl } from '@/utils/router';
import ContextState from '../ContextState';
import Router from '@/router/path/private';
import { MenuProps, ClickParam } from 'antd/lib/menu';
import { useNavigate, useLocation } from 'react-router-dom';

type PathKey = Array<string | undefined>;

const MenuPath: PathKey = Router.map(v => v.redirect);

const Navigation = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { navShow } = useContext(ContextState);

    const { pathname } = location;

    const [openKeys, setOpenKeys] = useState<PathKey>(() => initMenu(pathname));

    function onClick(e: ClickParam) {
        navigate(toPathUrl(e.keyPath));
        setOpenKeys(e.keyPath)
    };

    function onOpenChange(path: string[]) {
        const keyPath = path.find(key => openKeys.indexOf(key) === -1);
        if (MenuPath.indexOf(keyPath) === -1) setOpenKeys(path);
        else setOpenKeys(openKeys ? [keyPath] : []);
    };

    const MenuConfig = {
        onClick,
        onOpenChange,
        mode: "inline",
        theme: "light",
        inlineCollapsed: navShow,
        defaultOpenKeys: openKeys,
        defaultSelectedKeys: openKeys,
        className: `${style.navigation} ${navShow ? style.close : style.show}`
    } as MenuProps;

    if (!navShow) MenuConfig.openKeys = openKeys as string[];

    return (
        <Menu {...MenuConfig}>
            <SystemInfo />
            {Router.map(v => v.routes && v.routes.length > 0 ? <Menu.SubMenu key={v.name} title={
                <span><Icon type={`icon-${v.name}`} /><span>{v.title}</span></span>}>
                {v.routes.map(val => !val.routes ? !val.nav ? <Menu.Item key={val.name}>
                    <span><Icon type={`icon-${val.name}`} />{val.title}</span> </Menu.Item> : null :
                    <Menu.SubMenu key={val.name} title={<span><Icon type={`icon-${val.name}`} /><span>{val.title}</span></span>}>
                        {val.routes.map(value => <Menu.Item key={value.name}><Icon type={`icon-${value.name}`} />{value.title}</Menu.Item>)}
                    </Menu.SubMenu>)}
            </Menu.SubMenu> : <Menu.Item key={v.name} title={v.title}><Icon type={`icon-${v.name}`} /><span>{v.title}</span></Menu.Item>)}
        </Menu>
    );
};

export default Navigation;