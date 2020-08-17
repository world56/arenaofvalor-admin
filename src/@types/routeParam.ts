import * as  UtilsTypes from './utils';
import { Location } from 'history';

/**
 * @name HeroRouteParam 英雄详情页 检索路由参数
 */
export type HeroRouteParam = Location<UtilsTypes.ObjType<string | void>>;
