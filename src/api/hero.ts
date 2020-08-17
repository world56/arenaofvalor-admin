import request from '@/utils/request';
import { MongoModel } from '@/@types/mongo';

/**
 * @name Skills 英雄技能信息
 */
export type Skills = {
    icon: string;
    name: string;
    tips: string;
    description: string;
}[];

/**
 * @name HeroParam 英雄Model
 */
export interface HeroParam extends MongoModel {
    name: string;
    icon: string;
    title: string;
    categorys: string[];
    scores: {
        difficult: number;
        skills: number;
        attack: number;
        survive: number;
    };
    tailwind: string[];
    upwind: Array<string>; // 通过泛类形式断言
    usageTips: string;
    battleTips: string;
    teamTips: string;
    skills: Skills;
};

/**
 * 英雄列表
 */
export function getHeroList() {
    return request<HeroParam[]>('/rest/hero', {
        method: 'GET',
    });
};

/**
 * 新增英雄
 */
export function addHeroDetails(data: HeroParam) {
    return request<HeroParam>('/rest/hero', {
        method: 'POST',
        data
    });
};

/**
 * 编辑英雄
 */
export function editHeroDetails(data: HeroParam) {
    return request<HeroParam>('/rest/hero', {
        method: 'PUT',
        data
    });
};

/**
 * 删除英雄
 */
export function deleteHero(params: MongoModel) {
    return request<void>('/rest/hero', {
        method: 'DELETE',
        params
    });
};

/**
 * 获取英雄详情
 */
export function getHeroDetails(params: MongoModel) {
    return request<HeroParam>(`/rest/hero/${params._id}`, {
        method: 'GET',
        params
    });
};