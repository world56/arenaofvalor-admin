import React, { useEffect } from 'react';
import style from './index.styl?';
import { TargetTag } from '../../list';
import BtnCenter from '@/layout/BtnCenter';
import { Store } from 'rc-field-form/lib/interface';
import { addTag, changeTagDetails, TagParam } from '@/api/tag';
import { Modal, Form, Input, Button, message, Select } from 'antd';

interface P {
    close(): void;
    inint(): void;
    data: TargetTag;
    window: boolean;
    fathList: TagParam[];
};

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 17 }
};

const EditTag: React.FC<P> = props => {

    const [form] = Form.useForm();
    const { window, data, fathList } = props;
    const { resetFields, setFieldsValue } = form;

    useEffect(() => {
        !window && resetFields();
    }, [window, resetFields]);

    useEffect(() => {
        if (data._id && window) {
            setFieldsValue({
                _id: data._id,
                name: data.name,
                parent: data.parent?._id
            });
        };
    }, [window, data, setFieldsValue]);

    function close() {
        props.close();
    };

    async function onFinish(e: Store) {
        if (!e._id) await addTag(e as addTag);
        else await changeTagDetails(e as TagParam);
        message.success(`${data._id ? '编辑' : '新增'}成功`);
        close();
        props.inint();
    };

    return (
        <Modal footer={null}
            title={`${data._id ? '编辑' : '新增'} 分类标签`}
            visible={props.window}
            getContainer={false}
            onCancel={close}
            className={style.layout}>
            <Form {...layout} form={form} onFinish={onFinish}>
                <Form.Item name='parent' label="所属父类">
                    <Select placeholder='可选择所属父类标签'>
                        {fathList.map(v => <Select.Option value={v._id} key={v._id}>
                            {v.name}
                        </Select.Option>)}
                    </Select>
                </Form.Item>
                <Form.Item name='name' label="标签名称"
                    rules={[{ required: true, message: '标签名称不得为空' }]}>
                    <Input placeholder="请输入标签名称" />
                </Form.Item>
                <Form.Item name='_id' label="id" noStyle>
                    <Input style={{ display: 'none' }} />
                </Form.Item>
                <BtnCenter>
                    <Button htmlType='submit' type="primary">提交</Button>
                    <Button onClick={close}>取消</Button>
                </BtnCenter>
            </Form>
        </Modal>
    );

};

export default EditTag;