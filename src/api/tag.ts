import request from '@/utils/request';

/**
 * 新增标签
 */
export interface addTag { name: string; };

export function addTag(data: addTag) {
    return request<TagParam>('/rest/categories', {
        method: 'POST',
        data
    });
};

/**
 * 获取标签列表
 */
export type TagList = TagParam & { parent: TagParam };

export function getTagList() {
    return request<TagList[]>('/rest/categories', {
        method: 'GET',
    });
};

/**
 * 编辑标签 修改标签名称
 */
export interface TagParam extends addTag {
    _id: string;
    parent: TagParam;
};

export function changeTagDetails(data: TagParam) {
    return request<TagParam & { parent: string }>('/rest/categories', {
        method: 'PUT',
        data
    });
};

/**
 * 删除标签
 */
export function deleteTag(params: TagParam) {
    return request<{ msg: string }>('/rest/categories', {
        method: 'DELETE',
        params
    });
};