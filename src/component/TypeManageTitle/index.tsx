import React from 'react';
import { Button } from 'antd';
import { ComponentUpdate } from '@/utils/system';
import { SearchOutlined } from '@ant-design/icons';

interface P {
    name: string;
    init: () => void;
    addType: () => void;
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
            onClick={props.addType}>新增{props.name}</Button>
    </>
);

export default React.memo(TypeManageTitle, ComponentUpdate);