import React from 'react';
import { Button } from 'antd';
import { ComponentNoUpdate } from '@/utils/system';
import { SearchOutlined } from '@ant-design/icons';

interface P {
    name: string;
    add: () => void;
    init: () => void;
};

const TypeManageTitle: React.FC<P> = props => (
    <>
        <Button
            type='primary'
            className='btn'
            onClick={props.init}
            icon={<SearchOutlined />}>搜索</Button>

        <Button
            type='primary'
            onClick={props.add}>新增{props.name}</Button>
    </>
);

/**
 * @memo 类似于 Class PureComponent组件 || shouldComponentUpdate方法
 * 此组件不需要重复渲染
 */

export default React.memo(TypeManageTitle, ComponentNoUpdate);