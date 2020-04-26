import { extend } from 'umi-request';
import httpCode from '@/config/httpCode';
import { notification, message } from 'antd';
import {
    baseUrl as prefix,
    requsetTimeout as timeout
} from '@/config/environment';

const request = extend({ prefix, timeout });

request.interceptors.request.use((url, options) => {
    const headers = {
        Authorization: 'token'
    };
    return {
        url,
        options: {
            ...options,
            headers,
            interceptors: true
        }
    };
}, { global: true });

request.interceptors.response.use(async (res, cf) => {
    try {
        const data = await res.clone().json();
        if (res.status === 200) {
            return Promise.resolve(data);
        } else if (res.status === 401) {
            setTimeout(() => {
                window.location.reload();
            }, 1800);
            message.warn('登录超时,请重新登录账号');
            return Promise.reject(data);
        } else {
            message.warn('出现不能识别的错误');
            return Promise.reject(data);
        }
    } catch (e) {
        console.error('Request-Error', e);
        notification.error({
            message: '请求失败',
            description: httpCode[res.status] || 'HTTP未知错误'
        });
        return Promise.reject();
    };
}, { global: true });


export default request;