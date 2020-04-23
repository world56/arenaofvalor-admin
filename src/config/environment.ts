/**
 * 原则上这里应该去拿当前环境配置变量
 * 从而判断当前环境是测试、beta、正式 环境
 * 但是由于这里是DEMO 并且服务端也没区分环境
 * so 难道搞了
 */

export const requsetTimeout = 1000 * 20;

export const baseUrl = 'http://localhost:4001/admin';

export const uploadFilesUrl = 'http://localhost:4001/admin/upload';

export const iconPath = '//at.alicdn.com/t/font_1764475_lk0ctx3p3jf.js';
