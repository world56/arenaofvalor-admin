/**
 * 原则上这里应该拿当前环境配置变量
 * 从而判断当前环境是测试、BETA、正式 环境
 * 但是由于这是DEMO 并且服务端也没区分环境
 * So 难得搞了
 */

export const timeout = 1000 * 20;

export const prefix = 'http://localhost:4001/admin';

export const uploadFilesUrl = 'http://localhost:4001/admin/upload';

export const iconPath = '//at.alicdn.com/t/font_1764475_kuyw6j2dkod.js';
