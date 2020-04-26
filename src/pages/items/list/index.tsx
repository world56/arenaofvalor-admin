/**
 * @Hint “标签列表”与"装备列表"功能基本类似 这里展示用Class实现
 * @ComponentType Class
 */
import React from 'react';
import style from './index.styl?';
import { Page } from '@/layout/Page';
import { Partials } from '@/@types/utils';
import { Table, Modal, message } from 'antd';
import ItemsEdit from '../component/ItemsEdit';
import { TableProps } from 'antd/lib/table/Table';
import TypeManageTitle from '@/component/TypeManageTitle';
import { TableBtn, TableBtnLayout } from '@/layout/TableBtn';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { getItemsList, ItemParam, deleteItems } from '@/api/items';

export interface ItemsListState {
    window: boolean;
    data: Array<ItemParam>;
    items: Partials<ItemParam>;
    uploading: boolean;
};

class ItemsList extends React.Component<{}, ItemsListState> {

    public componentDidMount() {
        this.initialization();
    };

    /**
     * 标准写法   
     * React同时支持直接定义在Class的state属性
     */
    public constructor(props: {}) {
        super(props);
        this.state = {
            data: [],
            items: {},
            window: false,
            uploading: false
        };
    };

    protected initialization = async () => {
        console.log('init');
        const data = await getItemsList();
        this.setState({ data });
    };

    /**
     *  函数返回、与直接传递对象的方式修改state是有区别的
     *  函数：依次执行(同步)
     *  对象：合并多次setState(异步)
     */
    protected addType = () => {
        this.setState((s: ItemsListState) => {
            s.window = !s.window;
            return s;
        });
    };

    private editItem = (r: ItemParam) => {
        this.setState({
            items: r,
            window: true
        });
    };

    private delItem = (r: ItemParam) => {
        Modal.confirm({
            title: '警告',
            icon: <ExclamationCircleOutlined />,
            content: `您确定要删除 '${r.name}' 分类标签？`,
            onOk: async () => {
                await deleteItems(r);
                message.success('删除成功');
                this.initialization();
            }
        });
    };

    protected closeWindow = () => {
        this.setState((s: ItemsListState) => {
            s.items = {};
            s.window = !s.window;
            return s;
        });
    };

    public render(): JSX.Element {

        const columns: TableProps<ItemParam>['columns'] = [
            {
                title: '物品ID',
                dataIndex: '_id',
                key: '_id',
            },
            {
                title: '物品图标',
                render: (r: ItemParam) => <img className={style.iconPic} src={r.icon} alt="#" />
            },
            {
                title: '物品名称',
                dataIndex: 'name',
                align: 'center',
                key: 'name',
            },
            {
                title: '操作',
                align: 'center',
                render: r => (
                    <TableBtnLayout>
                        <TableBtn onClick={this.editItem.bind(this, r)}>编辑</TableBtn>
                        <TableBtn danger onClick={() => this.delItem(r)}>删除</TableBtn>
                    </TableBtnLayout>
                )
            }
        ];

        const { window, items, data } = this.state;

        return (
            <Page>

                <TypeManageTitle name='物品'
                    addType={this.addType}
                    init={this.initialization} />

                <Table
                    rowKey={r => r._id}
                    className='table'
                    pagination={false}
                    dataSource={data}
                    columns={columns} />

                <ItemsEdit
                    init={this.initialization}
                    close={this.closeWindow}
                    window={window}
                    items={items} />
            </Page>
        );
    };

};

export default ItemsList;