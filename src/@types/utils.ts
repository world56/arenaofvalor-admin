
/**
 * 将接口定义成属性可选
*/
export type Partials<T> = {
    [I in keyof T]?: T[I];
};

/**
 * 提取接口部分定义属性 避免重复定义
 */
export type Picks<T, K extends keyof T = any> = {
    [I in K]: T[I];
};

/**
 * 返回差异比较接口属性
 */
export type DiffType<T, U> = T extends U ? never : T;

/**
 * Object Types
 */
export type ObjType<T, A = any> = {
    [I in number | string]: T | A;
};
