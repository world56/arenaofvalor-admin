/**
 * @Partial 将接口定义成属性全部可选
 * @param T 基础类
 * @注意    非递归接口
*/
export type Partials<T> = {
    [I in keyof T]?: T[I] | undefined;
};

/**
 * @Picks   提取接口部分定义属性 避免重复定义
 * @param T 基础类
 * @param K 所需要的定义属性
 */
export type Picks<T, K extends keyof T = any> = {
    [I in K]: T[I];
};

/**
 * @DiffTypes 返回差异比较接口属性
 * @param T   基础类
 * @param U   需要比较的接口(exnteds => true)
 */
export type DiffTypes<T, U> = T extends U ? never : T;