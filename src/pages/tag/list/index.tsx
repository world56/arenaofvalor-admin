/**
 * @hint “标签列表”与"装备列表"功能基本类似 这里展示用hooks实现
 * @ComponentType Hooks
 */
import React, {
    useState,
    useEffect,
    useCallback
} from 'react';
import { Page } from '@/layout/Page';
import { Partials } from '@/@types/utils';
import EditTag from '../component/EditTag';
import { Table, Modal, message } from 'antd';
import { TableProps } from 'antd/lib/table/Table';
import TypeManageTitle from '@/component/TypeManageTitle';
import { getTagList, deleteTag, TagParam } from '@/api/tag';
import { TableBtn, TableBtnLayout } from '@/layout/TableBtn';
import { ExclamationCircleOutlined } from '@ant-design/icons';

export type TargetTag = Partials<TagParam>;

const TypeList: React.FC = () => {

    const [data, setData] = useState<TagParam[]>([]);
    const [target, setTarget] = useState<TargetTag>({});

    const [tagWindow, setTagWindow] = useState(false);

    function chgWindowState() {
        setTagWindow(b => !b);
        setTarget({});
    };

    const initializatoin = useCallback(async () => {
        const res = await getTagList();
        setData(res);
    }, []);

    useEffect(() => {
        initializatoin();
    }, [initializatoin]);

    function editTarget(e: TagParam) {
        setTarget(e);
        setTagWindow(true);
    };

    function delTarget(e: TagParam) {
        Modal.confirm({
            title: '警告',
            icon: <ExclamationCircleOutlined />,
            content: `您确定要删除 '${e.name}' 分类标签？`,
            onOk: async () => {
                await deleteTag(e);
                message.success('删除成功');
                initializatoin();
            }
        });
    };

    const columns = [
        {
            title: '类型ID',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: '父类标签',
            render: (r: TagParam) => <span>{r.parent?.name}</span>
        },
        {
            title: '标签名称',
            dataIndex: 'name',
            align: 'center',
            key: 'name',
        },
        {
            title: '操作',
            align: 'center',
            render: r => (
                <TableBtnLayout>
                    <TableBtn onClick={() => editTarget(r)}>编辑</TableBtn>
                    <TableBtn danger onClick={() => delTarget(r)}>删除</TableBtn>
                </TableBtnLayout>
            )
        }
    ] as TableProps<TagParam>['columns'];

    return (
        <Page>

            <TypeManageTitle name='标签'
                init={initializatoin} add={() => setTagWindow(b => !b)} />

            <Table
                className='table'
                pagination={false}
                rowKey={r => r._id}
                dataSource={data}
                columns={columns} />

            <EditTag
                fathList={data}
                data={target}
                window={tagWindow}
                inint={initializatoin}
                close={chgWindowState} />

        </Page>
    );

};

export default TypeList;