import { Response } from 'express';
import { extend } from 'umi-request';
import { ResponseError } from 'umi-request';
import { notification, message } from 'antd';
import { prefix, timeout } from '@/config/env';
import { HTTP_INTERIOR_CODE, HTTP_STATUS_CODE } from '@/constant/http';

async function errorHandler(res: ResponseError): Promise<Response> {
    console.log('error', res);
    message.error('系统错误');
    return Promise.reject(res.response);
}

const request = extend({ prefix, timeout, errorHandler });

request.interceptors.request.use((url, options) => {
    const headers = { Authorization: 'token' };
    return {
        url,
        options: {
            ...options,
            headers,
            interceptors: true
        }
    };
}, { global: true });

request.interceptors.response.use(async res => {
    try {
        const data = await res.clone().json();
        switch (res.status) {
            case 200:
                return Promise.resolve(data);
            case 401:
                message.warn(HTTP_INTERIOR_CODE[401]);
                setTimeout(() => window.location.reload(), 1800);
                return Promise.reject(data);
            default:
                message.warn(HTTP_INTERIOR_CODE[500]);
                return Promise.reject(data);
        }
    } catch (e) {
        console.error('Request-Error', e);
        notification.error({
            message: '请求失败',
            description: HTTP_STATUS_CODE[res.status] || 'HTTP未知错误'
        });
        return Promise.reject();
    };
}, { global: true });


export default request;