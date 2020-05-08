import { useState } from 'react';
import { ObjType } from '@/@types/utils';

export type useUploadState = ObjType<boolean>;

/**
 * @FormComponent 上传组件Loading状态管理
 * @setTimeout 目的为了解决 getValueFromEvent 事件执行顺序问题
 */
export function useUploadState() {

    const [load, setLoad] = useState<useUploadState>({});

    function setState(
        k: string | number,
        bol: boolean
    ) {
        setTimeout(() => {
            setLoad((s: useUploadState) => {
                return {
                    ...s,
                    [k]: bol
                }
            });
        });
    };

    return {
        load,
        setState
    };
};