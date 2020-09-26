import React, { useState, useMemo, useCallback } from 'react';
import { MongoModel } from '@/@types/mongo';
import ListPage from '@/component/ListPage';
import { useNavigate } from 'react-router-dom';
import { TableProps } from 'antd/lib/table/Table';
import { TableBtn, TableBtnLayout } from '@/layout/TableBtn';
// import 'tinymce/skins/ui/oxide/skin.min.css';
// import 'tinymce/skins/ui/oxide/content.min.css';

type TablePropsParam = TableProps<MongoModel & { name: string; }>['columns'];

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

    const columns: TablePropsParam = useMemo(() => [
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
            init={init}
            list={list}
            columns={columns}
            add={skipDetails}
        />
    );

};

export default Article;