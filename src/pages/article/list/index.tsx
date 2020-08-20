import React, { useState, useMemo, useCallback } from 'react';
import ListPage from '@/component/ListPage';
import { TableProps } from 'antd/lib/table/Table';
import { useNavigate } from 'react-router-dom';
import { TableBtn, TableBtnLayout } from '@/layout/TableBtn';


const Article: React.FC<{}> = () => {

    const [list] = useState([]);
    const nav = useNavigate();

    const skipDetails = useCallback((r) => {
        nav('/article/articleDetails', {
            state: { _id: r?._id }
        });
    }, [nav]);

    const init = useCallback(() => {
    }, []);

    const columns: TableProps<{}>['columns'] = useMemo(() => [
        {
            title: '文章ID',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: '文章名称',
            dataIndex: 'name',
            align: 'center',
            key: 'name',
        },
        {
            title: '操作',
            align: 'center',
            render: r => (
                <TableBtnLayout>
                    <TableBtn>编辑</TableBtn>
                    <TableBtn>删除</TableBtn>
                </TableBtnLayout>
            )
        }
    ], []);


    return (
        <ListPage
            add={skipDetails}
            init={init}
            columns={columns}
            list={list} />
    )

};

export default Article;