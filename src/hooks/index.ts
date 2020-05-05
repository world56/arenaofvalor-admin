import { useState } from 'react';
import { ObjType } from '@/@types/utils';

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