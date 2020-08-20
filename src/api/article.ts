import request from '@/utils/request';
import { MongoModel } from '@/@types/mongo';

/**
 * 新增文章详情
 */
export function addArticleDetails(data: any) {
    return request('/rest/article', {
        method: 'POST',
        data
    });
};
