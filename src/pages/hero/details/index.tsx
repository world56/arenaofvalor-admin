import React, {
    useState
} from 'react';
import styles from './index.styl?';
import { Page } from '@/layout/Page';
import BtnCenter from '@/layout/BtnCenter';
import { beforeUpload } from '@/utils/file';
import { Store } from 'rc-field-form/lib/interface';
import { uploadFilesUrl } from '@/config/environment';
import { Form, Input, Button, Upload, message } from 'antd';
import { InternalFieldProps } from 'rc-field-form/lib/Field';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { addHeroDetails } from '@/api/hero';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 }
};

interface UploadFiles {
    load: boolean;
    url: string | undefined;
};

const HeroDetails: React.FC = () => {

    const [form] = Form.useForm();

    const [upLoad, setUpLoad] = useState<UploadFiles>({
        load: false,
        url: undefined
    });

    async function sumbit(e: Store) {
        await addHeroDetails(e);
        message.success('新增成功');
        console.log(e, 'SUMBIT');
    };

    const normFile: InternalFieldProps['getValueFromEvent'] = e => {
        const { file: { status, response } } = e;
        if (status === 'uploading' && !upLoad.load) {
            setUpLoad(s => ({ ...s, load: !s.load }));
        };
        if (response) {
            const { originalname, url } = e.file.response;
            setUpLoad(s => ({ ...s, url }));
            form.setFieldsValue({ name: originalname });
            return response.url;
        } else return undefined;
    };

    function uploadButton() {
        return <div>
            {upLoad.load ? <LoadingOutlined /> : <PlusOutlined />}
            <div className="ant-upload-text">上传头像</div>
        </div>
    };

    console.log('render')

    return (
        <Page>
            <Form
                {...layout}
                form={form}
                onFinish={sumbit}
                className={styles.layout}>

                <Form.Item
                    name="icon"
                    label="英雄头像"
                    valuePropName='file'
                    getValueFromEvent={normFile}
                    rules={[{ required: true, message: '英雄头像不得为空' }]}>
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action={uploadFilesUrl}
                        beforeUpload={beforeUpload}>
                        {upLoad.url ? <img src={upLoad.url} alt="avatar" style={{ width: '100%' }} /> : uploadButton()}
                    </Upload>
                </Form.Item>

                <Form.Item
                    name="name"
                    label="英雄名称"
                    rules={[{ required: true, message: '英雄名称不得为空' }]}>
                    <Input placeholder='请输入英雄名称' />
                </Form.Item>

                <BtnCenter>
                    <Button type="primary" htmlType="submit">提交</Button>
                    <Button htmlType="button">返回</Button>
                </BtnCenter>
            </Form>
        </Page>
    );

};

export default HeroDetails;