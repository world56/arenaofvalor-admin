import React, {
    useState,
    useEffect,
    useCallback,
} from 'react';
// import styles from './index.styl?';
import BtnCenter from '@/layout/BtnCenter';
import { beforeUpload } from '@/utils/file';
import { Store } from 'rc-field-form/lib/interface';
import { uploadFilesUrl } from '@/config/environment';
import { InternalFieldProps } from 'rc-field-form/lib/Field';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
// import { addHeroDetails } from '@/api/hero';
import { getItemsList } from '@/api/items';
import { getTagList, TagParam } from '@/api/tag';
import { Form, Input, Button, Upload, Select, Rate, Card } from 'antd';
// import { CardProps } from 'antd/lib/card';

type TagType = TagParam & { name: string };

const layout = {
    labelCol: { span: 2.5 },
    wrapperCol: { span: 18 }
};

interface UploadFiles {
    load: boolean;
    url: string | undefined;
};

const tabListNoTitle = [
    {
        tab: '基本信息',
        key: '基本信息',
    },
    {
        tab: '技能信息',
        key: '技能信息',
    }
];

const initVal = { skills: [{ name: '名称', icon: '图标' }] };

const HeroDetails: React.FC = () => {

    const [form] = Form.useForm();

    const [hero, setHero] = useState<TagType[]>([]);
    const [equip, setEquip] = useState<TagType[]>([]);
    const [upLoad, setUpLoad] = useState<UploadFiles>({
        load: false,
        url: undefined
    });

    const [cardState, setCaedState] = useState('基本信息');

    const initSelect = useCallback(async () => {
        const tag = await getTagList();
        setHero(tag);
        const item = await getItemsList();
        setEquip(item);
    }, []);

    useEffect(() => {
        initSelect();
    }, [initSelect]);

    async function sumbit(e: Store) {
        // await addHeroDetails(e);
        // message.success('新增成功');
        console.log(e, 'SUMBIT');
    };

    const normFile: InternalFieldProps['getValueFromEvent'] = e => {
        const { file: { status, response } } = e;
        if (status === 'uploading' && !upLoad.load) {
            setUpLoad(s => ({ ...s, load: !s.load }));
        };
        if (response) {
            const { url } = e.file.response;
            setUpLoad(s => ({ ...s, url }));
            return response.url;
        } else return undefined;
    };

    function onTabChange(key: string) {
        setCaedState(key);
    };

    return (
        <Form
            {...layout}
            form={form}
            initialValues={initVal}
            onFinish={sumbit}>
            <Card tabList={tabListNoTitle}
                activeTabKey={cardState}
                onTabChange={onTabChange}>
                <div style={{ display: cardState === '基本信息' ? 'block' : 'none' }}>
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
                            {upLoad.url ? <img src={upLoad.url} alt="avatar" style={{ width: '100%' }} /> : <div>
                                {upLoad.load ? <LoadingOutlined /> : <PlusOutlined />}
                                <div className="ant-upload-text">上传头像</div>
                            </div>}
                        </Upload>
                    </Form.Item>

                    <Form.Item
                        name="name"
                        label="英雄名称"
                        rules={[{ required: true, message: '英雄名称不得为空' }]}>
                        <Input placeholder='请输入英雄名称' />
                    </Form.Item>

                    <Form.Item
                        name="title"
                        label="英雄称号"
                        rules={[{ required: true, message: '英雄称号不得为空' }]}>
                        <Input placeholder='请输入英雄称号' />
                    </Form.Item>

                    <Form.Item
                        name="categories"
                        label="英雄类型"
                        rules={[{ required: true, message: '英雄类型不得为空' }]}>
                        <Select placeholder='请选择英雄类型'>
                            {hero.map(v => <Select.Option key={v._id} value={v._id}>{v.name}</Select.Option>)}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name={['scores', 'difficult']}
                        label="难度评分"
                        rules={[{ required: true, message: '难度评分不得为空' }]}>
                        <Rate count={10} allowHalf />
                    </Form.Item>

                    <Form.Item
                        name={['scores', 'skills']}
                        label="技能评分"
                        rules={[{ required: true, message: '技能评分不得为空' }]}>
                        <Rate count={10} allowHalf />
                    </Form.Item>

                    <Form.Item
                        name={['scores', 'attack']}
                        label="输出评分"
                        rules={[{ required: true, message: '输出评分不得为空' }]}>
                        <Rate count={10} allowHalf />
                    </Form.Item>

                    <Form.Item
                        name={['scores', 'survive']}
                        label="生存评分"
                        rules={[{ required: true, message: '生存评分不得为空' }]}>
                        <Rate count={10} allowHalf />
                    </Form.Item>

                    <Form.Item
                        name="tailwind"
                        label="顺风出装"
                        rules={[{ required: true, message: '顺风出装不得为空' }]}>
                        <Select mode="multiple" placeholder="请选择顺风出装">
                            {equip.map(v => <Select.Option key={v._id} value={v._id}>{v.name}</Select.Option>)}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="upwind"
                        label="逆风出装"
                        rules={[{ required: true, message: '逆风出装不得为空' }]}>
                        <Select mode="multiple" placeholder="逆风出装不得为空">
                            {equip.map(v => <Select.Option key={v._id} value={v._id}>{v.name}</Select.Option>)}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="usageTips"
                        label="使用技巧"
                        rules={[{ required: true, message: '使用技巧不得为空' }]}>
                        <Input.TextArea rows={6} placeholder='请输入使用技巧' />
                    </Form.Item>

                    <Form.Item
                        name="battleTips"
                        label="对战技巧"
                        rules={[{ required: true, message: '对战技巧不得为空' }]}>
                        <Input.TextArea rows={6} placeholder='请输入对战技巧' />
                    </Form.Item>

                    <Form.Item
                        name="teamTips"
                        label="团战思路"
                        rules={[{ required: true, message: '团战思路不得为空' }]}>
                        <Input.TextArea rows={6} placeholder='请输入团战思路' />
                    </Form.Item>
                </div>
                <div style={{ display: cardState === '技能信息' ? 'block' : 'none' }}>
                    <Form.List name='skills'>
                        {(fields, s) => (
                            fields.map((v, i) => {
                                return (
                                    <div key={v.key}>
                                        <Form.Item name={[v.key, 'name']}>
                                            <Input />
                                        </Form.Item>
                                        <Form.Item name={[v.key, 'icon']}>
                                            <Input />
                                        </Form.Item>
                                    </div>
                                )
                            })
                        )}
                    </Form.List>
                </div>

            </Card>
            <BtnCenter>
                <Button type="primary" htmlType="submit">提交</Button>
                <Button htmlType="button">返回</Button>
            </BtnCenter>
        </Form>
    );

};

export default HeroDetails;