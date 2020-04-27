import React, {
    useState,
    useEffect,
    useCallback,
} from 'react';
import styles from './index.styl?';
import { Table, Modal } from 'antd';
import { Page } from '@/layout/Page';
import { useNavigate } from 'react-router-dom';
import { TableProps } from 'antd/lib/table/Table';
import TypeManageTitle from '@/component/TypeManageTitle';
import { TableBtn, TableBtnLayout } from '@/layout/TableBtn';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { getHeroList } from '@/api/hero';

const HeroList: React.FC = () => {

    const [list, setList] = useState([]);

    const navigate = useNavigate();

    function editHero() {
        navigate('/hero/heroDetails');
    };

    function delHero(r: any) {
        Modal.confirm({
            title: '警告',
            icon: <ExclamationCircleOutlined />,
            content: `您确定要删除 '${r.name}' 分类标签？`,
            onOk: async () => {

            }
        });
    };

    const init = useCallback(async () => {
        const res = await getHeroList();
        setList(res);
    }, []);

    useEffect(() => {
        init();
    }, [init]);

    const columns: TableProps<any>['columns'] = [
        {
            title: '英雄ID',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: '英雄头像',
            render: (r) => <img className={styles.iconPic} src={r.icon} alt="#" />
        },
        {
            title: '英雄名称',
            dataIndex: 'name',
            align: 'center',
            key: 'name',
        },
        {
            title: '操作',
            align: 'center',
            render: r => (
                <TableBtnLayout>
                    <TableBtn onClick={() => editHero()}>编辑</TableBtn>
                    <TableBtn danger onClick={() => delHero(r)}>删除</TableBtn>
                </TableBtnLayout>
            )
        }
    ];

    return (
        <Page>
            <TypeManageTitle name='物品' add={editHero} init={init} />

            <Table
                rowKey={r => r._id}
                dataSource={list}
                className='table'
                pagination={false}
                columns={columns} />

        </Page>
    );

};

export default HeroList;