import React from 'react';
import { Picks } from '@/@types/utils';
import BtnCenter from '@/layout/BtnCenter';
import { ItemsListState } from '../../list';
import { beforeUpload } from '@/utils/file';
import { FormInstance } from 'antd/lib/form';
import { Store } from 'rc-field-form/lib/interface';
import { uploadFilesUrl } from '@/config/environment';
import { InternalFieldProps } from 'rc-field-form/lib/Field';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Modal, Form, Input, Button, message, Upload } from 'antd';
import { addItems, changeItemsDetails, ItemParam } from '@/api/items';

interface P extends Picks<ItemsListState, 'window' | 'items'> {
    init(): void;
    close: () => void;
};

interface S {
    loading: boolean,
    imageUrl: string;
};

class ItemsEdit extends React.PureComponent<P, S> {

    private readonly ref = React.createRef<FormInstance>();

    private onFinish = async (e: Store) => {
        if (!e._id) await addItems(e as ItemParam);
        else await changeItemsDetails(e as ItemParam);
        message.success(`${this.props.items._id ? '编辑' : '新增'}成功`);
        this.onCancel();
        this.props.init();
    };

    public componentDidUpdate(p: P) {
        if (p.items !== this.props.items) {
            if (!this.ref.current) return false;
            const { items, window } = this.props;
            if (items._id && items.icon && window) {
                this.ref.current.setFieldsValue({
                    _id: items._id,
                    icon: items.icon,
                    name: items.name
                });
                this.setState({ imageUrl: items.icon });
            };
        };
    };

    private normFile: InternalFieldProps['getValueFromEvent'] = (e) => {
        if (e.file.status === 'uploading') {
            if (!this.state.loading) {
                this.setState({ loading: true });
            };
            return;
        };
        if (e.file.response) {
            const { originalname, url } = e.file.response;
            this.setState({ loading: false, imageUrl: url });
            if (this.ref.current) {
                this.ref.current.setFieldsValue({
                    name: originalname
                });
            };
            return e.file.response.url;
        } else return undefined;
    };

    private onCancel = () => {
        if (this.ref.current) {
            this.ref.current.resetFields();
            this.setState({ imageUrl: '' });
        };
        this.props.close();
    };

    public state = {
        loading: false,
        imageUrl: ''
    };

    public render(): JSX.Element {
        const { imageUrl, loading } = this.state;
        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className="ant-upload-text">上传图片</div>
            </div>
        );

        return (
            <Modal
                footer={null} title='物品'
                onCancel={this.onCancel}
                visible={this.props.window}
                getContainer={false}>
                <Form ref={this.ref} onFinish={this.onFinish}>
                    <Form.Item label="名称" name="name"
                        rules={[{ required: true, message: '名称不得为空' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="图标" name="icon"
                        rules={[{ required: true, message: '物品图标不得为空' }]}
                        valuePropName='file' getValueFromEvent={this.normFile}>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action={uploadFilesUrl}
                            beforeUpload={beforeUpload}>
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </Form.Item>
                    <Form.Item name='_id' label="id" noStyle>
                        <Input style={{ display: 'none' }} />
                    </Form.Item>
                    <BtnCenter>
                        <Button htmlType='submit' type="primary">提交</Button>
                        <Button onClick={this.onCancel}> 取消</Button>
                    </BtnCenter>
                </Form>
            </Modal>
        );
    };

};

export default ItemsEdit;