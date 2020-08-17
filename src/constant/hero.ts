import * as  UtilsTypes from '@/@types/utils';

/**
 * @name HERO_TAB 表头参数
 */
export const HERO_TAB = Object.freeze(<const>{
    SKILL: '技能信息',
    BASIC: '基本信息'
});

export declare namespace HERO_TAB_TYPE {
    export type KEY = keyof typeof HERO_TAB;
    export type VAL = UtilsTypes.ConstantVal<typeof HERO_TAB>;
};
