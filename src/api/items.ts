import request from '@/utils/request';

/**
 * 新增物品
 */
export interface addItems { name: string; };

export function addItems(data: addItems) {
    return request('/rest/items', {
        method: 'POST',
        data
    });
};

/**
 * 获取物品列表
 */
export function getItemsList() {
    return request('/rest/items', {
        method: 'GET',
    });
};

/**
 * 编辑物品
 */
export interface ItemParam extends addItems {
    _id: string;
    icon: string;
};

export function changeItemsDetails(data: ItemParam) {
    return request('/rest/items', {
        method: 'PUT',
        data
    });
};

/**
 * 删除物品
 */
export function deleteItems(params: ItemParam) {
    return request('/rest/items', {
        method: 'DELETE',
        params
    });
};