import React, { useState, useCallback, useEffect } from 'react';
import styles from './index.styl?';
import { getTagList, TagList } from '@/api/tag';
import { Form, Input, Card, Select } from 'antd';
import RichText from '@/component/RichText';

const formLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 2 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 },
    },
};

const ArticleDetails: React.FC = () => {

    const [form] = Form.useForm();
    const [tag, setTag] = useState<TagList[]>([]);

    const initialization = useCallback(async () => {
        const res = await getTagList();
        setTag(res);
    }, []);

    useEffect(() => {
        initialization();
    }, [initialization]);

    return (
        <Form
            form={form}
            {...formLayout}
            scrollToFirstError
            className={styles.layout}>

            <Card title="基本信息">
                <Form.Item
                    name="name"
                    label="文章名称"
                    rules={[{ required: true, message: '请输入文章名称' }]}>
                    <Input placeholder='请输入文章名称' />
                </Form.Item>

                <Form.Item
                    name="tag"
                    label="文章标签"
                    rules={[{ required: true, message: '请选择文章标签' }]}>
                    <Select mode="multiple" placeholder="逆风出装不得为空">
                        {tag.map(v => <Select.Option key={v._id} value={v.name}>{v.name}</Select.Option>)}
                    </Select>
                </Form.Item>
            </Card>

            <Card title="富文本信息">
                <RichText />
            </Card>

        </Form>
    );
};

export default ArticleDetails;