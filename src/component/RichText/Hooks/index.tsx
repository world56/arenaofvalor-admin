import React, {
    memo,
    useEffect,
    forwardRef,
    useCallback,
    useImperativeHandle,
} from 'react';
import styles from '../index.styl?';
import { useEditor, EditorUtils } from '../index';

interface RichTextProps {
    defaultValue?: string;
    /**
     * @name onChange 监听变化
     * @warning 注意使用记忆函数
     */
    onChange?: (val: string | void) => void;
};

type RichTextComponent = React.ForwardRefRenderFunction<
    EditorUtils,
    RichTextProps
>;

const RichText: RichTextComponent = (props, ref) => {

    const { onChange, defaultValue } = props;

    const [edit] = useEditor();

    const onKeyup = useCallback((val: string) => {
        onChange && onChange(val);
    }, [onChange]);

    useEffect(() => {
        edit.onChange = onKeyup;
    }, [edit, onKeyup]);

    useEffect(() => {
        defaultValue && edit.setContent(defaultValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useImperativeHandle(ref, () => edit, [edit]);

    return (
        <div id={edit.id} className={styles.richText} />
    );
};

export default memo(forwardRef(RichText));
