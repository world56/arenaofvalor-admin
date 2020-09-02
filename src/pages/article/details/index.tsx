import React, { useState, useCallback, useEffect } from 'react';
import styles from './index.styl?';
import BtnCenter from '@/layout/BtnCenter';
import { getTagList, TagList } from '@/api/tag';
import RichText from '@/component/RichText/Hooks';
import { Form, Input, Card, Select, Button } from 'antd';

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

    const onFinish = (values: any) => {
        console.log(values);
    };

    function goBack() {
        window.history.back();
    }

    useEffect(() => {
        initialization();
    }, [initialization]);

    return (
        <Form
            form={form}
            onFinish={onFinish}
            scrollToFirstError
            className={styles.layout}>

            <Card title="基本信息">
                <Form.Item
                    name="name"
                    label="文章名称"
                    {...formLayout}
                    rules={[{ required: true, message: '请输入文章名称' }]}>
                    <Input placeholder='请输入文章名称' />
                </Form.Item>

                <Form.Item
                    name="tag"
                    label="文章标签"
                    {...formLayout}
                    rules={[{ required: true, message: '请选择文章标签' }]}>
                    <Select mode="multiple" placeholder="逆风出装不得为空">
                        {tag.map(v => <Select.Option key={v._id} value={v.name}>{v.name}</Select.Option>)}
                    </Select>
                </Form.Item>
            </Card>

            <Card title="富文本信息">
                <Form.Item
                    name="text"
                    className={styles.edit}
                    rules={[{ required: true, message: '请输入富文本信息' }]}>
                    <RichText />
                </Form.Item>
            </Card>

            <BtnCenter>
                <Button type="primary" htmlType="submit">提交</Button>
                <Button onClick={goBack} htmlType="button">返回</Button>
            </BtnCenter>

        </Form>
    );
};

export default ArticleDetails;