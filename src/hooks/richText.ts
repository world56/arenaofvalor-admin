import { useEffect, useMemo } from 'react';
import { EditorUtils, createEditorId } from '@/utils/editText';

export function useEditor(): [EditorUtils] {

    const id = useMemo(() => createEditorId(), []);
    const edit = useMemo(() => new EditorUtils(id), [id]);

    useEffect(() => {
        edit.create();
        return () => edit.unmount();
    }, [edit]);

    return [edit];
};
