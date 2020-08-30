import React from 'react';
import { Table } from 'antd';
import { Page } from '@/layout/Page';
import { MongoModel } from '@/@types/mongo';
import TypeManageTitle from '../TypeManageTitle';
import { TableProps } from 'antd/lib/table/Table';

export interface ListPageProps<T extends object = {}> {
    /**
     * @name add 新增相关内容
     */
    add(param?: T): void;
    /**
     * @name init 初始化请求
     */
    init: () => void;
    /**
     * @name columns Table表格结构
     */
    columns: TableProps<T>['columns'];
    /**
     * @name list Table数据展示的list
     */
    list: T[];
};

/**
 * @name ListPage 数据列表页面
 * 其实很多list页面都是通用的，也可以封装通用组件提高效率
 * 这里利用class组件，通过props解决（也可以使用高阶组件）
 */
class ListPage<T extends MongoModel = MongoModel> extends React.PureComponent<ListPageProps<T>> {

    private TableRenderKey = (row: T) => row._id;

    public render(): JSX.Element {
        const { props } = this;
        return (
            <Page>
                <TypeManageTitle
                    add={props.add}
                    init={props.init} />
                <Table
                    className='table'
                    pagination={false}
                    dataSource={props.list}
                    columns={props.columns}
                    rowKey={this.TableRenderKey}
                />
            </Page>
        );
    };

};

export default ListPage;