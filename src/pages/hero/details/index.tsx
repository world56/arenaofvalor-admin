import React, {
    useState,
    useEffect,
    useCallback,
} from 'react';
import styles from './index.styl?';
import { useUploadState } from '@/hooks';
import BtnCenter from '@/layout/BtnCenter';
import { beforeUpload } from '@/utils/file';
import * as HERO_ENUM from '@/constant/hero';
import { useLocation } from 'react-router-dom';
import { uploadFilesUrl } from '@/config/env';
import { getTagList, TagList } from '@/api/tag';
import { Store } from 'rc-field-form/lib/interface';
import { HeroRouteParam } from '@/@types/routeParam';
import { getItemsList, ItemParam } from '@/api/items';
import { InternalFieldProps } from 'rc-field-form/lib/Field';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Form, Input, Button, Upload, Select, Rate, Card, message } from 'antd';
import { addHeroDetails, HeroParam, getHeroDetails, editHeroDetails } from '@/api/hero';

const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 12 }
};

const ListLayout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 15 }
};

const tabListNoTitle = [
    { tab: HERO_ENUM.HERO_TAB.BASIC, key: HERO_ENUM.HERO_TAB.BASIC },
    { tab: HERO_ENUM.HERO_TAB.SKILL, key: HERO_ENUM.HERO_TAB.SKILL }
];

const initVal = { skills: [{ name: '名称', icon: '' }] };

const HeroDetails = () => {

    const location = useLocation() as HeroRouteParam;
    const _id = location.state?._id;

    const [form] = Form.useForm();

    const { load, setState } = useUploadState();
    const [hero, setHero] = useState<TagList[]>([]);
    const [equip, setEquip] = useState<ItemParam[]>([]);

    const [cardState, setCaedState] = useState<HERO_ENUM.HERO_TAB_TYPE.VAL>(HERO_ENUM.HERO_TAB.BASIC);

    const initSelect = useCallback(async () => {
        const [tag, item] = await Promise.all([getTagList(), getItemsList()]);
        setHero(tag);
        setEquip(item);
    }, []);

    const init = useCallback(async () => {
        if (_id) {
            const res = await getHeroDetails({ _id });
            form.setFieldsValue(res);
        }
    }, [_id, form]);

    useEffect(() => {
        init();
        initSelect();
    }, [initSelect, init]);

    async function sumbit(e: Store) {
        const param = _id ? { ...e, _id } : e;
        const request = _id ? editHeroDetails : addHeroDetails;
        await request(param as HeroParam)
        message.success('操作成功');
        goBack();
    };

    function goBack() {
        window.history.back();
    }

    const toFile: InternalFieldProps['getValueFromEvent'] = (e, i) => {
        const { file: { status, response } } = e;
        if (status === 'uploading' && !load[i]) {
            setState(i, true);
        } else if (response) {
            setState(i, false);
            return response.url;
        };
    };

    function addSkills() {
        const skills = form.getFieldValue('skills');
        skills.push({ name: '', icon: '' });
        form.setFieldsValue({ skills });
    };

    function remove(i: number) {
        const skills = form.getFieldValue('skills');
        skills.splice(i, 1);
        form.setFieldsValue({ skills });
    };

    function onTabChange(key: string) {
        setCaedState(key as HERO_ENUM.HERO_TAB_TYPE.VAL);
    };

    const heroImg = form.getFieldValue('icon');

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
                        getValueFromEvent={e => toFile(e, 'icon')}
                        rules={[{ required: true, message: '英雄头像不得为空' }]}>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action={uploadFilesUrl}
                            beforeUpload={beforeUpload}>
                            {heroImg ? <img src={heroImg} alt="avatar" /> : <div>
                                {load['icon'] ? <LoadingOutlined /> : <PlusOutlined />}
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
                        name="categorys"
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
                    <Form.List name='skills' >
                        {fields => {
                            const path = form.getFieldValue('skills');
                            return fields.map((v, i) => {
                                return (
                                    <Card title={`技能 ${i + 1}`} key={i} extra={path.length > 1 && <span onClick={() => remove(i)}>删除</span>} className={styles.skillCard}>
                                        <Form.Item label="技能图标" name={[v.key, 'icon']} valuePropName='file'
                                            rules={[{ required: true, message: '技能图标不得为空' }]}
                                            getValueFromEvent={e => toFile(e, `index${i}`)}  {...ListLayout}>
                                            <Upload
                                                name="avatar"
                                                listType="picture-card"
                                                showUploadList={false}
                                                action={uploadFilesUrl}
                                                beforeUpload={beforeUpload}>
                                                {path[i].icon ? <img src={path[i].icon} alt="avatar" /> : <div>
                                                    {load[`index${i}`] ? <LoadingOutlined /> : <PlusOutlined />}
                                                    <div className="ant-upload-text">上传图标</div>
                                                </div>}
                                            </Upload>
                                        </Form.Item>
                                        <Form.Item label="技能名称" name={[v.key, 'name']} {...ListLayout}
                                            rules={[{ required: true, message: '技能名称不得为空' }]}>
                                            <Input />
                                        </Form.Item>
                                        <Form.Item label="技能描述" name={[v.key, 'description']} {...ListLayout}
                                            rules={[{ required: true, message: '技能描述不得为空' }]}>
                                            <Input.TextArea rows={4} />
                                        </Form.Item>
                                        <Form.Item label="小提示" name={[v.key, 'tips']} {...ListLayout}
                                            rules={[{ required: true, message: '小提示不得为空' }]}>
                                            <Input.TextArea rows={4} />
                                        </Form.Item>

                                    </Card>
                                )
                            })
                        }}
                    </Form.List>
                    <Button onClick={addSkills} className={styles.addSkills}>添加技能</Button>
                </div>

            </Card>
            <BtnCenter>
                <Button type="primary" htmlType="submit">提交</Button>
                <Button onClick={goBack} htmlType="button">返回</Button>
            </BtnCenter>
        </Form>
    );

};

export default HeroDetails;