import request from '@/utils/request';

/**
 * 英雄列表
 */
export function getHeroList() {
    return request('/rest/hero', {
        method: 'GET',
    });
};


/**
 * 新增英雄
 */
export function addHeroDetails(data: any) {
    return request('/rest/hero', {
        method: 'POST',
        data
    });
};