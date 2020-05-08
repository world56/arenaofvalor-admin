import request from '@/utils/request';
import { MongoModel } from '@/@types/mongo';

/**
 * @英雄技能信息
 */
export type Skills = {
    icon: string;
    name: string;
    tips: string;
    description: string;
}[];

/**
 * @英雄Model
 */
export interface HeroParam {
    _id: string;
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
    return request('/rest/hero', {
        method: 'GET',
    });
};


/**
 * 新增英雄
 */
export function addHeroDetails(data: HeroParam) {
    return request('/rest/hero', {
        method: 'POST',
        data
    });
};

/**
 * 删除英雄
 */
export function deleteHero(params: MongoModel) {
    return request('/rest/hero', {
        method: 'DELETE',
        params
    });
};