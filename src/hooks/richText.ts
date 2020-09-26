import { useEffect, useMemo } from 'react';
import { EditorUtils } from '@/utils/editText';

export function useEditor(): [EditorUtils] {

    const edit = useMemo(() => new EditorUtils(), []);

    useEffect(() => {
        edit.create();
        return () => edit.unmount();
    }, [edit]);

    return [edit];

};
