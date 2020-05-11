import { useState } from 'react';
import { ObjType } from '@/@types/utils';

/**
 * @FormComponent 上传组件Loading状态管理
 * @setTimeout 解决 getValueFromEvent 事件执行顺序问题
 */
export type useUploadState = ObjType<boolean>;

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

/**
 * @HTMLInputElement 组件直接使用
 * 不需要在去绑定状态和监听事件
 */
export function useIput(value?: string) {
    const [val, setVal] = useState(value);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setVal(e.target.value);
    return {
        val,
        onChange
    };
};