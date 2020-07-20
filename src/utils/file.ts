import { message } from 'antd';
import { UploadProps } from 'antd/lib/upload/interface';

export const beforeUpload: UploadProps['beforeUpload'] = file => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) message.error('仅支持JPG/PNG图片格式');
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) message.error('图片最大不超过2MB');
    return isJpgOrPng && isLt2M;
};
